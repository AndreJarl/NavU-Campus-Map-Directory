import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import cardData from "../data/CardData";
import { Building2, Signpost } from "lucide-react";
import buildingData from "../data/buildingData";

function BldOverview({ query, setQuery, setBldClicked, handleOpenPopup, setRoomSearched }) {
  const buildingDatas = cardData[query.building];
  const rooms = buildingData?.[query.building]?.rooms;

  const [selectedFloor, setSelectedFloor] = useState(
    rooms ? Object.keys(rooms)[0] : null
  ); // default to first floor

  const CloseCard = () => {
    setBldClicked(false);
  };

  const clickedViewBtn = () => {
    setBldClicked(false);
    handleOpenPopup(query.building);
  };

    
  return (
    <>
      {/* Card */}
      <div
        className={`${
          buildingDatas ? "fixed left-4 top-16" : "hidden"
        } z-40 flex flex-col rounded-2xl border border-white/20 
        w-[360px] lg:w-[450px] 2xl:w-[560px] h-[85%] 
        bg-black/80 backdrop-blur-md shadow-2xl 
        transform transition-transform ease-in-out duration-700`}
      >
        {/* Image */}
        <div className="relative w-full h-[40%] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-t-2xl"
            src={buildingDatas?.img}
            alt={query.building || "Building Image"}
          />
        </div>

        {/* Close button */}
        <button
          onClick={CloseCard}
          className="flex gap-2 items-center absolute right-5 top-3 
                    bg-red-600 hover:bg-red-800 text-white text-xl 
                    px-3 py-3 rounded-full shadow-lg"
        >
          <AiOutlineClose />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Building Info Section */}
          <div className="p-5 flex flex-col gap-3 text-white">
            <p className="text-2xl lg:text-3xl font-bold uppercase">
              {query.building}
            </p>
            <p className="font-semibold text-base lg:text-lg">
              Floors: {buildingDatas?.totalFloors || "No Data Available."}
            </p>

            {/* View Building & Directions buttons */}
            <div className="flex flex-row gap-4">
              <button
                className="mt-2 flex gap-3 items-center 
                           bg-red-600/80 hover:bg-red-600/40 
                           text-white font-semibold px-4 py-2 text-sm lg:text-base 
                           rounded-xl shadow-md transition duration-200 w-fit 
                           backdrop-blur-md border border-white/20"
                onClick={clickedViewBtn}
              >
                <Signpost /> Get Directions
              </button>
            </div>

            {/* Floor selection */}
            {rooms && (
              <div className="mt-4">
                <label className="block text-sm mb-2 text-gray-300">
                  Select Floor:
                </label>
                <select
                  value={selectedFloor}
                  onChange={(e) => setSelectedFloor(e.target.value)}
                  className="w-full bg-black border-white/20 rounded-lg p-2 text-white text-sm backdrop-blur-md"
                >
                  {Object.keys(rooms).map((floor) => (
                    <option key={floor} value={floor}>
                      Floor {floor}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Rooms List */}
          <div className="p-5 space-y-3">
            {rooms && rooms[selectedFloor] ? (
              rooms[selectedFloor].map((room, index) => (
                <div   onClick={() => {
                
                      setRoomSearched(true);
              
                    }}
                  key={index}
                  className="p-4 cursor-pointer bg-white/10 rounded-lg hover:bg-white/20 transition shadow-md"
                >
                  <p className="font-bold text-white text-lg">{room.name}</p>
                  <p className="text-sm text-gray-200">{room.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic">No rooms available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BldOverview;
