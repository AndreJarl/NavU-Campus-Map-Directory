import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Map from "./routes/Map"
import VirtualTour from "./components/Panorama"
import COE1stF from  "./components/DraggableZoomableSVG"
import Analytics from "./routes/Analytics"
import Map3d from "./routes/Map3d"
import PanoramaViewer from "./components/PanoramaViewer"



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/virtual-tour" element={<VirtualTour />} />
      <Route path="/coe1stf" element={<COE1stF />} />
      <Route path="/analytics" element={<Analytics />} />
       <Route path="/map3d" element={<Map3d />} />
       <Route path="/panorama" element={<PanoramaViewer />} />
    </Routes>
    </>
  )
}

export default App
