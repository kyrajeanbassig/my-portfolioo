import React, { useState } from 'react';
import './Profile.css';
import profile from '../../assets/download.jpg';

function Profile() {
  const [quote, setQuote] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Array of inspirational quotes
  const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Little by little, day by day, what is meant for you will find its way."
  ];

  const handleClick = (icon) => {
    switch (icon) {
      case "💻":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "🤓":
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "💬":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "🌟":
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <section id="profile" className="profile-section">
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>

      <div className="profile-header">
        <div className="profile-intro">
          <p className="intro-greeting">Hello,</p>
          <h1 className="title">
            I am <span className="highlight">Kyra Jean Bassig</span>
            <span className="wave"> 👋</span>
          </h1>
          <h2 className="subtitle">BSIT Student</h2>

          <div className="social-links">
            <a href="https://www.facebook.com/kyrajeannn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/_kyyy.yyy/?next=%2F" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/_kyraajeannnn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>

        <div className="profile-image">
          <img src={profile} alt="Kyra Jean Bassig" className="profile-pic" />

          <div className="orbit-btn orbit1" onClick={() => handleClick("💻")}>💻</div>
          <div className="orbit-btn orbit2" onClick={() => handleClick("🤓")}>🤓</div>
          <div className="orbit-btn orbit3" onClick={() => handleClick("💬")}>💬</div>
          <div className="orbit-btn orbit4" onClick={() => handleClick("🌟")}>🌟</div>
        </div>
      </div>

      {/* Modal for Quote */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p style={{ fontStyle: 'italic' }}>{quote}</p>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profile;
