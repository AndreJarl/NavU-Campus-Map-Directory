import React, { useState, useRef, useEffect } from "react";
import Panorama from "./Panorama";
import { useScene } from "../context/SceneContext";
import Navbar from "./Navbar";

function PanoramaViewer({clicked, setClicked}) {

  const {currentScene, setCurrentScene} = useScene();
  const [reloadKey, setReloadKey] = useState(0);

  // ref for the container you want fullscreen
  const containerRef = useRef(null);

  // Handle fullscreen when clicked state changes
  useEffect(() => {
    if (clicked && containerRef.current) {
      // Enter fullscreen
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(err => {
          console.log("Error entering fullscreen:", err);
        });
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    } else if (!clicked) {
      // Exit fullscreen if we're in fullscreen mode
      if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  }, [clicked]);

  // Handle fullscreen change events (e.g., user presses ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
      
      // If user exits fullscreen via browser controls, update clicked state
      if (!isFullscreen && clicked) {
        setClicked(false);
      }
      
      setReloadKey(prev => prev + 1); // re-mount Panorama
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange); // Safari
    document.addEventListener("msfullscreenchange", handleFullscreenChange); // IE/Edge

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, [clicked, setClicked]);


  // Don't render anything if not clicked
  if (!clicked) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
    >
      <Navbar/>
      <div className="relative w-full h-full">
        <Panorama
          key={reloadKey}
          clicked={clicked}
          scene={currentScene}
          onChangeScene={setCurrentScene}
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
