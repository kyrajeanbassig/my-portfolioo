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

// 1. Import Iridescence (Adjust the path to where you saved the folder!)
// If it's inside components/Profile/Iridescence, use this:
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
        
        {/* 2. Add the Global Background Wrapper HERE */}
        <div className="global-background">
          <Iridescence 
          /* 
               CHANGE THIS LINE: 
               [0.3, 0.0, 0.5] = Rich Purple
               [0.1, 0.0, 0.2] = Very Dark Void
            */
            color={[0.7, 0.7, 0.9]} 
            mouseReact={true} 
            speed={1.0} 
            amplitude={0.1} 
          />
        </div>

        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile />
                <GiphyAPI />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<Educational />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;