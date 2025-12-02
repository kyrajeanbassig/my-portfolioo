import React, { useState, useEffect } from "react";
import "./Skills.css";
import { supabase } from "../../supabaseClient";

// 1. Import the specific icons you want to use
import { 
  FaUser, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaJs, 
  FaGitAlt, 
  FaFigma, 
  FaDatabase, 
  FaNodeJs, 
  FaPython, 
  FaJava,
  FaCode 
} from "react-icons/fa";

import { 
  SiMysql, 
  SiSupabase, 
  SiPhp, 
  SiMongodb 
} from "react-icons/si";

// 2. Create the Map directly here
const iconMap = {
  // FontAwesome
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaReact: <FaReact />,
  FaJs: <FaJs />,
  FaGitAlt: <FaGitAlt />,
  FaFigma: <FaFigma />,
  FaDatabase: <FaDatabase />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  FaJava: <FaJava />,
  FaCode: <FaCode />, // Default fallback
  
  // Simple Icons
  SiMysql: <SiMysql />,
  SiSupabase: <SiSupabase />,
  SiPhp: <SiPhp />,
  SiMongodb: <SiMongodb />,
  
  // Add more here if needed (e.g., "SiTailwindcss": <SiTailwindcss />)
};

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      // 3. Fetch from Database
      const { data } = await supabase.from('skills').select('*').order('id');
      
      if (data) {
        // 4. Calculate Positions for Spider Web Circle
        const radius = 200; 
        const totalSkills = data.length;
        
        const skillsWithPos = data.map((skill, index) => {
          const angle = (index / totalSkills) * 2 * Math.PI - (Math.PI / 2);
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return { ...skill, x, y };
        });

        setSkills(skillsWithPos);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="skills-modern-section">
      <div className="skills-blob blob-1"></div>
      <div className="skills-blob blob-2"></div>

      <div className="glass-panel">
        <div className="skills-text-wrapper">
          <h4 className="modern-heading">Expertise</h4>
          <h1 className="skills-main-title">My Skills & Tools</h1>
          <p className="skills-description">
            These are the tools that power my development process. 
            They help me write clean, efficient code while creating responsive designs.
          </p>
        </div>

        <div className="spiderweb-wrapper">
          <div className="spiderweb-box">
            
            <svg className="web-lines" width="100%" height="100%">
              {skills.map((skill, index) => (
                <line 
                  key={index}
                  x1="50%" 
                  y1="50%" 
                  x2={`calc(50% + ${skill.x}px)`} 
                  y2={`calc(50% + ${skill.y}px)`} 
                  className="web-line"
                />
              ))}
            </svg>

            <div className="center-node">
              <FaUser />
            </div>

            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-node"
                style={{ 
                  transform: `translate(${skill.x}px, ${skill.y}px)`
                }}
              >
                <div className="icon-wrapper">
                  {/* 5. Render Icon from the local map */}
                  {iconMap[skill.icon_name] || <FaCode />}
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