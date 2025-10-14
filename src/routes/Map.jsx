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



function Map() {

      const {query, setQuery} = useQuery();
          const [searchTerm, setSearchTerm]= useState("");
          const [suggestions, setSuggestions] = useState([]);
          const [showMenu, setShowMenu] = useState(false);

        const [category, setCategory] = useState({
          Restroom: false,
          Sports: false,
          Room: false,
          Laboratory: false,
          Food: false
        });


         const [roomClicked, setRoomClicked] = useState(false);
          const [roomSearched, setRoomSearched] = useState(false);
          const [bldCliked, setBldClicked] = useState(false);
    
    
          const [cardData, setCardData] = useState(null);
          const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
          const [disable, setDisable] = useState(false);
          const [survey, setSurvey] = useState(false);



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
    
     const handleSuggestionClicked = (suggestions) =>{
      console.log(suggestions);
          setQuery(prev => ({
      ...prev,
      building: suggestions.building || prev.building,
      floor: suggestions.floor || prev.floor,  // ✅ store floor at top-level
      room: {
        name: suggestions.room?.name || prev.room?.name,
        code: suggestions.room?.code || prev.room?.code,
        img: suggestions.room?.img || prev.room?.img,
        description: suggestions.room?.description || prev.room?.description,
      }
    }));
    
        if(!suggestions.room){
         
             setShowPopup(true);
             setRoomSearched(false);
        }
        if(suggestions.room){
         setRoomSearched(true);
        }
              setSearchTerm("");  
              setSuggestions([]);
             
              console.log(query);
             setDisable(true);
              
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
    
     const OpenCard = (e, buildingName) =>{
          setRoomSearched(false);
           if(isDragging == false){
              setQuery(prev => ({
          ...prev,
          building: buildingName   // only update building
        }));
        setBldClicked(true);
      }
     }


  return (

    <div>

            <DraggableZoomableSVG/>          
             <Categories categories={category} setCategory={setCategory} />
            
            <PanoramaViewer />
            
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
                />
                </>
           )
}
    </div>
  )
}

export default Map