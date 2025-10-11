import React, { useState } from 'react';
import './Profile.css';
import profile from '../../assets/download.jpg';

function Profile() {
  const [dogImage, setDogImage] = useState(null);

  // Handle icon clicks
  const handleClick = async (icon) => {
    switch (icon) {
      case "💻":
        // Fetch a random dog image and show modal
        try {
          const response = await fetch("https://dog.ceo/api/breeds/image/random");
          const data = await response.json();
          setDogImage(data.message);
        } catch {
          alert("Failed to fetch dog image!");
        }
        break;

      case "🤓":
        // Fun fact
        const facts = [
          "Dogs can understand up to 250 words and gestures!",
          "A dog's sense of smell is 40 times better than humans!",
          "Puppies are born deaf, blind, and toothless!",
          "Dogs have three eyelids, including one to keep their eyes moist!"
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert(`🤓 Fun Fact: ${randomFact}`);
        break;

      case "💬":
        // Simple chat prompt
        const msg = prompt("Say something to your virtual dog:");
        if (msg) alert(`You said: "${msg}" 🐶`);
        break;

      case "🌟":
        // Fetch random dog breed
        try {
          const response = await fetch("https://dog.ceo/api/breeds/list/random");
          const data = await response.json();
          alert(`🌟 Random Dog Breed: ${data.message}`);
        } catch {
          alert("Failed to fetch dog breed!");
        }
        break;

      default:
        console.log("Icon clicked");
    }
  };

  const closeModal = () => setDogImage(null);

  return (
    <section id="profile" className="profile-section">
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>

      <div className="profile-header">
        {/* Left content */}
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

        {/* Right content */}
        <div className="profile-image">
          <img src={profile} alt="Kyra Jean Bassig" className="profile-pic" />

          {/* Orbiting Icons */}
          <div className="orbit-btn orbit1" onClick={() => handleClick("💻")} title="Random Dog 💻">💻</div>
          <div className="orbit-btn orbit2" onClick={() => handleClick("🤓")} title="Fun Fact 🤓">🤓</div>
          <div className="orbit-btn orbit3" onClick={() => handleClick("💬")} title="Chat 💬">💬</div>
          <div className="orbit-btn orbit4" onClick={() => handleClick("🌟")} title="Random Breed 🌟">🌟</div>
        </div>
      </div>

      {/* Modal for Dog Image */}
      {dogImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={dogImage} alt="Random Dog" />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profile;
