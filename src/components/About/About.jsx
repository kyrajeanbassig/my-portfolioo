import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./About.css";
import { supabase } from "../../supabaseClient"; 
import defaultImg from "../../assets/download.jpg"; 

const About = () => {
  const navigate = useNavigate(); 
  

  const [about, setAbout] = useState({
    greeting: "My Biography",
    title: "Kyra Jean Bassig",
    description: "Loading...",
    image_url: null,
    card_experience: "Fresh Graduate",
    card_education: "BSIT Student",
    card_achievements: "Dean's Lister",
    card_skills: "Web Development"
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('about')
        .select('*')
        .maybeSingle();

      if (data && !error) {
        setAbout(data);
      }
    };
    fetchData();
  }, []);

  const handleViewMore = () => {
    navigate("/about"); 
    window.scrollTo(0, 0);
  };

  return (
    <section className="about-modern-section" id="about">
      <div className="about-modern-container">
        

        <div className="about-image-wrapper">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <img 
            src={about.image_url || defaultImg} 
            alt="Profile" 
            className="modern-profile-pic" 
            onError={(e) => {e.target.src = defaultImg}}
          />
        </div>


        <div className="about-content-wrapper">
          <h4 className="modern-heading">{about.greeting}</h4>
          <h2 className="modern-title">{about.title}</h2>
          
          <p className="modern-description">
            {about.description}
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <i className="fas fa-certificate stat-icon"></i>
              <div className="stat-text">
                <h4>Experience</h4>

                <span>{about.card_experience}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-graduation-cap stat-icon"></i>
              <div className="stat-text">
                <h4>Education</h4>

                <span>{about.card_education}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-trophy stat-icon"></i>
              <div className="stat-text">
                <h4>Achievements</h4>

                <span>{about.card_achievements}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-code stat-icon"></i>
              <div className="stat-text">
                <h4>Skills</h4>

                <span>{about.card_skills}</span>
              </div>
            </div>
          </div>


          <div className="about-footer">
            <a href="/contact" className="modern-btn btn-pink">
              Contact Me
            </a>

            <button onClick={handleViewMore} className="modern-btn btn-gold-outline">
              View More <i className="fas fa-arrow-right" style={{marginLeft: '8px'}}></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;