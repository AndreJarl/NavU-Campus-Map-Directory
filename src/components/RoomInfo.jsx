import React, { useState, useEffect, useCallback, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import button360 from "../assets/Logo/360.png";
import { CornerUpRight, ScanQrCode, ImageOff } from "lucide-react";
import { useQuery } from "../context/QueryContext";
import { usePath } from "../context/PathContext";
import { useScene } from "../context/SceneContext";
import GenerateQR from "./GenerateQR";
import PanoramaViewer from "../components/PanoramaViewer";
import { useZoomContext } from "../context/ZoomContext";
import { useFloorQuery } from "../context/FloorContext";
import { useFloorTransition } from "../context/TransitionContext";

function RoomInfo({ roomSearched, setRoomSearched, setDisable, setBldClicked }) {
  const { query } = useQuery();
  const { room, floor, building } = query;
  const { path, setPath } = usePath();
  const { setCurrentScene } = useScene();
  const { zoomToBuilding } = useZoomContext();
  const { setCurrentFloor } = useFloorQuery();
  const { trigger } = useFloorTransition();

  const [showQRPopup, setShowQRPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const MIN_HEIGHT = 22;
  const MAX_HEIGHT = 70;
  const [cardHeight, setCardHeight] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const [dragState, setDragState] = useState({ startY: 0, startHeight: 0 });

  const qrValue = useMemo(() => {
    const url = new URL(window.location.origin + window.location.pathname);

    if (building) url.searchParams.set("building", building);
    if (floor) url.searchParams.set("floor", floor);
    if (room?.name) url.searchParams.set("name", room.name);
    if (room?.code) url.searchParams.set("code", room.code);
    if (path) url.searchParams.set("path", path);

    return url.toString();
  }, [building, floor, room?.name, room?.code, path]);

  useEffect(() => {
    setImageError(false);
    setImageLoading(true);
  }, [room?.name]);

  useEffect(() => {
    if (!room?.name) return;

    const url = new URL(window.location.href);

    if (building) url.searchParams.set("building", building);
    else url.searchParams.delete("building");

    if (floor) url.searchParams.set("floor", floor);
    else url.searchParams.delete("floor");

    if (room?.name) url.searchParams.set("name", room.name);
    else url.searchParams.delete("name");

    if (room?.code) url.searchParams.set("code", room.code);
    else url.searchParams.delete("code");

    if (path) url.searchParams.set("path", path);
    else url.searchParams.delete("path");

    window.history.replaceState({}, "", url);
  }, [building, floor, room?.name, room?.code, path]);

  useEffect(() => {
    if (isDragging || showOverlay || clicked) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isDragging, showOverlay, clicked]);

  const handleDirections = (roomName) => {
    setPath(roomName);
    setCurrentFloor(1);
    trigger();

    setTimeout(() => {
      zoomToBuilding("KIOSK");
    }, 200);
  };

  const closeBtn = () => {
    setRoomSearched(false);
    setPath("");
    setDisable(false);
    setCurrentScene("Main Gate");

    const url = new URL(window.location.href);
    url.searchParams.delete("building");
    url.searchParams.delete("floor");
    url.searchParams.delete("name");
    url.searchParams.delete("code");
    url.searchParams.delete("path");
    window.history.replaceState({}, "", url);
  };

  const onDragStart = (e) => {
    if (window.innerWidth >= 1024) return;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
    setIsDragging(true);
    setDragState({ startY: clientY, startHeight: cardHeight });
  };

  const onDragMove = useCallback(
    (e) => {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault();

      const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
      const deltaY = dragState.startY - clientY;
      const deltaHeight = (deltaY / window.innerHeight) * 100;
      const newHeight = Math.min(
        Math.max(dragState.startHeight + deltaHeight, MIN_HEIGHT),
        MAX_HEIGHT
      );

      setCardHeight(newHeight);
    },
    [isDragging, dragState]
  );

  const onDragEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onDragMove, { passive: false });
      window.addEventListener("mouseup", onDragEnd);
      window.addEventListener("touchmove", onDragMove, { passive: false });
      window.addEventListener("touchend", onDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", onDragMove);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("touchmove", onDragMove);
      window.removeEventListener("touchend", onDragEnd);
    };
  }, [isDragging, onDragMove]);

  return (
    <>
      <div
        className={`${
          roomSearched ? "fixed inset-x-0 bottom-0 lg:absolute lg:left-8 lg:top-20 z-[50]" : "hidden"
        }
        w-auto lg:w-[410px] rounded-t-[2.5rem] lg:rounded-[1.5rem] bg-black shadow-2xl overflow-hidden
        transform transition-all duration-300 ease-out flex flex-col`}
        style={{
          height: window.innerWidth >= 1024 ? "85%" : `${cardHeight}vh`,
          transition: isDragging ? "none" : "height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <div className="relative w-full h-[40%] flex-shrink-0 bg-zinc-900">
          <div
            className="absolute top-0 inset-x-0 flex justify-center py-4 z-[301] cursor-grab active:cursor-grabbing touch-none"
            onMouseDown={onDragStart}
            onTouchStart={onDragStart}
          >
            <div className="w-12 h-1.5 bg-white/20 rounded-full" />
          </div>

          <button
            onClick={closeBtn}
            className="absolute right-4 top-4 z-[301] p-2 bg-black/40 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-all"
          >
            <AiOutlineClose size={18} />
          </button>

          <div
            onClick={() => setShowOverlay(true)}
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10 z-10 cursor-pointer flex items-end justify-center pb-4"
          >
            <span className="text-white/40 text-[12px] font-medium tracking-widest uppercase">
              Click to zoom image
            </span>
          </div>

          <div className="absolute -bottom-24 left-6 z-20 text-white pr-4">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">{room?.name}</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-red-900/40 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full border border-red-500/30 uppercase">
                Floor {floor}
              </span>
              <span className="text-white/60 text-xs">{room?.code}</span>
            </div>
          </div>

          {imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-800 text-zinc-500 gap-2">
              <ImageOff size={40} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                No Image Available
              </span>
            </div>
          ) : (
            <img
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              src={room?.img}
              alt={room?.name}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageError(true)}
            />
          )}

          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-6 mt-24 custom-scrollbar pb-6">
          <div className="mb-6 mt-3">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Description
            </h3>
            <p className="text-gray-300 leading-relaxed text-[11px] font-light">
              {room?.description || "No description available."}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              className="w-full flex items-center justify-center gap-3 bg-red-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-red-500/20 active:scale-95 transition-transform"
              onClick={() => handleDirections(room?.name)}
            >
              <CornerUpRight size={20} /> Get Directions
            </button>

            <button
              className="w-full flex items-center justify-center gap-3 bg-white/10 text-white border border-white/10 font-bold py-3.5 rounded-2xl active:scale-95 transition-transform"
              onClick={() => setShowQRPopup(true)}
            >
              <ScanQrCode size={20} /> Generate QR
            </button>
          </div>
        </div>
      </div>

 {showOverlay && (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4">
    <div
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      onClick={() => setShowOverlay(false)}
    />

    <div
      className="relative bg-black w-full max-w-5xl
                 h-[70vh] lg:h-[85vh]
                 rounded-[1.5rem] lg:rounded-[2.5rem]
                 shadow-2xl overflow-hidden border border-white/5"
    >
      <button
        onClick={() => setShowOverlay(false)}
        className="absolute right-3 top-3 lg:right-6 lg:top-6 z-[301]
                   p-2.5 lg:p-3 bg-black/40 text-white rounded-full backdrop-blur-md"
      >
        <AiOutlineClose size={20} className="lg:w-[22px] lg:h-[22px]" />
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

      <div className="absolute bottom-6 left-4 right-4 lg:bottom-10 lg:left-10 lg:right-auto z-20 text-white">
        <h2 className="text-xl sm:text-2xl md:text-5xl font-bold mb-2 leading-tight pr-12 lg:pr-0">
          {room?.name}
        </h2>

        <div className="flex flex-wrap items-center gap-2 lg:gap-4">
          <span className="bg-red-600 px-3 py-1 lg:px-4 rounded-full text-xs lg:text-sm font-bold uppercase">
            Floor {floor}
          </span>
          <span className="bg-gray-600 px-3 py-1 lg:px-4 rounded-full text-xs lg:text-sm font-bold uppercase">
            {room?.code || ""}
          </span>
        </div>
      </div>

      {imageError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-700 px-6 text-center">
          <ImageOff size={56} strokeWidth={1} className="lg:w-[80px] lg:h-[80px]" />
          <span className="mt-4 text-xs lg:text-sm font-medium uppercase tracking-[0.2em] lg:tracking-[0.3em]">
            Room Preview Unavailable
          </span>
        </div>
      ) : (
        <img
          className="w-full h-full object-cover"
          src={room?.img}
          alt={room?.name}
          onError={() => setImageError(true)}
        />
      )}

      <button
        onClick={() => setClicked(!clicked)}
        className="absolute bottom-24 right-4 lg:bottom-10 lg:right-10 z-[60]
                   w-12 h-12 lg:w-14 lg:h-14
                   bg-red-600 rounded-full flex items-center justify-center border-2
                   border-red-400/40 shadow-xl hover:bg-red-500 hover:shadow-[0_0_35px_#ef4444]
                   hover:scale-110 duration-300 active:scale-95 group transition-all"
      >
        <img width={32} className="lg:w-10" src={button360} alt="" />
      </button>

      <PanoramaViewer clicked={clicked} setClicked={setClicked} />
    </div>
  </div>
)}

      {showQRPopup && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-[10000] p-4"
          onClick={() => setShowQRPopup(false)}
        >
          <div
            className="bg-[#1B2533] border border-white/10 rounded-[2rem] p-8 text-center text-white max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQRPopup(false)}
              className="absolute top-4 right-4 p-2 bg-white/5 rounded-full"
            >
              <AiOutlineClose size={18} />
            </button>

            <h2 className="text-xl font-bold mb-6">
              Scan QR to continue navigation on smartphone
            </h2>

            <div className="bg-white p-4 rounded-3xl inline-block mb-6">
              <GenerateQR text={qrValue} />
            </div>

            <div className="text-sm font-semibold bg-white/5 py-3 rounded-xl border border-white/5">
              {room?.name}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RoomInfo;