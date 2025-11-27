import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectLand.css";

// Import your assets
// Ensure these paths match your actual folder structure
import packImage from "../../assets/pack.jpg";
import libImage from "../../assets/lib.jpg";
import dabreeImage from "../../assets/dabree.jpg";
import cherryImage from "../../assets/cherryt.jpg";
import androidstud from "../../assets/androidstud.jpg";
import blender from "../../assets/blender.jpg";

const projectsData = [
  {
    title: "Packet Tracer Labs",
    description: "Designed complex network topologies and simulated data packet flow using Cisco Packet Tracer.",
    image: packImage,
    tags: ["Networking", "Cisco", "Simulation"]
  },
  {
    title: "Library System",
    description: "A comprehensive management system built with vanilla JavaScript, PHP backend, and MySQL database.",
    image: libImage,
    tags: ["PHP", "MySQL", "Full Stack"]
  },
  {
    title: "DABreeder",
    description: "An ethical dog breeding platform focused on health tracking and responsible connections.",
    image: dabreeImage,
    tags: ["Web App", "Ethics", "React"]
  },
  {
    title: "Cherry Tomato",
    description: "High-fidelity mobile UI/UX prototype designed in Figma for a productivity application.",
    image: cherryImage,
    tags: ["UI/UX", "Figma", "Design"]
  },
  {
    title: "Android Studio App",
    description: "Native Android application development using Java/Kotlin within the Android Studio environment.",
    image: androidstud,
    tags: ["Android", "Mobile", "Java"]
  },
  {
    title: "Blender 3D House",
    description: "3D architectural modeling and rendering of a modern residential house using Blender.",
    image: blender,
    tags: ["3D Modeling", "Blender", "Art"]
  },
];

const ProjectLand = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when page opens
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-land-section">
      <div className="land-header">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </button>
        
        {/* Main Title */}
        <h1>Project Gallery</h1>
      </div>

      <div className="land-grid">
        {projectsData.map((project, index) => (
          <div className="land-card" key={index}>
            <div className="land-image-wrapper">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="land-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="land-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLand;