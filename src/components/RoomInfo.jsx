import { AiOutlineClose } from "react-icons/ai";
import { useQuery } from "../context/QueryContext";
import { CornerUpRight, ScanQrCode, MapPin, Navigation } from "lucide-react";
import { usePath } from "../context/PathContext";
import { useState, useRef, useEffect } from "react";
import { useScene } from "../context/SceneContext";
import GenerateQR from "./GenerateQR";
import PanoramaViewer from '../components/PanoramaViewer';


function RoomInfo({ roomSearched, setRoomSearched, setDisable, setBldClicked }) {
  const { query } = useQuery();
  const { room, floor } = query;
  const { setPath } = usePath();
  const { setCurrentScene } = useScene();
  const [showQRPopup, setShowQRPopup] = useState(false);

  // Drag state
  const [cardHeight, setCardHeight] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);

  // Image loading states
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false);
   const [clicked, setClicked] = useState(false);

  const MIN_HEIGHT = 22;
  const MAX_HEIGHT = 60;
  const SCROLL_DISABLE_THRESHOLD = 50;

  const handleDirections = (roomName) => {
    setPath(roomName);
  };

  const closeBtn = () => {
    setBldClicked(true);
    setRoomSearched(false);
    setPath("");
    setDisable(false);
    setCurrentScene("Main Gate");
    const url = new URL(window.location);
    url.searchParams.delete("name");
    window.history.replaceState({}, "", url);
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
        className={`${roomSearched ? "fixed inset-x-0 bottom-0 m-0 lg:absolute lg:left-8 lg:top-20 z-[50]" : "hidden"}
        w-auto lg:w-[410px] rounded-t-[2.5rem] lg:rounded-[1.5rem] bg-black shadow-2xl overflow-hidden
        transform transition-all duration-300 ease-out flex flex-col`}
        style={{
          height: window.innerWidth >= 1024 ? '85%' : `${cardHeight}vh`,
          transition: isDragging ? 'none' : 'height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* Header/Image Section - HEIGHT INCREASED TO 45% */}
        <div className="relative w-full h-[40%] flex-shrink-0 bg-black/20">
          {/* Drag Handle - Mobile */}
          {window.innerWidth < 1024 && (
            <div 
              className="absolute top-0 inset-x-0 flex justify-center py-3 z-[301] cursor-grab active:cursor-grabbing"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div className="w-10 h-1 bg-white/20 rounded-full"></div>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={closeBtn}
            className="absolute right-4 top-4 z-[301] p-2 bg-black/40 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-all active:scale-90"
          >
            <AiOutlineClose size={18} />
          </button>

          {/* Scrim Overlay */}
          <div  onClick={()=>setShowOverlay(true)} className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-black/10 z-10 cursor-pointer" />

          {/* Text Over Image */}
          <div  className="absolute -bottom-12 left-6 z-20 text-white pr-4">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
              {room?.name}
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-red-900/40 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full border border-red-500/30 uppercase tracking-widest">
                Floor {floor}
              </span>
              <span className="text-white/60 text-xs flex items-center gap-1 font-medium">
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                {room?.code}
              </span>
            </div>
          </div>

          {/* Image Component */}
          <img  
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            src={room?.img} 
            alt={room?.name}
            
            onLoad={() => setImageLoading(false)}
            onError={() => setImageError(true)}
          />

          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1B2533]">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 mt-24 custom-scrollbar">
          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              Description
            </h3>
            <p className="text-gray-300 leading-relaxed 2xl:text-[15px] text-[13px] font-light italic">
              "{room?.description || "No description available for this room."}"
            </p>
          </div>

          {/* Action Buttons - COLORS REVERTED */}
          <div className="flex flex-col gap-3 pt-4 pb-2">
            <button
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-600 text-white font-bold py-3 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-red-500/20"
              onClick={() => handleDirections(room?.name)}
            >
              <CornerUpRight size={20}/> Get Directions
            </button>
            <button
              className="w-full flex items-center justify-center gap-3 bg-white/10 text-white border border-white/10 font-bold py-3 rounded-2xl hover:bg-white/20 transition-all active:scale-[0.98]"
              onClick={() => setShowQRPopup(true)}
            >
              <ScanQrCode size={20} /> Generate QR
            </button>
          </div>
        </div>

        {/* QR Popup Modal */}
        {showQRPopup && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[9999] p-4">
            <div className="bg-[#1B2533] border border-white/10 rounded-[2rem] p-8 text-center text-white shadow-2xl max-w-sm w-full relative">
              <button
                onClick={() => setShowQRPopup(false)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-red-500 rounded-full transition-colors"
              >
                <AiOutlineClose size={18} />
              </button>

              <h2 className="text-xl font-bold mb-2">Location QR</h2>
              <p className="text-gray-400 text-xs mb-6">Scan to share this location</p>
              
              <div className="bg-white p-4 rounded-3xl inline-block shadow-inner">
                <GenerateQR text={`https://nav-u-campus-map-directory.vercel.app/?name=${encodeURIComponent(room?.name)}`} />
              </div>

              <div className="mt-8 text-sm font-semibold text-white/80 bg-white/5 py-3 px-4 rounded-xl border border-white/5">
                {room?.name}
              </div>
            </div>
          </div>
        )}
      </div>

{showOverlay && (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
    {/* 1. Backdrop */}
    <div 
      className="absolute inset-0 bg-black/60 backdrop-blur-xs" 
      onClick={() => setShowOverlay(false)}
    />

    {/* 2. Centered Content Card - Height set to 70% of viewport */}
    <div className="relative bg-[#000000]  w-full max-w-7xl h-[85vh] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden transform transition-all">
      
      {/* Image Section - Now takes up 100% of the card height */}
      <div className="relative w-full h-full bg-black">
        {/* The X Button */}
        <button
          onClick={() => setShowOverlay(false)}
          className="absolute right-6 top-6 z-[301] p-3 bg-black/40 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-all active:scale-90"
        >
          <AiOutlineClose size={22} />
        </button>

        {/* Scrim Overlay - Bottom heavy to protect text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

        {/* Text Over Image */}
        <div className="absolute bottom-10 left-10 z-20 text-white pr-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {room?.name}
          </h2>
           <div className="flex items-center gap-3 mt-2">
              <span className="bg-red-900/40 text-red-400 text-[13px] font-bold px-3 py-1 rounded-full border border-red-500/30 uppercase tracking-widest">
                Floor {floor}
              </span>
              <span className="text-white/60 text-xs flex items-center gap-1 font-medium">
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                {room?.code}
              </span>
            </div>
        </div>

        {/* Image - Set to h-full to fill the 75vh container */}
        <img 
          className="w-full h-full object-cover" 
          src={room?.img} 
          alt={room?.name}
        />
      </div>
            <button
            onClick={() => setClicked(!clicked)} className="absolute bottom-12 right-10 z-10 w-12 h-12 lg:w-14 lg:h-14 
                      bg-red-600 rounded-2xl flex items-center justify-center 
                      border-2 border-red-400/40 shadow-[0_0_20px_#dc2626]
                      hover:bg-red-500 hover:shadow-[0_0_35px_#ef4444] 
                      hover:scale-110 transition-all duration-300 active:scale-95 group"
            title="Street View"
          >
            <Navigation 
              size={28} 
              className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]
                        transition-all duration-700 ease-in-out
                        group-hover:rotate-[360deg] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" 
              strokeWidth={2.5}
            />
          </button>
              
                  <PanoramaViewer clicked={clicked} setClicked={setClicked} />
  </div>
    </div>

  
)}
    </>
  );
}

export default RoomInfo;