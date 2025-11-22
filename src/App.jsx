import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashcams from "./pages/Dashcams";
import Commercialwindow from "./pages/Commercialwindow";
import ParkingSensors from "./pages/ParkingSensors";
import ResidentialTinting from "./pages/ResidentialTinting";
import ReverseCamera from "./pages/ReverseCamera";
import StereoFitting from "./pages/StereoFitting";
import WindowTinting from "./pages/WindowTinting";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/windowtinting" element={<WindowTinting />} />
        <Route path="/stereofitting" element={<StereoFitting />} />
        <Route path="/reversecamera" element={<ReverseCamera />} />
        <Route path="/parkingsensors" element={<ParkingSensors />} />
        <Route path="/dashcams" element={<Dashcams />} />
        <Route path="/commercialwindow" element={<Commercialwindow />} />
        <Route path="/residentialtinting" element={<ResidentialTinting />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
