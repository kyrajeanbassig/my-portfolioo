import React from "react";
import "./Skills.css";
import { FaUser } from "react-icons/fa"; 
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaJs, 
  FaGitAlt, 
  FaFigma, 
  FaDatabase 
} from "react-icons/fa";

function Skills() {
  // Define skills with manual X/Y coordinates for perfect spiderweb shape
  // You can adjust X/Y to move nodes closer or further
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", x: 0, y: -200 },       
    { icon: <FaCss3Alt />, name: "CSS", x: 170, y: -100 },    
    { icon: <FaJs />, name: "JavaScript", x: 170, y: 100 },    
    { icon: <FaReact />, name: "React", x: 0, y: 200 },       
    { icon: <FaDatabase />, name: "MySQL", x: -170, y: 100 },  
    { icon: <FaGitAlt />, name: "Git", x: -170, y: -100 },    
    // Figma sits a bit further out or in between
    { icon: <FaFigma />, name: "Figma", x: 0, y: -100 },      
  ];

  return (
    <section id="skills" className="skills-modern-section">
      {/* Decorative Blobs */}
      <div className="skills-blob blob-1"></div>
      <div className="skills-blob blob-2"></div>

      <div className="glass-panel">
        
        {/* LEFT SIDE: Text Content */}
        <div className="skills-text-wrapper">
          <h4 className="modern-heading">Expertise</h4>
          <h1 className="skills-main-title">My Skills & Tools</h1>
          <p className="skills-description">
            These are the tools that power my programming and web development workflow. 
            They help me write clean, efficient code while creating responsive and 
            user-centered designs. Each tool plays a role in turning ideas into 
            fully functional digital experiences.
          </p>
        </div>

        {/* RIGHT SIDE: Spiderweb Visual */}
        <div className="spiderweb-wrapper">
          <div className="spiderweb-box">
            
            {/* SVG Lines connecting center to nodes */}
            <svg className="web-lines" width="100%" height="100%">
              {skills.map((skill, index) => (
                <line 
                  key={index}
                  x1="50%" 
                  y1="50%" 
                  // Calculate percentage positions for responsive SVG lines
                  // 300 is the half-width of the container (600px)
                  x2={`calc(50% + ${skill.x}px)`} 
                  y2={`calc(50% + ${skill.y}px)`} 
                  className="web-line"
                />
              ))}
            </svg>

            {/* Center Node (User Icon) */}
            <div className="center-node">
              <FaUser />
            </div>

            {/* Skill Nodes (Orbiting) */}
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-node"
                style={{ 
                  // Use inline transform to position nodes based on X/Y data
                  transform: `translate(${skill.x}px, ${skill.y}px)`
                }}
              >
                <div className="icon-wrapper">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;