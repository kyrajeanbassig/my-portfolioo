import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <span role="img" aria-label="briefcase" className="logo-icon">💼</span>
          <span className="logo-text">My Portfolio</span>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
