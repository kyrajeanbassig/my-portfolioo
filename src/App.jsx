import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Import Public Components
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

// Import Admin Components
import Login from "./components/Admin/Login";
import MasterDashboard from "./components/Admin/MasterDashboard";

// --- 1. Create a child component to handle Logic inside Router ---
function AppContent() {
  const location = useLocation(); // Now we can use this hook!
  const [darkMode, setDarkMode] = useState(false);

  // Check if current URL path starts with "/admin"
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
      
      {/* 2. Only show Header if NOT on Admin Routes */}
      {!isAdminRoute && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}

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
              <Projects /> 
              <Contact />
            </>
          }
        />

        {/* Public Pages */}
        <Route path="/about" element={<Educational />} />
        <Route path="/projects" element={<ProjectLand />} />
        <Route path="/project-land" element={<ProjectLand />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        {/* --- ADMIN ROUTES --- */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<MasterDashboard />} />
      </Routes>

      {/* 3. Only show Footer if NOT on Admin Routes */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

// --- 4. Main App Wrapper ---
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;