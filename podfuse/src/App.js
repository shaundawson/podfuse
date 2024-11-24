import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Personas from "./pages/Personas";
import Scenario1 from "./pages/Scenario1";
import Scenario2 from "./pages/Scenario2";
import Storyboard from "./pages/Storyboard";
import Moodboard from "./pages/Moodboard";
import Flowchart from "./pages/Flowchart";
import Wireframes from "./pages/Wireframes";
import Prototype from "./pages/Prototype";
import References from "./pages/References";
import Research from "./pages/Research";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personas" element={<Personas />} />
        <Route path="/scenario1" element={<Scenario1 />} />
        <Route path="/scenario2" element={<Scenario2 />} />
        <Route path="/storyboard" element={<Storyboard />} />
        <Route path="/moodboard" element={<Moodboard />} />
        <Route path="/flowchart" element={<Flowchart />} />
        <Route path="/wireframes" element={<Wireframes />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/references" element={<References />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
