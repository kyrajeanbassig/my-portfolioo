import React, { useState } from "react";
import "./Profile.css";
import profile from "../../assets/download.jpg";


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
            I am <span className="highlight">Kyra Jean Bassig</span>
           
          </h1>
          <h2 className="subtitle">BSIT Student</h2>

          <div className="social-links">
            <a href="https://www.facebook.com/kyrajeannn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://github.com/kyrajeanbassig/my-portfolioo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/kyrajeanbassig" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="mailto:kyrajeanbassig@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>

        <div className="profile-image">
          <img src={profile} alt="Kyra Jean Bassig" className="profile-pic" />

          <div className="orbit-btn orbit1" data-label="Mini Resume" onClick={() => handleClick("📘")}>📘</div>
          <div className="orbit-btn orbit2" data-label="Skill Generator" onClick={() => handleClick("🧩")}>🧩</div>
          <div className="orbit-btn orbit3" data-label="Certificate Viewer" onClick={() => handleClick("🧾")}>🧾</div>
          <div className="orbit-btn orbit4" data-label="Soft Skills" onClick={() => handleClick("✨")}>✨</div>
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