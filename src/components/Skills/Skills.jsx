import React from "react";
import "./Skills.css";

// Map skill names to their Font Awesome icon classes
const skillIconMap = {
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  REACT: "fab fa-react",
  JAVASCRIPT: "fab fa-js-square",
  MYSQL: "fas fa-database",
  GIT: "fab fa-git-alt",
  FIGMA: "fab fa-figma",
};

function Skills() {
  const skills = ["HTML", "CSS", "REACT", "JAVASCRIPT", "MYSQL", "GIT", "FIGMA"];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div className="skill-circle" key={idx}>
            <i className={skillIconMap[skill]} aria-hidden="true"></i>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
