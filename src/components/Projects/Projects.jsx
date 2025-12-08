import React, { useState, useEffect } from "react";
import "./Project.css";
import { supabase } from "../../supabaseClient";
import CardSwap, { Card } from "../CardSwap/CardSwap";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false });
      
      if (data) setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-layout">
        <div className="projects-text-side">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            Here are some of the works I've done.<br />
            Click the button below the cards to automate the swapping!
          </p>
        </div>

        <div className="swap-wrapper">
          {projects.length > 0 ? (
            <CardSwap 
              width={450}
              height={550}
              cardDistance={50} 
              verticalDistance={30}
              skewAmount={2}
            >
              {projects.map((project) => (
                <Card customClass="project-card" key={project.id}>
                  <div className="project-image-wrapper">
        
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="project-image"
                      onError={(e) => {e.target.src = 'https://via.placeholder.com/400?text=No+Image'}}
                    />
                  </div>
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          ) : (
            <p style={{color:'white'}}>Loading Projects...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;