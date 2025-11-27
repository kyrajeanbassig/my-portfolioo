import React from "react";
import "./Project.css";

// Import Animation Components
import CardSwap, { Card } from "../CardSwap/CardSwap";

// Import Images
import packImage from "../../assets/pack.jpg";
import libImage from "../../assets/lib.jpg";
import dabreeImage from "../../assets/dabree.jpg";
import cherryImage from "../../assets/cherryt.jpg";
import androidstud from "../../assets/androidstud.jpg";
import blender from "../../assets/blender.jpg";

function Projects() {
  const projects = [
    {
      title: "Packet Tracer Labs",
      description: "Network design simulations.",
      image: packImage,
    },
    {
      title: "Library System",
      description: "JS, PHP, and MySQL system.",
      image: libImage,
    },
    {
      title: "DABreeder",
      description: "Ethical dog breeding web app.",
      image: dabreeImage,
    },
    {
      title: "Cherry Tomato",
      description: "Figma mobile prototype.",
      image: cherryImage,
    },
    {
      title: "Android Studio",
      description: "Native mobile application.",
      image: androidstud,
    },
    {
      title: "Blender 3D",
      description: "3D House modeling.",
      image: blender,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      
      {/* Container to split Left and Right */}
      <div className="projects-layout">
        
        {/* LEFT SIDE: Title */}
          <div className="projects-text-side">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            Here are some of the works I've done.<br />
            Click the button below the cards to automate the swapping!
          </p>
        </div>

        {/* RIGHT SIDE: Card Stack */}
        <div className="swap-wrapper">
          <CardSwap 
             width={450}   /* Was 360 */
            height={550}  /* Was 460 */
            cardDistance={50} 
            verticalDistance={30}
            skewAmount={2}
          >
            {projects.map((project, idx) => (
              <Card customClass="project-card" key={idx}>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

      </div>
    </section>
  );
}

export default Projects;