import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Map from "./routes/Map"
import VirtualTour from "./components/Panorama"
import COE1stF from "./buildings/coe/COE1stF"
import COE2ndF from "./buildings/coe/COE2ndF"
import COE3rdF from "./buildings/coe/COE3rdF"
import NewAD1stf from "./buildings/new-admin/NewAD1stf"
import Analytics from "./routes/Analytics"



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/virtual-tour" element={<VirtualTour />} />
      <Route path="/coe1stf" element={<COE1stF />} />
      <Route path="/coe2ndf" element={<COE2ndF />} />
      <Route path="/coe3rdf" element={<COE3rdF />} />
      <Route path="/new-admin1stf" element={<NewAD1stf />} />
     <Route path="/analytics" element={<Analytics />} />

    </Routes>
    </>
  )
}

export default App
