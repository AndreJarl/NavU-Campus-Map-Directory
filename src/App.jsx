import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Map from "./routes/Map"
import VirtualTour from "./components/Panorama"



function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/map" element={<Map />} />
    <Route path="/virtual-tour" element={<VirtualTour />} />
    </Routes>
    </>
  )
}

export default App
