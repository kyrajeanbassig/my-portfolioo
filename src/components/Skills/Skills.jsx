import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "REACT", "JAVASCRIPT", "MYSQL", "GIT", "FIGMA"];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div className="skill-circle" key={idx}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
