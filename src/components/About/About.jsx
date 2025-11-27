import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./About.css";
// Replace with your actual image path or placeholder
import profileImg from "../../assets/download.jpg"; 

const About = () => {
  const navigate = useNavigate(); 

  const handleViewMore = () => {
    navigate("/about"); 
    window.scrollTo(0, 0);
  };

  return (
    <section className="about-modern-section" id="about">
      <div className="about-modern-container">
        
        {/* LEFT SIDE: Image & Blobs */}
        <div className="about-image-wrapper">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <img 
            src={profileImg} 
            alt="Profile" 
            className="modern-profile-pic" 
          />
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="about-content-wrapper">
          <h4 className="modern-heading">My Biography</h4>
          <h2 className="modern-title">Kyra Jean Bassig</h2>
          
          <p className="modern-description">
            I am a passionate Bachelor of Science in Information Technology student, 
            eager to apply and enhance my skills in programming, networking, and 
            system administration. My goal is to gain real-world experience while 
            contributing positively with adaptability, teamwork, and a strong 
            willingness to learn.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <i className="fas fa-certificate stat-icon"></i>
              <div className="stat-text">
                <h4>Experience</h4>
                <span>Fresh Graduate</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-graduation-cap stat-icon"></i>
              <div className="stat-text">
                <h4>Education</h4>
                <span>BSIT Student</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-trophy stat-icon"></i>
              <div className="stat-text">
                <h4>Achievements</h4>
                <span>Dean's Lister</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-code stat-icon"></i>
              <div className="stat-text">
                <h4>Skills</h4>
                <span>Web Development</span>
              </div>
            </div>
          </div>

          {/* ACTION AREA: Buttons Only */}
          <div className="about-footer">
            
            {/* 1. Contact Me Button */}
            <a href="/contact" className="modern-btn btn-pink">
              Contact Me
            </a>

            {/* 2. View More Button */}
            <button onClick={handleViewMore} className="modern-btn btn-gold-outline">
              View More <i className="fas fa-arrow-right" style={{marginLeft: '8px'}}></i>
            </button>

            {/* SOCIAL ICONS REMOVED */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;