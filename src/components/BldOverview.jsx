import { useState, useRef, useEffect, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import cardData from "../data/CardData";
import { Building2, ChevronUp, Search, X } from "lucide-react";
import buildingData from "../data/buildingData";
import { usePath } from "../context/PathContext";
import { useScene } from "../context/SceneContext";

function BldOverview({ query, setQuery, setBldClicked, handleOpenPopup, setRoomSearched }) {
  const buildingDatas = cardData[query.building];
  const rooms = buildingData?.[query.building]?.rooms;
  const { setPath } = usePath();
  const { setCurrentScene } = useScene();
  
  const [cardHeight, setCardHeight] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cardRef = useRef(null);

  const [selectedFloor, setSelectedFloor] = useState(
    rooms ? Object.keys(rooms)[0] : null
  );

  const MIN_HEIGHT = 20;
  const MAX_HEIGHT = 85;
  const SCROLL_DISABLE_THRESHOLD = 50;

  const filteredRooms = useMemo(() => {
    if (!rooms || !rooms[selectedFloor]) return [];
    if (!searchQuery.trim()) return rooms[selectedFloor];
    return rooms[selectedFloor].filter(room => 
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [rooms, selectedFloor, searchQuery]);

  const CloseCard = () => {
    setBldClicked(false);
    setPath("");
    setCurrentScene("Main Gate");
  };

  const handleDragStart = (e) => {
    if (window.innerWidth >= 1024) return;
    setIsDragging(true);
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
    setStartHeight(cardHeight);
  };

  const handleDragMove = (e) => {
    if (window.innerWidth >= 1024 || !isDragging) return;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const deltaY = startY - clientY;
    const newHeight = Math.min(Math.max(startHeight + (deltaY / window.innerHeight) * 100, MIN_HEIGHT), MAX_HEIGHT);
    setCardHeight(newHeight);
  };

  useEffect(() => {
    const handleDragEnd = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  return (
    <>
      <div 
        ref={cardRef}
        className={`${buildingDatas ? "fixed inset-x-0 bottom-0 m-0 lg:absolute lg:left-8 lg:top-20" : "hidden"} 
        z-[50] flex flex-col rounded-t-[2.5rem] lg:rounded-[1.5rem]   
        lg:w-[410px] 2xl:w-[450px] w-auto bg-[#0f0f10] shadow-2xl overflow-hidden
         pointer-events-auto`}
        style={{
          height: window.innerWidth >= 1024 ? '86%' : `${cardHeight}vh`,
          transition: isDragging ? 'none' : 'height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* Header/Image Section */}
        <div className="relative w-full h-[52%] flex-shrink-0 bg-black">
          {window.innerWidth < 1024 && (
            <div 
              className="absolute top-0 inset-x-0 flex justify-center py-3 z-[301] cursor-grab active:cursor-grabbing"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div className="w-10 h-1 bg-white/10 backdrop-blur-md rounded-full"></div>
            </div>
          )}

          <button
            onClick={CloseCard}
            className="absolute right-4 top-4 z-[301] p-2 bg-white/5 hover:bg-red-500 text-white rounded-full backdrop-blur-xl border border-white/10 transition-all"
          >
            <AiOutlineClose size={18} />
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-transparent to-black/30 z-10" />

          <div className="absolute bottom-6 left-6 z-20 text-white pr-4">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight drop-shadow-md">
              {query.building}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full border border-red-500/30 uppercase tracking-widest backdrop-blur-md">
                {buildingDatas?.totalFloors || "0"} Floors
              </span>
            </div>
          </div>

          <img
            className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            src={buildingDatas?.img}
            alt={query.building}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageError(true)}
          />
        </div>

        {/* Scrollable Content */}
        <div className={`flex-1 overflow-y-auto ${isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD ? 'pointer-events-none' : ''} custom-scrollbar flex flex-col`}>
          
          {/* Floor Selection - Color Matched Tabs */}
          {rooms && (window.innerWidth >= 1024 || cardHeight > 50) && (
            <div className="mt-4 w-full">
              <label className="block px-6 lg:text-sm text-xs mb-2 text-white/30 uppercase tracking-widest font-bold">
                Select Floor:
              </label>
              <div className="flex flex-wrap items-center">
                {Object.keys(rooms).map((floor) => (
                  <button 
                    key={floor} 
                    onClick={() => {
                        setSelectedFloor(floor);
                        setSearchQuery("");
                    }} 
                    // Matches the room list bg (bg-white/[0.04]) when selected
                    className={`flex-1 text-xs lg:text-base rounded-t-xl text-white font-bold transition-all w-full duration-200 
                      ${selectedFloor === floor ? 'bg-white/15 ' : 'text-white/40 hover:text-white hover:bg-white/[0.02]'}
                      py-3`}
                  >
                    Floor {floor}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Wrapper for List & Search with matching background */}
          <div className="flex-1 bg-white/15 flex flex-col border-t border-white/[0.05]">
            {/* Search Bar */}

            {/* Rooms List */}
            {(window.innerWidth >= 1024 || cardHeight > 60) && (
                <div className="px-6 py-6 space-y-3">
                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em] mb-4">
                    Rooms & Units
                </h3>
                {filteredRooms.length > 0 ? (
                    filteredRooms.map((room, index) => (
                    <div 
                        key={index}
                        onClick={() => {
                        if (isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD) return;
                        setQuery((prev) => ({
                            ...prev,
                            floor: selectedFloor,
                            room: { ...room, floor: selectedFloor },
                        }));
                        setRoomSearched(true);
                        setBldClicked(false);
                        }}
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.10] hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer active:scale-[0.98]"
                    >
                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                        <Building2 size={18} />
                        </div>
                        <div className="flex-1">
                        <p className="font-semibold text-white text-sm tracking-wide">{room.name}</p>
                        <p className="text-[11px] text-white/70 line-clamp-1 font-light italic">"{room.description}"</p>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className="text-center py-10">
                        <p className="text-white/20 italic text-sm">No rooms found matching "{searchQuery}"</p>
                    </div>
                )}
                </div>
            )}
          </div>

          {/* Minimized State */}
          {window.innerWidth < 1024 && cardHeight <= MIN_HEIGHT && (
            <div className="px-6 py-5 flex justify-between items-center text-white bg-[#0f0f10]">
              <div>
                <p className="text-lg font-bold tracking-tight uppercase">
                  {query.building}
                </p>
                <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">
                  {buildingDatas?.totalFloors || "0"} FLOORS • INFO
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <ChevronUp size={20} className="text-white/40" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BldOverview;