import React from "react";
import "./About.css";
import aboutImage from '../../assets/download.jpg'; // Adjust path if needed

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h3 className="section-label">About Me</h3>
          <h1 className="about-title">Kyra Jean Bassig</h1>
          <h2 className="about-subtitle">BSIT Student</h2>
          <p className="about-description">
            I am a passionate Bachelor of Science in Information Technology
            student, eager to apply and enhance my skills in programming,
            networking, and system administration. My goal is to gain real-world
            experience while contributing positively with adaptability, teamwork,
            and a strong willingness to learn.
          </p>

          <div className="about-buttons">
            <a href="#skills" className="btn primary-btn">My Skills</a>
            <a href="#contact" className="btn secondary-btn">Hire Me</a>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Kyra Jean Bassig" />
        </div>
      </div>
    </section>
  );
}

export default About;
