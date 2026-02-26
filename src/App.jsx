import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Page Imports
import Home from "./pages/Home";
import Dashcams from "./pages/Dashcams";
import Commercialwindow from "./pages/CommercialWindow";
import ParkingSensors from "./pages/ParkingSensors";
import ResidentialTinting from "./pages/ResidentialTinting";
import ReverseCamera from "./pages/ReverseCamera";
import StereoFitting from "./pages/StereoFitting";
import WindowTinting from "./pages/WindowTinting";
import InteriorVinylWrapping from "./pages/InteriorVinylWrapping";
import HeadlightTaillightTinting from "./pages/HeadlightTaillightTinting";
import SunVisors from "./pages/SunVisors";
import CarVinylWrapping from "./pages/CarVinylWrapping";

// Component Imports
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import FloatingCallButton from "./components/FloatingCallButton";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Services - Kebab Case URLs */}
        <Route path="/window-tinting" element={<WindowTinting />} />
        <Route path="/stereo-fitting" element={<StereoFitting />} />
        <Route path="/reverse-camera" element={<ReverseCamera />} />
        <Route path="/parking-sensors" element={<ParkingSensors />} />
        <Route path="/dashcams" element={<Dashcams />} />
        <Route path="/commercial-window" element={<Commercialwindow />} />
        <Route path="/residential-tinting" element={<ResidentialTinting />} />
        <Route path="/interior-vinyl-wrapping" element={<InteriorVinylWrapping />} />
        <Route path="/headlight-taillight-tinting" element={<HeadlightTaillightTinting />} />
        <Route path="/sun-visors" element={<SunVisors />} />
        <Route path="/car-vinyl-wrapping" element={<CarVinylWrapping />} />
        
        {/* Legal & Static */}
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
      <FloatingCallButton />
    </Router>
  );
}

export default App;