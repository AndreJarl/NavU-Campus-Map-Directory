import React, { useState, useRef } from "react";
import Panorama from "./Panorama";
import { useScene } from "../context/SceneContext";
import Navbar from "./Navbar";

function PanoramaViewer({clicked, setClicked}) {
  const {currentScene, setCurrentScene} = useScene();
  const containerRef = useRef(null);
  const [keyboardClicked, setKeyboardClicked] = useState(false);
  // No reloadKey state needed anymore

 return (
  <>
    {/* 1. The Backdrop Overlay */}
    <div 
      className={`
        ${clicked ? 'fixed' : 'hidden'} 
        inset-0 bg-black/60 backdrop-blur-xs z-[9998] transition-opacity duration-300
      `}
      onClick={() => setClicked(false)} // Close when clicking outside
    />

    {/* 2. Your Centered Viewer */}
    <div
      ref={containerRef}
      className={`
        ${clicked ? 'fixed' : 'hidden'} 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-full max-w-5xl h-[90vh] 
        rounded-[2rem] bg-black z-[9999] overflow-hidden
        shadow-2xl 
      `}
    >
      <Navbar setKeyboardClicked={setKeyboardClicked} keyboardClicked={keyboardClicked} />
      <div onClick={() => setKeyboardClicked(false)} className="relative w-full h-full">
        <Panorama
          clicked={clicked}
          scene={currentScene}
          onChangeScene={setCurrentScene}
          reloadTrigger={clicked}
        />

        <button 
          onClick={() => setClicked(false)}
          className="absolute bottom-6 left-6 flex items-center gap-2 px-5 py-2.5 
                     bg-zinc-900/80 backdrop-blur-lg border border-white/10 
                     text-zinc-100 text-sm font-semibold rounded-xl
                     shadow-[0_8px_30px_rgb(0,0,0,0.5)] 
                     hover:bg-zinc-800 hover:border-white/20 hover:-translate-y-0.5
                     active:scale-95 transition-all duration-300 
                     pointer-events-auto z-50"
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Exit Street View
        </button>
      </div>
    </div>
  </>
);
}

export default PanoramaViewer;