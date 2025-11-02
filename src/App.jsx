import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basic from "./pages/basic";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />

      
        <Route path="/basic" element={<Basic />} />
      </Routes>
    </Router>
  );
}

export default App;
