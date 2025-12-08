import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";


import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Educational from "./components/Educational/Educational";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GiphyAPI from "./components/GiphyAPI/GiphyAPI"; 
import ProjectLand from "./components/ProjectLand/ProjectLand";

import Login from "./components/Admin/Login";
import MasterDashboard from "./components/Admin/MasterDashboard";


function AppContent() {
  const location = useLocation(); 
  const [darkMode, setDarkMode] = useState(false);


  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      

      {!isAdminRoute && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}

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
        <Route path="/projects" element={<ProjectLand />} />
        <Route path="/project-land" element={<ProjectLand />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

     
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<MasterDashboard />} />
      </Routes>

 
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;