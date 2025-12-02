import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./ProjectLand.css";

const ProjectLand = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProjects = async () => {
      // Fetch projects from Supabase
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false }); // Newest first
      
      if (data) setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-land-section">
      <div className="land-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </button>
        <h1>Project Gallery</h1>
      </div>

      <div className="land-grid">
        {projects.map((project) => (
          <div className="land-card" key={project.id}>
            <div className="land-image-wrapper">
              {/* DIRECT URL USAGE */}
              {/* This works for both "/assets/img.jpg" AND "https://supabase..." */}
              <img 
                src={project.image_url} 
                alt={project.title} 
                loading="lazy"
                onError={(e) => {e.target.src = 'https://via.placeholder.com/400?text=Image+Not+Found'}}
              />
            </div>
            <div className="land-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="land-tags">
                {/* Check if tags is an array before mapping */}
                {Array.isArray(project.tags) && project.tags.map((tag, i) => (
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