import React from "react";
import "./About.css";
import aboutImage from "../../assets/download.jpg"; 
import { 
  FaAward, 
  FaGraduationCap, 
  FaTrophy, 
  FaCode, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub 
} from "react-icons/fa";

function About() {
  // You can customize these stats
  const stats = [
    { icon: <FaAward />, title: "Experience", subtitle: "Fresh Graduate" },
    { icon: <FaGraduationCap />, title: "Education", subtitle: "BSIT Student" },
    { icon: <FaTrophy />, title: "Achievements", subtitle: "Dean's Lister" },
    { icon: <FaCode />, title: "Skills", subtitle: "Web Development" },
  ];

  return (
    <section id="about" className="about-modern-section">
      <div className="about-modern-container">
        
        {/* LEFT SIDE: Image & Blobs */}
        <div className="about-image-wrapper">
          {/* Organic background shapes */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          
          <img 
            src={aboutImage} 
            alt="Kyra Jean Bassig" 
            className="modern-profile-pic" 
          />
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="about-content-wrapper">
          <h2 className="modern-heading">My Story</h2>
          <h1 className="modern-title">Kyra Jean Bassig</h1>
          
          <p className="modern-description">
            I am a passionate Bachelor of Science in Information Technology student,
            eager to apply and enhance my skills in programming, networking, and system
            administration. My goal is to gain real-world experience while contributing
            positively with adaptability, teamwork, and a strong willingness to learn.
          </p>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((item, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{item.icon}</div>
                <div className="stat-text">
                  <h4>{item.title}</h4>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer: Button & Socials */}
          <div className="about-footer">
            <a href="/contact" className="modern-btn">Contact Me</a>
            
            <div className="social-links-modern">
              <a href="https://facebook.com"><FaFacebookF /></a>
              <a href="https://twitter.com"><FaTwitter /></a>
              <a href="https://linkedin.com"><FaLinkedinIn /></a>
              <a href="https://github.com"><FaGithub /></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;