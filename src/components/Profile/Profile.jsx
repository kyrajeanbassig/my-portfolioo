import React from 'react';
import './Profile.css';
import profile from '../../assets/download.jpg';

function Profile() {
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
        </div>
      </div>
    </section>
  );
}

export default Profile;
