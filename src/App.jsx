import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basic from "./pages/basic";
import Dashcams from "./pages/Dashcams";
import Commercialwindow from "./pages/Commercialwindow";
import ParkingSensors from "./pages/ParkingSensors";
import ResidentialTinting from "./pages/ResidentialTinting";
import ReverseCamera from "./pages/ReverseCamera";
import StereoFitting from "./pages/StereoFitting";
import WindowTinting from "./pages/WindowTinting";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/dashcams" element={<Dashcams />} />
        <Route path="/commercialwindow" element={<Commercialwindow />} />
        <Route path="/parkingsensors" element={<ParkingSensors />} />
        <Route path="/residentialtinting" element={<ResidentialTinting />} />
        <Route path="/reversecamera" element={<ReverseCamera />} />
        <Route path="/stereofitting" element={<StereoFitting />} />
        <Route path="/windowtinting" element={<WindowTinting />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
