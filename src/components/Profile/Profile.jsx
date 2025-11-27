import React, { useState } from "react";
import "./Profile.css";
import profile from "../../assets/download.jpg";

// 1. IMPORT THE ANIMATION COMPONENT
import SplitText from "../SplitText/SplitText"; 

function Profile() {
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const skills = ["HTML", "CSS", "JavaScript", "React", "Python", "Networking"];
  const softSkills = ["Teamwork", "Adaptability", "Problem-solving", "Communication", "Leadership"];

  const handleClick = (icon) => {
    switch (icon) {
      case "📘":
        setContent(
          <div className="resume-card glass-purple">
            <h2 className="resume-title">📘 Mini Resume</h2>
            <div className="resume-body">
              <p><strong>Name:</strong> Kyra Jean Bassig</p>
              <p><strong>Course:</strong> BS in Information Technology</p>
              <p><strong>Goal:</strong> To apply my skills in web development and system management.</p>
            </div>
            <a href="/KyraJean_Resume.pdf" download className="resume-download-btn">
              ⬇ Download Resume
            </a>
          </div>
        );
        setShowModal(true);
        break;

      case "🧩":
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        setContent(
          <div className="api-card">
            <h2>🧩 Skill Generator</h2>
            <p>🎯 Random Skill: <strong>{randomSkill}</strong></p>
          </div>
        );
        setShowModal(true);
        break;

      case "🧾":
        setContent(
          <div className="api-card">
            <h2>🧾 Certificate Viewer</h2>
            <p>🏅 Coming Soon: A showcase of my achievements and training certificates.</p>
          </div>
        );
        setShowModal(true);
        break;

      case "✨":
        const randomSoft = softSkills[Math.floor(Math.random() * softSkills.length)];
        setContent(
          <div className="api-card">
            <h2>✨ Soft Skills Spotlight</h2>
            <p>💡 Highlighted Soft Skill: <strong>{randomSoft}</strong></p>
          </div>
        );
        setShowModal(true);
        break;

      default:
        break;
    }
  };

  return (
    <section id="profile" className="profile-section">
      <div className="profile-header content-wrapper">
        <div className="profile-intro">
          <p className="intro-greeting">Hello,</p>
          
    
<h1 className="title">
  I am{' '}
  <span className="highlight">
    <SplitText
      text="Kyra Jean Bassig"
      className="custom-split-text"
      delay={60}
      duration={1.2}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      threshold={0.1}
      rootMargin="-50px"
      tag="span"
      
      /* ❌ REMOVE repeat={-1}, repeatDelay, and yoyo={true} lines */
    />
  </span>
</h1>
          <h2 className="subtitle">BSIT Student</h2>

          <div className="social-links">
            <a href="https://www.facebook.com/kyrajeannn"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/kyrajeanbassig/my-portfolioo"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/kyrajeanbassig"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto:kyrajeanbassig@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>

          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>

        <div className="profile-image">
          <img src={profile} alt="Kyra Jean Bassig" className="profile-pic" />
          <div className="orbit-btn orbit1" onClick={() => handleClick("📘")}>📘</div>
          <div className="orbit-btn orbit2" onClick={() => handleClick("🧩")}>🧩</div>
          <div className="orbit-btn orbit3" onClick={() => handleClick("🧾")}>🧾</div>
          <div className="orbit-btn orbit4" onClick={() => handleClick("✨")}>✨</div>
        </div>
      </div>
      
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {content}
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profile;