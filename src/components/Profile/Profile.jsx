import React, { useState, useEffect } from "react";
import "./Profile.css";
import { supabase } from "../../supabaseClient"; 
import SplitText from "../SplitText/SplitText"; 
import defaultProfile from "../../assets/download.jpg"; 

import myResume from "../../assets/Bassig - Resume.pdf";

function Profile() {

  const techStack = ["React", "Supabase", "HTML/CSS", "JavaScript", "Figma", "Git", "MySQL"];
  const certificates = [
    "Dean's Lister (2021-Present)",
    "Microsoft Office Specialist - Excel",
    "Cisco Packet Tracer Networking",
    "Introduction to Cybersecurity"
  ];
  const softSkills = ["Adaptability", "Teamwork", "Problem Solving", "Leadership", "Communication"];


  const [profileData, setProfileData] = useState({
    full_name: "Kyra Jean Bassig", 
    role: "BSIT Student",          
    bio: "I am a passionate IT student...",
    github_link: "#",
    linkedin_link: "#",
    resume_url: myResume 
  });
  
  const [email, setEmail] = useState("kyrajeanbassig@gmail.com");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching Profile Data...");

      const { data: profile, error: profileError } = await supabase
        .from('profile')
        .select('*')
        .maybeSingle();

      if (profileError) {
        console.error("Error fetching profile:", profileError.message);
      } else if (profile) {
        setProfileData(prev => ({
          ...prev,
          full_name: profile.full_name || prev.full_name,
          role: profile.role || prev.role,
          bio: profile.bio || prev.bio,
          github_link: profile.github_link || prev.github_link,
          linkedin_link: profile.linkedin_link || prev.linkedin_link,
        }));
      }

      const { data: contact } = await supabase
        .from('contact_info')
        .select('email')
        .maybeSingle();

      if (contact && contact.email) {
        setEmail(contact.email);
      }
    };

    fetchData();
  }, []);


  const handleClick = (type) => {
    switch (type) {
      case "resume":
        setContent(
          <div className="resume-card glass-purple">
            <h2 className="resume-title">📘 Profile Summary</h2>
            <div className="resume-body">
              <p><strong>Name:</strong> {profileData.full_name}</p>
              <p><strong>Role:</strong> {profileData.role}</p>
              <p className="bio-preview">{profileData.bio}</p>
            </div>
            <a 
              href={profileData.resume_url} 
              download="Bassig - Resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="resume-download-btn"
            >
              ⬇ Download Resume
            </a>
          </div>
        );
        setShowModal(true);
        break;

      case "skills": 
        setContent(
          <div className="api-card">
            <h2>🧩 Tech Stack</h2>
            <p>Tools & Technologies I use:</p>
            <div className="tags-container">
              {techStack.map((tech, index) => (
                <span key={index} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>
        );
        setShowModal(true);
        break;

      case "certs": 
        setContent(
          <div className="api-card">
            <h2>🧾 Certificates & Awards</h2>
            <ul className="cert-list">
              {certificates.map((cert, index) => (
                <li key={index}>🏆 {cert}</li>
              ))}
            </ul>
          </div>
        );
        setShowModal(true);
        break;

      case "soft": 
        setContent(
          <div className="api-card">
             <h2>✨ Soft Skills</h2>
             <p>Values I bring to the team:</p>
             <div className="soft-grid">
               {softSkills.map((skill, index) => (
                 <div key={index} className="soft-item">✦ {skill}</div>
               ))}
             </div>
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
            <a href="https://www.facebook.com/kyrajeannn" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href={profileData.github_link} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href={profileData.linkedin_link} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href={`mailto:${email}`}><i className="fas fa-envelope"></i></a>
          </div>

          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>

        <div className="profile-image">
          <img src={defaultProfile} alt="Profile" className="profile-pic" />
          
    
          <div className="orbit-btn orbit1" onClick={() => handleClick("resume")}>📘</div>
          <div className="orbit-btn orbit2" onClick={() => handleClick("skills")}>🧩</div>
          <div className="orbit-btn orbit3" onClick={() => handleClick("certs")}>🧾</div>
          <div className="orbit-btn orbit4" onClick={() => handleClick("soft")}>✨</div>
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