import { AiOutlineClose } from "react-icons/ai";
import { useQuery } from "../context/QueryContext";
import { CornerUpRight, ScanQrCode, ChevronUp, ChevronDown, Minus, Ellipsis } from "lucide-react";
import { usePath } from "../context/PathContext";
import { useState, useRef, useEffect } from "react";
import qr from "../assets/qr.png";
import { useScene } from "../context/SceneContext";

function RoomInfo({ setShowPopup, showPopup, roomSearched, setRoomSearched, setDisable, disable, setBldClicked }) {
  const { query } = useQuery();
  const { room, floor } = query; 
  const { setPath } = usePath();
  const { setCurrentScene } = useScene();
  const [showQRPopup, setShowQRPopup] = useState(false);
  
  // Drag state
  const [cardHeight, setCardHeight] = useState(40); // percentage of screen height
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);

  // Height limits
  const MIN_HEIGHT = 20;
  const MAX_HEIGHT = 70;
  const SCROLL_DISABLE_THRESHOLD = 50; // Disable scroll when card is 50% or more

  const handleDirections = (roomName) => {
    setCardHeight(40); // Reset to default height
    setPath(roomName);
  };

  const closeBtn = () => {
    setBldClicked(true);
    setRoomSearched(false);
    setPath("");
    setDisable(false);
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

  // Disable scroll ONLY when actively dragging AND card height is 50% or more - MOBILE ONLY
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const shouldDisableScroll = isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD;

    if (shouldDisableScroll) {
      // Disable scroll only during active drag above threshold
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.userSelect = 'none';
    } else {
      // Always enable scroll when not dragging or below threshold
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
      document.body.style.userSelect = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
      document.body.style.userSelect = 'unset';
    };
  }, [isDragging, cardHeight]);

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

      <div
        className={`${roomSearched ? "fixed inset-x-0 bottom-0 m-2 lg:h-[85%] lg:m-0 lg:absolute lg:left-8 lg:top-20 z-[50]" : "hidden"}
        w-auto lg:w-[420px] my-4 rounded-3xl backdrop-blur-lg bg-black/70 border border-white/20 shadow-md p-2
        transform transition-all duration-300 ease-out pointer-events-auto flex flex-col
        ${isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD ? 'select-none' : ''}`} // Disable text selection during drag only when above threshold
        style={{
          // On desktop (lg and above), use fixed height, on mobile use dynamic height
          height: window.innerWidth >= 1024 ? '85%' : `${cardHeight}vh`,
          transition: isDragging ? 'none' : 'all 0.3s ease-out'
        }}
      >
        {/* Drag Handle - MOBILE ONLY */}
        {window.innerWidth < 1024 && (
          <div 
            className={`absolute top-0 inset-x-0 flex justify-center items-center py-2 z-[200] cursor-grab active:cursor-grabbing
                      ${isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD ? 'select-none' : ''}`}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="w-12 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        )}

        <div className="p-4 pt-3 top-0 absolute right-0 flex justify-between items-center z-[300]">
          <button
            onClick={closeBtn}
            className="rounded-full bg-red-500 hover:bg-red-700 font-bold lg:text-xl text-lg flex gap-2 items-center text-white lg:px-2 lg:py-2 px-1 py-1"
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Scrollable Content - Only disable interactions during active drag above threshold */}
        <div className={`flex-1 overflow-y-auto p-4 flex flex-col gap-3 px-5 mt-2 text-white ${isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD ? 'pointer-events-none' : ''}`}>
          {/* Room Image - Only show when not minimized on MOBILE, always show on DESKTOP */}
          {(window.innerWidth >= 1024 || cardHeight > MIN_HEIGHT) && (
            <>
              <h2 className="text-xl md:text-lg lg:text-3xl font-semibold drop-shadow-lg">
                {room?.name}
              </h2>
              <h3 className="mb-2 font-medium text-red-400 text-base lg:text-base">
                Floor {floor}
              </h3>
              <img className="lg:w-[100%] w-[100%] md:w-[100%] lg:h-[60%] rounded-lg shadow-md" src={room.img} alt="" />
            </>
          )}

          {/* Room details - Always show on DESKTOP, conditional on MOBILE */}
          {(window.innerWidth >= 1024 || cardHeight > 30) && (
            <>
              <h3 className="font-medium text-gray-200 lg:text-xl">
                {room.code}
              </h3>
              <p className="mb-2 text-gray-300 text-sm lg:text-base">{room.description}</p>
            </>
          )}

          {/* Minimized State Content - MOBILE ONLY */}
          {window.innerWidth < 1024 && cardHeight <= MIN_HEIGHT && (
            <div className="text-white">
              <p className="text-lg font-bold uppercase truncate">
                {room?.name}
              </p>
              <p className="text-sm text-gray-300 truncate">
                Floor {floor} • {room.code}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons - Always show on DESKTOP, conditional on MOBILE - Only disable interactions during active drag above threshold */}
        {(window.innerWidth >= 1024 || cardHeight > 25) && (
          <div className={`border-t flex lg:flex-row text-center pb-4 lg:mb-0 justify-center border-white/20 pt-4 lg:text-base text-xs gap-4 ${isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD ? 'pointer-events-none' : ''}`}>
            <button
              className="lg:py-3 lg:px-5 py-2 px-4 bg-red-500 flex text-[11px] lg:text-base gap-3 items-center text-center text-white rounded-3xl justify-center hover:bg-red-600 transition"
              onClick={() => {
                if (isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD) return; // Prevent click during drag only when above threshold
                handleDirections(room.name);
              }}
            >
              <CornerUpRight size={20}/> Get Directions
            </button>
            <button
              className="lg:py-3 lg:px-5 py-2 px-4 bg-white/20 text-[11px] lg:text-base flex gap-3 text-center items-center text-white rounded-3xl justify-center hover:bg-white/10 transition"
              onClick={() => {
                if (isDragging && cardHeight >= SCROLL_DISABLE_THRESHOLD) return; // Prevent click during drag only when above threshold
                setShowQRPopup(true);
              }}
            >
              <ScanQrCode size={20} /> Generate QR
            </button>
          </div>
        )}

        {showQRPopup && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[9999]">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center text-white shadow-lg w-[90%] max-w-md relative">
              <button
                onClick={() => setShowQRPopup(false)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-700 text-white rounded-full p-2"
              >
                <AiOutlineClose />
              </button>

              <h2 className="lg:text-2xl font-semibold mb-4">Room QR Code</h2>
              <div className="flex justify-center">
                <div className="lg:w-48 lg:h-48 w-32 h-32 bg-white rounded-lg flex items-center justify-center text-black">
                  <img className="lg:w-48 lg:h-48 w-[100%] h-32" src={qr} alt="" />
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-xs lg:text-sm">
                Scan this code to view more info about <b>{room?.name}</b>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default RoomInfo;