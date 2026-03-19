import { useState, useEffect, useMemo, useCallback } from "react";

import SearchBar from "../components/SearchBar";
import buildingData from "../data/buildingData";
import RoomInfo from "../components/RoomInfo";
import button360 from "../assets/Logo/360.png";
import BldOverview from "../components/BldOverview";
import Categories from "../components/Categories";
import { useFloorQuery } from "../context/FloorContext";
import { useQuery } from "../context/QueryContext";
import DraggableZoomableSVG from "../components/DraggableZoomableSVG";
import PanoramaViewer from "../components/PanoramaViewer";
import { useCategory } from "../context/CategoryContext";
import { useScene } from "../context/SceneContext";
import { useLocation } from "react-router-dom";
import Floors from "../components/Floors";
import { useZoomContext } from "../context/ZoomContext";
import { usePath } from "../context/PathContext";
import SurveyForm from "../components/SurveyForm";


function Map() {
  const { query, setQuery } = useQuery();
  const { setCategory } = useCategory();
  const { setCurrentScene } = useScene();
  const { setPath } = usePath();
  const { currentFloor, setCurrentFloor } = useFloorQuery();
  const { zoomToBuilding } = useZoomContext();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [disable, setDisable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [roomSearched, setRoomSearched] = useState(false);
  const [bldCliked, setBldClicked] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [keyboardClicked, setKeyboardClicked] = useState(false);
  const [survey, setSurvey] = useState(false);

  const isNavigating = !!(query.room?.name || query.room?.code || query.building);

  const fuzzyMatch = useCallback((str, queryText) => {
    const source = (str || "").toLowerCase();
    const target = (queryText || "").toLowerCase();

    let i = 0;
    for (let j = 0; j < source.length && i < target.length; j++) {
      if (source[j] === target[i]) i++;
    }
    return i === target.length;
  }, []);

  useEffect(() => {
  console.log("survey:", survey);
}, [survey]);

useEffect(() => {
  console.log("isNavigating:", isNavigating);
}, [isNavigating]);

  const searchIndex = useMemo(() => {
    const result = [];

    for (const [buildingName, building] of Object.entries(buildingData)) {
      result.push({
        building: buildingName,
        floor: null,
        room: null,
        buildingNameLower: buildingName.toLowerCase(),
        roomNameLower: "",
        roomCodeLower: "",
      });

      if (!building.rooms) continue;

      for (const [floor, rooms] of Object.entries(building.rooms)) {
        for (const room of rooms) {
          result.push({
            building: buildingName,
            floor,
            room,
            buildingNameLower: buildingName.toLowerCase(),
            roomNameLower: (room?.name || "").toLowerCase(),
            roomCodeLower: (room?.code || "").toLowerCase(),
          });
        }
      }
    }

    return result;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const building = params.get("building");
    const floor = params.get("floor");
    const name = params.get("name");
    const code = params.get("code");
    const path = params.get("path");

    if (!building && !name && !code) return;

    let selected = null;

    for (const [buildingName, buildingDataItem] of Object.entries(buildingData)) {
      if (building && buildingName !== building) continue;
      if (!buildingDataItem.rooms) continue;

      for (const [floorKey, rooms] of Object.entries(buildingDataItem.rooms)) {
        if (floor && String(floorKey) !== String(floor)) continue;

        for (const room of rooms) {
          const codeMatch = code && room.code === code;
          const nameMatch = name && room.name === name;

          if (codeMatch || nameMatch) {
            selected = {
              building: buildingName,
              floor: floorKey,
              room,
            };
            break;
          }
        }

        if (selected) break;
      }

      if (selected) break;
    }

    if (!selected && building) {
      selected = {
        building,
        floor: floor || null,
        room: null,
      };
    }

    if (!selected) return;

    setQuery((prev) => ({
      ...prev,
      building: selected.building || "",
      floor: selected.floor || "",
      room: selected.room
        ? {
            name: selected.room.name || "",
            code: selected.room.code || "",
            img: selected.room.img || "",
            description: selected.room.description || "",
          }
        : { name: "", code: "", img: "", description: "" },
    }));

    if (path) {
      setPath(path);
    }

    if (selected.floor) {
      setCurrentFloor(Number(selected.floor));
    }

    if (selected.room) {
      setRoomSearched(true);
      setBldClicked(false);
      setDisable(true);
      setCurrentScene(selected.room.name);
    } else {
      setBldClicked(true);
      setRoomSearched(false);
      setDisable(true);
      setCurrentScene(selected.building);
    }
  }, [location.search, setQuery, setCurrentFloor, setCurrentScene, setPath]);
 
 useEffect(() => {
    let timer;

    if (!survey && (roomSearched || bldCliked)) { // ← use these instead
      timer = setTimeout(() => {
        setSurvey(true);
      }, 60000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [survey, roomSearched, bldCliked]);


  const handleSearch = useCallback(
    (e) => {
      const value = e?.target ? e.target.value : e;
      setSearchTerm(value);

      if (!value) {
        setSuggestions([]);
        return;
      }

      const lowered = value.toLowerCase();

      const result = searchIndex.filter((item) => {
        if (!item.room) {
          return fuzzyMatch(item.buildingNameLower, lowered);
        }

        return (
          fuzzyMatch(item.roomCodeLower, lowered) ||
          fuzzyMatch(item.roomNameLower, lowered)
        );
      });

      setSuggestions(result);
    },
    [searchIndex, fuzzyMatch]
  );

  const handleSuggestionClicked = useCallback(
    (suggestion) => {
      if (suggestion.floor) {
        setCurrentFloor(Number(suggestion.floor));
      }

      setQuery((prev) => ({
        ...prev,
        building: suggestion.building || prev.building,
        floor: suggestion.floor || prev.floor,
        room: {
          name: suggestion.room?.name || prev.room?.name,
          code: suggestion.room?.code || prev.room?.code,
          img: suggestion.room?.img || prev.room?.img,
          description: suggestion.room?.description || prev.room?.description,
        },
      }));

      if (suggestion.room) {
        setRoomSearched(true);
        setBldClicked(false);
        setCurrentScene(suggestion.room.name);
      } else {
        setCurrentScene(suggestion.building);
        setBldClicked(true);
        setRoomSearched(false);
      }

      setSearchTerm("");
      setSuggestions([]);
      setDisable(true);
    },
    [setCurrentFloor, setQuery, setCurrentScene]
  );

  const handleOpenPopup = useCallback(
    (buildingName) => {
      setQuery((prev) => ({
        ...prev,
        building: buildingName,
      }));
      setShowPopup(true);
      setDisable(true);
    },
    [setQuery]
  );

  const OpenCard = useCallback(
    (clickedName) => {
      setCategory("");
      let selected = null;

      for (const [buildingName, building] of Object.entries(buildingData)) {
        if (buildingName === clickedName) {
          selected = { building: buildingName, floor: null, room: null };
          break;
        }

        if (!building.rooms) continue;

        for (const [floor, rooms] of Object.entries(building.rooms)) {
          for (const room of rooms) {
            if (room.name === clickedName || room.code === clickedName) {
              selected = { building: buildingName, floor, room };
              break;
            }
          }
          if (selected) break;
        }
        if (selected) break;
      }

      if (selected) {
        setQuery((prev) => ({
          ...prev,
          building: selected.building || prev.building,
          floor: selected.floor || prev.floor,
          room: {
            name: selected.room?.name || prev.room?.name,
            code: selected.room?.code || prev.room?.code,
            img: selected.room?.img || prev.room?.img,
            description: selected.room?.description || prev.room?.description,
          },
        }));
      }

      if (selected?.room) {
        setRoomSearched(true);
        setBldClicked(false);
      } else {
        setBldClicked(true);
        setRoomSearched(false);
      }
    },
    [setCategory, setQuery]
  );

  const handleSvgDragStart = useCallback(() => {
    setKeyboardClicked(false);
  }, []);

  return (
    <div className="h-[100%]">
      <DraggableZoomableSVG OpenCard={OpenCard} onDragStart={handleSvgDragStart} />

      <button
        onClick={() => setClicked((prev) => !prev)}
        className="absolute lg:bottom-4 right-[26px] z-10 w-12 h-12 lg:w-12 lg:h-12 
                   bg-red-600 rounded-full flex items-center justify-center 
                   border-2 border-red-400/40 shadow-[0_0_15px_#dc2626]
                   hover:bg-red-500 hover:shadow-[0_0_35px_#ef4444] 
                   hover:scale-110 transition-all duration-300 active:scale-95 group"
        title="Street View"
      >
        <img width={31} src={button360} alt="" />
      </button>

          <button
        onClick={() => setSurvey(true)}
        className="absolute lg:bottom-4 left-[10px] z-10 w-12 h-12 lg:w-12 lg:h-12 
                   bg-red-600 rounded-full flex items-center justify-center 
                   border-2 border-red-400/40 shadow-[0_0_15px_#dc2626]
                   hover:bg-red-500 hover:shadow-[0_0_35px_#ef4444] text-[10px]
                   hover:scale-110 transition-all duration-300 active:scale-95 group"
        title="Street View"
      >
       survey
      </button>

      {clicked && <PanoramaViewer clicked={clicked} setClicked={setClicked} />}

      <Categories />

      <SearchBar
        searchTerm={searchTerm}
        suggestions={suggestions}
        handleSearch={handleSearch}
        keyboardClicked={keyboardClicked}
        setKeyboardClicked={setKeyboardClicked}
        handleSuggestionClicked={handleSuggestionClicked}
        zoomToBuilding={zoomToBuilding}
      />

      {roomSearched && (
        <RoomInfo
          setShowPopup={setShowPopup}
          showPopup={showPopup}
          roomSearched={roomSearched}
          setRoomSearched={setRoomSearched}
          disable={disable}
          setDisable={setDisable}
          bldCliked={bldCliked}
          setBldClicked={setBldClicked}
        />
      )}

      {bldCliked && (
        <BldOverview
          query={query}
          setQuery={setQuery}
          setBldClicked={setBldClicked}
          handleOpenPopup={handleOpenPopup}
          setRoomSearched={setRoomSearched}
          roomSearched={roomSearched}
        />
      )}

      <Floors />

      <SurveyForm survey={survey} setSurvey={setSurvey}/>
    </div>
  );
}

export default Map;