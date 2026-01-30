import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CornerUpRight, ScanQrCode, Navigation } from "lucide-react";
import { useQuery } from "../context/QueryContext";
import { usePath } from "../context/PathContext";
import { useScene } from "../context/SceneContext";
import GenerateQR from "./GenerateQR";
import PanoramaViewer from '../components/PanoramaViewer';

function RoomInfo({ roomSearched, setRoomSearched, setDisable, setBldClicked }) {
  const { query } = useQuery();
  const { room, floor } = query;
  const { setPath } = usePath();
  const { setCurrentScene } = useScene();

  // Component States
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Dragging Logic
  const MIN_HEIGHT = 22;
  const MAX_HEIGHT = 70;
  const [cardHeight, setCardHeight] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const [dragState, setDragState] = useState({ startY: 0, startHeight: 0 });

  // 1. SCROLL LOCK: Prevents background map/body from scrolling when card is active or being dragged
  useEffect(() => {
    if (isDragging || showOverlay || clicked) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Critical for mobile
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isDragging, showOverlay, clicked]);

  const handleDirections = (roomName) => setPath(roomName);

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

  // Drag Handlers
  const onDragStart = (e) => {
    if (window.innerWidth >= 1024) return;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    setIsDragging(true);
    setDragState({ startY: clientY, startHeight: cardHeight });
  };

  const onDragMove = useCallback((e) => {
    if (!isDragging) return;
    
    // Prevent browser default (like pull-to-refresh)
    if (e.cancelable) e.preventDefault();

    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const deltaY = dragState.startY - clientY;
    const deltaHeight = (deltaY / window.innerHeight) * 100;
    const newHeight = Math.min(Math.max(dragState.startHeight + deltaHeight, MIN_HEIGHT), MAX_HEIGHT);
    
    setCardHeight(newHeight);
  }, [isDragging, dragState]);

  const onDragEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onDragMove, { passive: false });
      window.addEventListener('mouseup', onDragEnd);
      window.addEventListener('touchmove', onDragMove, { passive: false });
      window.addEventListener('touchend', onDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onDragMove);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchmove', onDragMove);
      window.removeEventListener('touchend', onDragEnd);
    };
  }, [isDragging, onDragMove]);

  return (
    <>
      {/* MAIN INFO CARD */}
      <div
        className={`${roomSearched ? "fixed inset-x-0 bottom-0 lg:absolute lg:left-8 lg:top-20 z-[50]" : "hidden"}
        w-auto lg:w-[410px] rounded-t-[2.5rem] lg:rounded-[1.5rem] bg-black shadow-2xl overflow-hidden
        transform transition-all duration-300 ease-out flex flex-col`}
        style={{
          height: window.innerWidth >= 1024 ? '85%' : `${cardHeight}vh`,
          transition: isDragging ? 'none' : 'height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* Header Section */}
        <div className="relative w-full h-[40%] flex-shrink-0 bg-zinc-900">
          {/* MOBILE DRAG HANDLE - touch-none prevents map drag */}
          <div 
            className="absolute top-0 inset-x-0 flex justify-center py-4 z-[301] cursor-grab active:cursor-grabbing touch-none"
            onMouseDown={onDragStart}
            onTouchStart={onDragStart}
          >
            <div className="w-12 h-1.5 bg-white/20 rounded-full" />
          </div>

          <button onClick={closeBtn} className="absolute right-4 top-4 z-[301] p-2 bg-black/40 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-all">
            <AiOutlineClose size={18} />
          </button>

          <div onClick={() => setShowOverlay(true)} className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10 z-10 cursor-pointer" />

          <div className="absolute -bottom-10 left-6 z-20 text-white pr-4">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">{room?.name}</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-red-900/40 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full border border-red-500/30 uppercase">Floor {floor}</span>
              <span className="text-white/60 text-xs">{room?.code}</span>
            </div>
          </div>

          <img 
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            src={room?.img} 
            alt={room?.name}
            onLoad={() => setImageLoading(false)}
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 mt-20 custom-scrollbar pb-6">
          <div className="mb-6">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Description</h3>
            <p className="text-gray-300 leading-relaxed text-sm font-light italic">"{room?.description || "No description available."}"</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-3 bg-red-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-red-500/20 active:scale-95 transition-transform" onClick={() => handleDirections(room?.name)}>
              <CornerUpRight size={20}/> Get Directions
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white/10 text-white border border-white/10 font-bold py-3.5 rounded-2xl active:scale-95 transition-transform" onClick={() => setShowQRPopup(true)}>
              <ScanQrCode size={20} /> Generate QR
            </button>
          </div>
        </div>
      </div>

      {/* FULL SCREEN OVERLAY (PANORAMA TRIGGER) */}
      {showOverlay && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowOverlay(false)} />
          
          <div className="relative bg-black w-full max-w-7xl h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden">
            <button onClick={() => setShowOverlay(false)} className="absolute right-6 top-6 z-[301] p-3 bg-black/40 text-white rounded-full backdrop-blur-md">
              <AiOutlineClose size={22} />
            </button>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

            <div className="absolute bottom-10 left-10 z-20 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">{room?.name}</h2>
              <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-bold uppercase">Floor {floor}</span>
            </div>

            <img className="w-full h-full object-cover" src={room?.img} alt="" />

            <button
              onClick={() => setClicked(!clicked)}
              className="absolute lg:bottom-10 bottom-32 right-10 z-[60] w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center border-2 border-red-400/40 shadow-xl active:scale-90 transition-all group"
            >
              <Navigation size={28} className="text-white group-hover:rotate-[360deg] transition-transform duration-700" />
            </button>
            
            <PanoramaViewer clicked={clicked} setClicked={setClicked} />
          </div>
        </div>
      )}

      {/* QR MODAL */}
      {showQRPopup && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-[10000] p-4" onClick={() => setShowQRPopup(false)}>
          <div className="bg-[#1B2533] border border-white/10 rounded-[2rem] p-8 text-center text-white max-w-sm w-full relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowQRPopup(false)} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full"><AiOutlineClose size={18} /></button>
            <h2 className="text-xl font-bold mb-6">Location QR</h2>
            <div className="bg-white p-4 rounded-3xl inline-block mb-6"><GenerateQR text={window.location.href} /></div>
            <div className="text-sm font-semibold bg-white/5 py-3 rounded-xl border border-white/5">{room?.name}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default RoomInfo;