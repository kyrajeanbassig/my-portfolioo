import React from "react";
import "./Project.css";

import packImage from "../../assets/pack.jpg";
import libImage from "../../assets/lib.jpg";
import dabreeImage from "../../assets/dabree.jpg";
import cherryImage from "../../assets/cherryt.jpg";

function Projects() {
  const projects = [
    {
      title: "Packet Tracer Networking Labs – Cisco",
      description: "Simulated network design using Cisco Packet Tracer.",
      image: packImage,
    },
    {
      title: "Library Management System",
      description: "Built using JavaScript, NetBeans, PHP, and MySQL.",
      image: libImage,
    },
    {
      title: "DABreeder",
      description: "Ethical dog breeding platform (web application).",
      image: dabreeImage,
    },
    {
      title: "Cherry Tomato",
      description: "Mobile app prototype built in Figma.",
      image: cherryImage,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">💻 My Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
