import React, { useState, useEffect } from 'react';
import buildingData from '../data/buildingData';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaRightLong, FaLeftLong } from "react-icons/fa6";
import PanoramaViewer from './PanoramaViewer';
import { useQuery } from '../context/QueryContext';

function ShowPopUp({ closeSideBar, currentFloor, handleNextFloor, handlePreviousFloor, setRoomClicked }) {
  const [isSliding, setIsSliding] = useState(true);
  
  const {query} = useQuery();
  const {room} = query;

  useEffect(() => {
    setTimeout(() => setIsSliding(false), 150);
  }, []);

  const handleClose = () => {
    setIsSliding(true);
    setTimeout(closeSideBar, 150);
    setRoomClicked(false);
  };

    
         const floorText = currentFloor === 1 ? "GROUND" : currentFloor === 2 ? "SECOND" : currentFloor === 3 ? "THIRD" : "";
        
    


  return (
    <>
    <div className={`absolute w-full md:w-[90%] lg:w-[100%] h-screen pt-0 md:pt-0 lg:pt-0 lg:h-[100%] 2xl:w-[75%] left-0 top-0 z-40 bg-white/30 transition-transform duration-150 ease-in-out ${isSliding ? '-translate-x-full' : 'translate-x-0'} backdrop-blur-lg backdrop-filter`} >
          <div className="flex flex-col  overflow-hidden h-screen pt-28 md:pt-10  lg:h-[100%]  lg:pt-10 relative px-10 shadow-2xl">
                    <button onClick={handleClose} className="flex gap-2 items-center absolute right-8 top-5 bg-red-600 hover:bg-red-800 text-white px-2 text-base lg:px-4 py-1 rounded-lg"><FaLongArrowAltLeft/> Close</button>
                    <p className="lg:text-4xl text-2xl font-medium">{typeof query === "string" ? query : query?.building} </p>
                    <p className="lg:text-[24px] ml-5 text-gray-800 pt-1 text-xl font-normal">📍{floorText} FLOOR</p>
                  <div onClick={()=>setRoomClicked(true)} className="flex items-center flex-col ">
                    
                      {buildingData[query?.building]?.floorImages?.[currentFloor]}

    
                    
                    
                  </div>
                  <div className="absolute bottom-10 flex justify-center items-center gap-4 sm:gap-6 w-full px-10">
                  <button 
                    onClick={handlePreviousFloor} 
                    className={`bg-blue-500 text-white flex items-center gap-2 lg:p-2 rounded p-1 text-xs lg:text-base
                      ${buildingData[query.building]?.totalFloors > 1 && currentFloor > 1 ? '' : 'invisible'}`}
                  > 
                    Previous Floor <FaLeftLong />
                  </button>
                  
                  <button 
                    onClick={handleNextFloor} 
                    className={`bg-blue-500 text-white flex gap-2 items-center lg:p-2 rounded p-1 text-xs lg:text-base
                      ${buildingData[query.building]?.totalFloors > 1 && currentFloor < buildingData[query.building]?.totalFloors ? '' : 'invisible'}`}
                  > 
                    Next Floor <FaRightLong />
                  </button>
                </div>

              </div>
        </div>
   {room && (
   
    <PanoramaViewer />
  
)}


        
       
        </>
  )
}

export default ShowPopUp;