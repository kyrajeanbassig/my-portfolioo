import React from "react";
import "./About2.css";
// Make sure to adjust the path to your image if needed
import aboutImage from "../../assets/download.jpg"; 

function About2() {
  return (
    <div className="about2-page">
      {/* Optional: Page Title if needed */}
      {/* <h1 className="page-title">About Me</h1> */}

      <section id="about2" className="about2-section">
        <div className="about2-container">
          
          {/* Left Side: Text Content */}
          <div className="about2-text">
            <h3 className="section-label">About Me</h3>
            <h1 className="about2-title">Kyra Jean Bassig</h1>
            <h2 className="about2-subtitle">BSIT Student</h2>
            <p className="about2-description">
              I am a passionate Bachelor of Science in Information Technology student,
              eager to apply and enhance my skills in programming, networking, and system
              administration. My goal is to gain real-world experience while contributing
              positively with adaptability, teamwork, and a strong willingness to learn.
            </p>

            <div className="about2-buttons">
              <a href="/skills" className="btn primary-btn">My Skills</a>
              <a href="/contact" className="btn secondary-btn">Hire Me</a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="about2-image">
            <img src={aboutImage} alt="Kyra Jean Bassig" loading="lazy" />
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default About2;