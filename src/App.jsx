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
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";

import InteriorVinylWrapping from "./pages/InteriorVinylWrapping"
import HeadlightTaillightTinting from "./pages/HeadlightTaillightTinting"
import SunVisors from "./pages/SunVisors"
import CarVinylWrapping from "./pages/CarVinylWrapping"
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
        <Route path="/interiorVinylWrapping" element={<InteriorVinylWrapping />} />
        <Route path="/headlightTaillightTinting" element={<HeadlightTaillightTinting />} />
        <Route path="/sunVisors" element={<SunVisors />} />
        <Route path="/CarVinylWrapping" element={<CarVinylWrapping />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
