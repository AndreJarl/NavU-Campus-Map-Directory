import { useState, useEffect } from 'react';


import SearchBar from '../components/SearchBar';
import buildingData from '../data/buildingData';
import RoomInfo from '../components/RoomInfo';
import BldOverview from '../components/BldOverview';
import Categories from '../components/Categories';
import { useFloorQuery } from '../context/FloorContext';
import { useQuery } from '../context/QueryContext';
import DraggableZoomableSVG from '../components/DraggableZoomableSVG';
import Panorama from '../components/Panorama';
import PanoramaViewer from '../components/PanoramaViewer';
import { useCategory } from '../context/CategoryContext';



function Map() {

      const {query, setQuery} = useQuery();
      const {setCategory} = useCategory();


          const [searchTerm, setSearchTerm]= useState("");
          const [suggestions, setSuggestions] = useState([]);
          const [showMenu, setShowMenu] = useState(false);
          const [disable, setDisable] = useState(false);

          const [showPopup, setShowPopup] = useState(false);
          const {currentFloor, setCurrentFloor} = useFloorQuery();

          const [roomClicked, setRoomClicked] = useState(false);
          const [roomSearched, setRoomSearched] = useState(false);
          const [bldCliked, setBldClicked] = useState(false);
    


       


        useEffect(() => {
        console.log("Query updated:", query);
      }, [query]);



              /////////////////////////////////////// for search bar functions /////////////////////////////////////////////////////
    
    
     const handleSearch = (e) =>{
    
        const value = e.target.value;
          setSearchTerm(value);
    
        if(!value){
            setSuggestions([]);
            return;
        }
    
        const result = [];
      
        for(const [buildingName, building] of Object.entries(buildingData)){
                    // 🔹 1. Check building name itself
                if (buildingName.toLowerCase().includes(value.toLowerCase())) {
                result.push({
                    building: buildingName,
                    floor: null,
                    room: null,
                });
                }
              if (!building.rooms) continue; // Skip buildings without "rooms"
            for(const [floor, rooms] of Object.entries(building.rooms)){
                rooms.forEach((room)=>{
                     if(room.code.toLowerCase().includes(value.toLowerCase()) || room.name.toLowerCase().includes(value.toLowerCase())){
                         result.push({
                             building:buildingName,
                             floor,
                             room
                         });
                     }
                });
            }
        }
           setSuggestions(result);
           
     }
    
    const handleSuggestionClicked = (suggestion) => {
  console.log(`suggestion:`);
   console.log(suggestion);
  setQuery(prev => ({
    ...prev,
    building: suggestion.building || prev.building,
    floor: suggestion.floor || prev.floor,
    room: {
      name: suggestion.room?.name || prev.room?.name,
      code: suggestion.room?.code || prev.room?.code,
      img: suggestion.room?.img || prev.room?.img,
      description: suggestion.room?.description || prev.room?.description,
    }
  }));

  // Reset all view states first


     if(suggestion.room){
         setRoomSearched(true);
          setBldClicked(false);  
         
        }

      // Set the appropriate state based on suggestion type
      if (!suggestion.room) {
        // Building-level search - show building overview
        setBldClicked(true);  // This is what controls BldOverview rendering
        setRoomSearched(false);
      }
  
  setSearchTerm("");  
  setSuggestions([]);
  setDisable(true);
  console.log("query");
   console.log(query);

}
    
     const handleOpenPopup = (buildingName) =>{
          if(isDragging == false){
              setQuery(prev => ({
          ...prev,
          building: buildingName   // only update building
        }));
             setShowInfoPanel(false);
             setShowPopup(true);
            setDisable(true);
            
          }
     }
    
    // Example: When user clicks a building or room card
const OpenCard = (clickedName) => {
  setCategory("");
  let selected = null;

  // Loop through buildings
  for (const [buildingName, building] of Object.entries(buildingData)) {
    // 🏢 If user clicked a building name
    if (buildingName === clickedName) {
      selected = { building: buildingName, floor: null, room: null };
      break;
    }

    // Skip buildings without rooms
    if (!building.rooms) continue;

    // 🏬 Search rooms for a match
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

  // If a building or room was found, update query
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
   
  if(selected.room){
      setRoomSearched(true);
      setBldClicked(false);
  }
  if(!selected.room){
      setBldClicked(true);
       setRoomSearched(false);
  }
  console.log(query);
};



  return (

    <div>

            <DraggableZoomableSVG OpenCard={OpenCard}/>          
             <Categories />
            
            {/* <PanoramaViewer /> */}

                        <SearchBar searchTerm={searchTerm} suggestions={suggestions}  handleSearch={handleSearch} handleSuggestionClicked={handleSuggestionClicked} />


            { roomSearched  && (
            <>
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
            </>
                )}

           {bldCliked &&(
                <>
                <BldOverview query={query}
                setQuery={setQuery}
                setBldClicked={setBldClicked}
                handleOpenPopup={handleOpenPopup}
                setRoomSearched={setRoomSearched}
                roomSearched={roomSearched}
                />
                </>
           )
}


    </div>
  )
}

export default Map