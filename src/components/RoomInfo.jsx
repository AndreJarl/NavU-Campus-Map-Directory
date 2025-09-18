import { AiOutlineClose } from "react-icons/ai";
import { useQuery } from "../context/QueryContext";
import { CornerUpRight } from "lucide-react";
import buildingData from "../data/buildingData"

function RoomInfo({ setShowPopup, showPopup, roomSearched, setRoomSearched }) {
  const { query } = useQuery();
  const { room, floor } = query; // ✅ pull out building too

  const handleDirections = () => {
    setRoomSearched(false);
    setShowPopup(true);
    console.log(query);
  };



  return (
    <div
      className={` ${
        roomSearched ? "fixed" : "hidden"
      } m-3 lg:left-[30%] top-8 lg:top-8 border-2 py-2 border-opacity-50 border-gray-400 rounded-2xl pt-5 lg:pt-4 px-4 h-[65%] lg:h-[500px] w-[310px] md:w-[310px] lg:w-[500px] bg-white shadow-2xl p-2 transform transition-transform ease-in-out duration-700 z-[1000] flex flex-col`}
    >
      {/* Close Button */}
      <div className="p-4 pt-3 top-0 absolute right-0 flex justify-between items-center z-50">
        <button
          onClick={() => setRoomSearched(false)}
          className="rounded-full bg-red-500 hover:bg-red-700 font-bold text-xl flex gap-2 items-center text-white px-2 py-2"
        >
          <AiOutlineClose />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 px-5 mt-2">
        <h2 className="text-2xl lg:text-3xl font-semibold text-shadow-lg">
          {room?.name} 
        </h2>
        <h3 className="mb-2 font-medium text-red-700 text-base">
          Floor {floor}
        </h3>
        <img className="w-[100%] h-[60%]" src={room.image} alt="" />
      <h3 className=" font-medium text-gray-700 text-xl">
          {room.code}
        </h3>
        <p className="mb-2">{room.description}</p>
      </div>

      {/* Fixed Button at bottom */}
      <div className="">
        <button
          className="py-3 px-6 bg-red-500 flex gap-3 text-white rounded-3xl justify-center"
          onClick={handleDirections}
        >
          <CornerUpRight /> Get Directions
        </button>
      </div>
    </div>
  );
}

export default RoomInfo;
