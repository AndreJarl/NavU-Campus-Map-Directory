import React, { useState, useRef, useEffect } from "react";
import Panorama from "./Panorama";

function PanoramaViewer() {
  const [currentScene, setCurrentScene] = useState("main_gate");
  const [clicked, setClicked] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // ref for the container you want fullscreen
  const containerRef = useRef(null);

   const handleReload = () => {
    if (!clicked) {
      // Enter fullscreen
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  // 🔑 Reload component whenever fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setClicked(!!document.fullscreenElement);
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
  }, []);


  return (
    <div
      ref={containerRef}
      className={`fixed m-3  ${clicked ? "px-0 py-0 pt-0" : "px-1 py-1 pt-2"} bg-white shadow-2xl transform transition-transform ease-in-out duration-700 z-[1000] ${
        clicked
          ? "h-[100vh] w-[100vw] top-0 left-0 m-0"
          : "left-[81%] bottom-[1%] lg:h-[150px] w-[310px] md:w-[310px] lg:w-[220px]"
      }`}
    >
      <div className="relative w-full h-full">
        {/* Panorama */}
        <Panorama
          key={reloadKey}
          clicked={clicked}
          scene={currentScene}
          onChangeScene={setCurrentScene}
        />

        {/* Fullscreen Button */}
        <button
          className="absolute bottom-2 left-2 bg-black/70 text-white text-xs lg:text-sm px-3 py-1 rounded-md shadow hover:bg-black/90 transition-colors"
          onClick={handleReload}
        >
          {!clicked ? "Street View" : "Exit Street View"}
        </button>
      </div>
    </div>
  );
}

export default PanoramaViewer;
