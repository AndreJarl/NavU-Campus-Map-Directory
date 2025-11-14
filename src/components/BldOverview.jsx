import { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import cardData from "../data/CardData";
import { Building2, Signpost, ChevronUp, ChevronDown, Minus, Ellipsis } from "lucide-react";
import buildingData from "../data/buildingData";
import { usePath } from "../context/PathContext";
import { useScene } from "../context/SceneContext";

function BldOverview({ query, setQuery, setBldClicked, handleOpenPopup, setRoomSearched }) {
  const buildingDatas = cardData[query.building];
  const rooms = buildingData?.[query.building]?.rooms;
  const { setPath } = usePath();
  const { setCurrentScene } = useScene();
  
  const [cardHeight, setCardHeight] = useState(40); // percentage of screen height
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const cardRef = useRef(null);

  const [selectedFloor, setSelectedFloor] = useState(
    rooms ? Object.keys(rooms)[0] : null
  );

  // Height limits
  const MIN_HEIGHT = 20;
  const MAX_HEIGHT = 85;

  const CloseCard = () => {
    setBldClicked(false);
    setPath("");
    setCurrentScene("Main Gate");
  };

  // Handle touch/mouse events for dragging - MOBILE ONLY
  const handleDragStart = (e) => {
    // Only allow dragging on mobile (when lg breakpoint is not active)
    if (window.innerWidth >= 1024) return;
    
    setIsDragging(true);
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
    setStartHeight(cardHeight);
    
    // Prevent default to avoid text selection
    e.preventDefault();
  };

  const handleDragMove = (e) => {
    // Only allow dragging on mobile
    if (window.innerWidth >= 1024) return;
    if (!isDragging) return;

    const clientY = e.type.includes('touch') ? 
      (e.touches ? e.touches[0].clientY : e.changedTouches[0].clientY) : 
      e.clientY;
    
    const deltaY = startY - clientY;
    const newHeight = Math.min(Math.max(startHeight + (deltaY / window.innerHeight) * 100, MIN_HEIGHT), MAX_HEIGHT);
    
    setCardHeight(newHeight);
  };

  const handleDragEnd = () => {
    // Only allow dragging on mobile
    if (window.innerWidth >= 1024) return;
    if (!isDragging) return;
    setIsDragging(false);
  };

  // Add event listeners for dragging - MOBILE ONLY
  useEffect(() => {
    // Only set up drag events on mobile
    if (window.innerWidth >= 1024) return;
    
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleDragMove);
      document.addEventListener('touchend', handleDragEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleDragMove);
        document.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [isDragging]);

  return (
    <>
      {/* Backdrop overlay for expanded state - MOBILE ONLY */}
      {cardHeight > 40 && window.innerWidth < 1024 && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setCardHeight(40)}
        />
      )}

      {/* Card */}
      <div 
        ref={cardRef}
        className={`${
          buildingDatas ? "fixed inset-x-0 bottom-0 m-2 lg:m-0 lg:absolute lg:left-8 lg:top-20 z-[50]" : "hidden"
        } z-[99] flex flex-col rounded-2xl border border-white/20 
        lg:w-[450px] 2xl:w-[450px] w-auto
        bg-black/80 backdrop-blur-md shadow-2xl pointer-events-auto
        transform transition-all duration-300 ease-out`}
        style={{
          // On desktop (lg and above), use fixed height, on mobile use dynamic height
          height: window.innerWidth >= 1024 ? '85%' : `${cardHeight}vh`,
          transition: isDragging ? 'none' : 'all 0.3s ease-out'
        }}
      >
        {/* Drag Handle - MOBILE ONLY */}
        {window.innerWidth < 1024 && (
          <div 
            className="absolute top-0 inset-x-0 flex justify-center items-center py-2 z-[200] cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="w-12 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={CloseCard}
          className="flex gap-2 items-center absolute right-5 top-3 
                    bg-red-600 hover:bg-red-800 text-white lg:text-xl text-lg px-1 py-1
                    lg:px-3 lg:py-3 rounded-full shadow-lg z-[300]"
        >
          <AiOutlineClose />
        </button>

        {/* Image - Only show when not minimized on MOBILE, always show on DESKTOP */}
        {(window.innerWidth >= 1024 || cardHeight > MIN_HEIGHT) && (
          <div className="relative w-full h-[40%] flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-t-2xl"
              src={buildingDatas?.img}
              alt={query.building || "Building Image"}
            />
          </div>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Building Info Section - Always show on DESKTOP, conditional on MOBILE */}
          {(window.innerWidth >= 1024 || cardHeight > MIN_HEIGHT) && (
            <div className="p-5 flex flex-col gap-3 text-white">
              <p className="text-2xl lg:text-3xl font-bold uppercase">
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
                  onClick={() => setPath(query.building)}
                >
                  <Signpost /> Get Directions
                </button>
              </div>
            </div>
          )}

          {/* Floor selection - Always show on DESKTOP, conditional on MOBILE */}
          {rooms && (window.innerWidth >= 1024 || cardHeight > 50) && (
            <div className="mt-4 w-full">
              <label className="block px-6 lg:text-sm text-xs mb-2 text-gray-300">
                Select Floor:
              </label>
              <div className="flex flex-wrap items-center">
                {Object.keys(rooms).map((floor) => (
                  <button 
                    key={floor} 
                    onClick={() => setSelectedFloor(floor)} 
                    className={`flex-1 text-xs lg:text-base rounded-t-xl text-white font-bold transition-all w-full duration-200 
                      ${selectedFloor === floor ? 'bg-white/20' : ''}
                      py-2`}
                  >
                    Floor {floor}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Rooms List - Always show on DESKTOP, conditional on MOBILE */}
          {(window.innerWidth >= 1024 || cardHeight > 60) && (
            <div className="pt-10 pb-7 bg-white/20 px-4 space-y-3">
              {rooms && rooms[selectedFloor] ? (
                rooms[selectedFloor].map((room, index) => (
                  <div 
                    onClick={() => {
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
                      setBldClicked(false);
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
          )}

          {/* Minimized State Content - MOBILE ONLY */}
          {window.innerWidth < 1024 && cardHeight <= MIN_HEIGHT && (
            <div className="p-4 text-white">
              <p className="text-lg font-bold uppercase truncate">
                {query.building}
              </p>
              <p className="text-sm text-gray-300 truncate">
                {buildingDatas?.totalFloors ? `${buildingDatas.totalFloors} floors` : 'No data'}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BldOverview;