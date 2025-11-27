import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-header-container">
      <div className="glass-navbar">
        
        {/* 1. Logo Section */}
        <Link to="/" className="logo-container" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-icon">💼</span>
          <span className="logo-text">My Portfolio</span>
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* 3. Mobile Hamburger Button */}
        <div 
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

      </div>
    </header>
  );
}

export default Header;