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
    <div
      ref={containerRef}
      className={`${clicked ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-black z-[9999]`}
    >
      <Navbar setKeyboardClicked={setKeyboardClicked} keyboardClicked={keyboardClicked} />
      <div onClick={()=>setKeyboardClicked(false)} className="relative w-full h-full">
        {/* Pass clicked as reloadTrigger - it will reload when clicked becomes true */}
        <Panorama
          clicked={clicked}
          scene={currentScene}
          onChangeScene={setCurrentScene}
          reloadTrigger={clicked}  // This will trigger reload when clicked is true
        />

        {/* Exit Fullscreen Button */}
        <button 
          onClick={() => setClicked(false)}
          className="absolute bottom-2 left-2 bg-black/70 text-white text-xs lg:text-sm px-3 py-1 rounded-md shadow hover:bg-black/90 transition-colors pointer-events-auto z-50"
        >
          Exit Street View
        </button>
      </div>
    </div>
  );
}

export default PanoramaViewer;