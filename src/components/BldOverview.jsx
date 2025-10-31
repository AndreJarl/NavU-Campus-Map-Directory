import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import cardData from "../data/CardData";
import { Building2, Signpost } from "lucide-react";
import buildingData from "../data/buildingData";
import { usePath } from "../context/PathContext";



function BldOverview({ query, setQuery, setBldClicked, handleOpenPopup, setRoomSearched }) {
  const buildingDatas = cardData[query.building];
  const rooms = buildingData?.[query.building]?.rooms;
  const {setPath} = usePath();
 

  const [selectedFloor, setSelectedFloor] = useState(
    rooms ? Object.keys(rooms)[0] : null
  ); // default to first floor

  const CloseCard = () => {
    setBldClicked(false);
    setPath("");
  };



    
  return (
    <>
      {/* Card */}
      <div
        className={`${
          buildingDatas ? "fixed inset-x-0 mx-auto lg:mx-0 lg:absolute lg:left-8 top-32 lg:top-20 z-50" : "hidden"
        } z-[99] flex flex-col rounded-2xl border border-white/20 
        mx-2 lg:w-[450px] 2xl:w-[450px] w-[50%] h-[50%] lg:h-[85%]
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
            <p className="text-base lg:text-3xl font-bold uppercase">
              {query.building}
            </p>
            <p className="font-normal text-sm lg:text-lg">
              No. of Floors: {buildingDatas?.totalFloors || "No Data Available."}
            </p>

            {/* View Building & Directions buttons */}
            <div className="flex flex-row gap-4">
              <button
                className="mt-2 flex gap-3 items-center 
                           bg-red-600/80 hover:bg-red-600/40 
                           text-white font-semibold px-4 py-1 lg:px-4 lg:py-2 text-xs lg:text-base 
                           rounded-xl shadow-md transition duration-200 w-fit 
                           backdrop-blur-md border border-white/20"
                onClick={()=>setPath(query.building)}
              >
                <Signpost /> Get Directions
              </button>
            </div>
        </div>
            {/* Floor selection */}
            {rooms && (
              <div className="mt-4  w-full">
                <label className="block px-6 lg:text-sm text-xs mb-2 text-gray-300">
                  Select Floor:
                </label>
              <div className="flex flex-wrap items-center">
                  {Object.keys(rooms).map((floor)=>(
                     <button key={floor} onClick={()=>setSelectedFloor(floor)} className={` flex-1 text-xs lg:text-base rounded-t-xl text-white font-bold transition-all w-full duration-200 
                       ${selectedFloor === floor ? 'bg-white/20' : ''}
                     py-2`}>
                       Floor {floor}
                     </button>
                  ))}
              </div>
              </div>
            )}
         

          {/* Rooms List */}
          <div className="pt-10 pb-7  bg-white/20 px-4 space-y-3">
            {rooms && rooms[selectedFloor] ? (
              rooms[selectedFloor].map((room, index) => (
                <div    onClick={() => {
                        setQuery((prev) => ({
                          ...prev,
                          floor: selectedFloor,
                          room: {
                            name: room.name,
                            code: room.code || "",
                            img: room.img || "",
                            description: room.description || "",
                            floor: selectedFloor,
                          },
                        }));
                        setRoomSearched(true);
                        setBldClicked(false)
                      }}
                  key={index}
                  className="p-4 cursor-pointer bg-white/10 rounded-lg hover:bg-white/20 transition shadow-md"
                >
                  <p className="font-bold text-white text-sm lg:text-lg">{room.name}</p>
                  <p className="lg:text-sm text-xs text-gray-200">{room.description}</p>
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
