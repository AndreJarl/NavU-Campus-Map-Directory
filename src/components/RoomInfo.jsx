import { AiOutlineClose } from "react-icons/ai";
import { useQuery } from "../context/QueryContext";
import buildingData from "../data/buildingData";
import room from "../assets/ctubgg.png";
import {CornerUpRight } from "lucide-react";


function RoomInfo({setShowPopup, showPopup, roomSearched, setRoomSearched}) {
    const {query} = useQuery();
     const { room } = query;


     const handleDirections = () =>{
         setRoomSearched(false);
         setShowPopup(true);
         console.log(query);
     } 

  return (
<div className={` ${roomSearched ? 'fixed' : 'hidden'} m-3 lg:left-[30%] md:right-7 2xl:right-[-33%] top-8 lg:top-8 border-2 py-2 border-opacity-50 border-gray-400 rounded-2xl  pt-5 lg:pt-4 px-4 h-[65%] lg:h-[500px] 2xl:h-[60%] w-[310px] md:w-[310px] lg:w-[500px] 2xl:w-[40%] bg-white shadow-2xl p-2 transform transition-transform ease-in-out duration-700 z-[1000] `}>


                       
     <div className="p-4 pt-3  top-0 absolute right-0 flex justify-between items-center z-50 ">
        
         {/* <button onClick={() => setShowInfoPanel(false)} className="text-white rounded-lg font-normal text-base flex gap-2 items-center bg-red-600 px-3 py-1">Close <FaArrowRightLong/></button> */}
         <button onClick={()=>setRoomSearched(false)}  className="rounded-full bg-red-500 hover:bg-red-700 font-bold text-xl flex gap-2 items-center text-white px-2 py-2"><AiOutlineClose/></button>
     </div>
     <div className="p-4 flex flex-col gap-3 px-5   mt-2 ">
           <h2 className=" text-2xl lg:text-3xl font-semibold text-shadow-lg"> {room?.name}</h2>
               <h3 className=" mb-2 font-medium text-gray-700 text-base"> {room.code}</h3>
             <img className='w-[100%]'  src={room.image} alt="" srcset="" />
             <i className="text-xs text-red-500 font-normal text-center">image of {room.code}</i>
             <p className="mb-2">{room.description}</p>
             <div>
                <button className="py-3 px-6 bg-red-500 flex gap-3 text-white rounded-3xl" onClick={handleDirections}> <CornerUpRight /> Get Directions</button>
             </div>
     </div>
    </div>
  )
}

export default RoomInfo