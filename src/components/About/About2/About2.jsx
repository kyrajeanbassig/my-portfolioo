import React, { useState, useEffect } from "react";
import "./About2.css";
import { supabase } from "../../supabaseClient"; // Ensure path is correct
import defaultImage from "../../assets/download.jpg"; // Fallback image

function About2() {
  const [aboutData, setAboutData] = useState({
    greeting: "About Me",
    title: "Kyra Jean Bassig",
    description: "Loading bio...",
    image_url: null
  });

  useEffect(() => {
    const fetchAboutData = async () => {
      const { data, error } = await supabase
        .from('about')
        .select('*')
        .maybeSingle();

      if (error) {
        console.error("Error fetching about:", error);
      } else if (data) {
        setAboutData(data);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="about2-page">
      <section id="about2" className="about2-section">
        <div className="about2-container">
          
          {/* Left Side: Text Content */}
          <div className="about2-text">
            {/* Map Greeting (e.g. "About Me") */}
            <h3 className="section-label">{aboutData.greeting || "About Me"}</h3>
            
            {/* Map Title (e.g. "Kyra Jean Bassig") */}
            <h1 className="about2-title">{aboutData.title}</h1>
            
            <h2 className="about2-subtitle">BSIT Student</h2>
            
            {/* Map Description */}
            <p className="about2-description">
              {aboutData.description}
            </p>

            <div className="about2-buttons">
              <a href="/skills" className="btn primary-btn">My Skills</a>
              <a href="/contact" className="btn secondary-btn">Hire Me</a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="about2-image">
            <img 
              // Use DB image if exists, otherwise default
              src={aboutData.image_url || defaultImage} 
              alt={aboutData.title} 
              loading="lazy" 
              onError={(e) => {e.target.src = defaultImage}} // Safety fallback
            />
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default About2;