import React, { useState } from 'react'
import Panorama from './Panorama'

function PanoramaViewer() {


    const [currentScene, setCurrentScene] = useState('main_gate');


  return (
    <>
     <div className={` fixed m-3 left-[81%] bottom-[1%] rounded-lg  px-1 py-1 pt-2   lg:h-[150px] 2xl:h-[60%] w-[310px] md:w-[310px] lg:w-[220px] 2xl:w-[40%] bg-white shadow-2xl  transform transition-transform ease-in-out duration-700 z-[1000] `}>

      <Panorama scene={currentScene} onChangeScene={setCurrentScene} />
    </div>
    </>
  )
}

export default PanoramaViewer