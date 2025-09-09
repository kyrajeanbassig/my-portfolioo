import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <span role="img" aria-label="briefcase" className="logo-icon">💼</span>
          <span className="logo-text">My Portfolio</span>
        </div>

        <nav className="navbar">
          <ul>
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
