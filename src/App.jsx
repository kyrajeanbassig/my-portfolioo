import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Educational from "./components/Educational/Educational";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GiphyAPI from "./components/GiphyAPI/GiphyAPI"; 
// 1. Fixed: Imported ProjectLand only once
import ProjectLand from "./components/ProjectLand/ProjectLand";



// 2. Import Iridescence 
import Iridescence from "./components/Iridescence/Iridescence"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "App dark" : "App"}>
        
        {/* Global Background Wrapper */}
        <div className="global-background">
          <Iridescence 
            color={[0.7, 0.7, 0.9]} 
            mouseReact={true} 
            speed={1.0} 
            amplitude={0.1} 
          />
        </div>

        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          {/* Home Page: Contains the "Preview" sections */}
          <Route
            path="/"
            element={
              <>
                <Profile />
                <GiphyAPI />
                <About />
                <Skills />
                <Projects /> {/* This is the CardSwap animation section */}
                <Contact />
              </>
            }
          />

          {/* Dedicated Pages */}
          <Route path="/about" element={<Educational />} />
          
          {/* Both routes point to the Full Gallery now */}
          <Route path="/projects" element={<ProjectLand />} />
          <Route path="/project-land" element={<ProjectLand />} />
          
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;