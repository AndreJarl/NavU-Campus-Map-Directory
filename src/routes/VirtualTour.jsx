import { useState } from "react";


function VirtualTour() {

    const [currentScene, setCurrentScene]= useState("main_gate");

  return (
     <div className="relative w-full h-screen z-50">
      <Panorama scene={currentScene} onChangeScene={setCurrentScene} />
    </div>
  );
}

export default VirtualTour