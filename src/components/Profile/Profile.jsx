import React, { useState, useEffect } from "react";
import "./Profile.css";
import { supabase } from "../../supabaseClient"; 
import SplitText from "../SplitText/SplitText"; 
import defaultProfile from "../../assets/download.jpg"; 

function Profile() {
  // Default State (Fallback data in case DB fails)
  const [profileData, setProfileData] = useState({
    full_name: "Kyra Jean Bassig", // Default Name
    role: "BSIT Student",          // Default Role
    bio: "I am a passionate IT student...",
    github_link: "#",
    linkedin_link: "#",
    resume_url: "/KyraJean_Resume.pdf"
  });
  
  const [email, setEmail] = useState("kyrajeanbassig@gmail.com");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching Profile Data...");

      // 1. Fetch Profile
      const { data: profile, error: profileError } = await supabase
        .from('profile')
        .select('*')
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError.message);
      } else if (profile) {
        console.log("Profile Data Loaded:", profile);
        setProfileData(profile);
      }

      // 2. Fetch Contact Email
      const { data: contact, error: contactError } = await supabase
        .from('contact_info')
        .select('email')
        .single();

      if (contactError) {
        console.error("Error fetching contact:", contactError.message);
      } else if (contact) {
        setEmail(contact.email);
      }
    };

    fetchData();
  }, []);

  const handleClick = (type) => {
    if (type === "resume") {
      setContent(
        <div className="resume-card glass-purple">
          <h2 className="resume-title">📘 Profile Summary</h2>
          <div className="resume-body">
            <p><strong>Name:</strong> {profileData.full_name}</p>
            <p><strong>Role:</strong> {profileData.role}</p>
            <p className="bio-preview">{profileData.bio}</p>
          </div>
          <a href={profileData.resume_url} download target="_blank" rel="noreferrer" className="resume-download-btn">
            ⬇ Download Resume
          </a>
        </div>
      );
      setShowModal(true);
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
                text={profileData.full_name}
                className="custom-split-text"
                delay={60}
                duration={1.2}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.1}
                rootMargin="-50px"
                tag="span"
              />
            </span>
          </h1>
          <h2 className="subtitle">{profileData.role}</h2>

          <div className="social-links">
            <a href="https://www.facebook.com/kyrajeannn"><i className="fab fa-facebook-f"></i></a>
            <a href={profileData.github_link} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href={profileData.linkedin_link} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href={`mailto:${email}`}><i className="fas fa-envelope"></i></a>
          </div>

          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>

        <div className="profile-image">
          <img src={defaultProfile} alt="Profile" className="profile-pic" />
          <div className="orbit-btn orbit1" onClick={() => handleClick("resume")}>📘</div>
          <div className="orbit-btn orbit2">🧩</div>
          <div className="orbit-btn orbit3">🧾</div>
          <div className="orbit-btn orbit4">✨</div>
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