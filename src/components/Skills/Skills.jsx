import React, { useState, useEffect, useMemo } from "react";
import "./Skills.css";
import { supabase } from "../../supabaseClient"; 
import { FaUser, FaCode } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si"; 

function Skills() {
  const [dbSkills, setDbSkills] = useState([]);
  // Initial state is Loading, but we will fix it in useEffect
  const [description, setDescription] = useState("Loading...");
  const [activeId, setActiveId] = useState('user-center');

  const centerX = 250; 
  const centerY = 250; 
  const radius = 170; 

  useEffect(() => {
    const fetchData = async () => {
      // 1. Fetch Skills Nodes
      const { data: skillsData } = await supabase
        .from('skills')
        .select('*')
        .order('id');
      if (skillsData) setDbSkills(skillsData);

      // 2. Fetch Description Text
      const { data: contentData } = await supabase
        .from('site_content')
        .select('content_text')
        .eq('section_key', 'skills_desc')
        .maybeSingle();

      // FIXED: Check if data exists, otherwise use fallback text
      if (contentData && contentData.content_text) {
        setDescription(contentData.content_text);
      } else {
        setDescription("These are the tools that power my programming and web development workflow. They help me write clean, efficient code while creating responsive and user-centered designs.");
      }
    };
    
    fetchData();
  }, []);

  const nodes = useMemo(() => {
    const userNode = {
      id: 'user-center',
      name: 'About Me',
      icon_name: 'FaUser', 
    };

    const allNodes = [userNode, ...dbSkills];

    const centerNode = allNodes.find(n => n.id === activeId) || userNode;
    const outerNodes = allNodes.filter(n => n.id !== activeId);

    return allNodes.map((node) => {
      let x, y, scale, zIndex, isCenter;

      if (node.id === activeId) {
        x = centerX;
        y = centerY;
        scale = 1.4; 
        zIndex = 10;
        isCenter = true;
      } else {
        const index = outerNodes.indexOf(node);
        const totalOuter = outerNodes.length;
        const angle = (index / totalOuter) * 2 * Math.PI - Math.PI / 2;

        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
        scale = 1;
        zIndex = 1;
        isCenter = false;
      }

      let IconComponent = FaIcons.FaCode; 
      if (node.icon_name === 'FaUser') IconComponent = FaUser;
      else if (node.icon_name && FaIcons[node.icon_name]) IconComponent = FaIcons[node.icon_name];
      else if (node.icon_name && SiIcons[node.icon_name]) IconComponent = SiIcons[node.icon_name];

      return { ...node, x, y, scale, zIndex, isCenter, IconComponent };
    });
  }, [dbSkills, activeId]);

  return (
    <section id="skills" className="skills-modern-section">
      <div className="skills-blob blob-1"></div>
      <div className="skills-blob blob-2"></div>

      <div className="glass-panel">
        
        <div className="skills-text-wrapper">
          <h4 className="modern-heading">Expertise</h4>
          <h1 className="skills-main-title">My Skills & Tools</h1>
          <p className="skills-description">{description}</p>
        </div>

        <div className="spiderweb-wrapper">
          <div className="spiderweb-box">
            
            <svg className="spider-svg" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e92c78" stopOpacity="0" />
                  <stop offset="100%" stopColor="#e92c78" stopOpacity="1" />
                </linearGradient>
              </defs>
              
              {nodes.map(node => {
                if (node.isCenter) return null;
                return (
                  <g key={node.id}>
                    <line x1={node.x} y1={node.y} x2={centerX} y2={centerY} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                    <path 
                      d={`M${node.x},${node.y} L${centerX},${centerY}`} 
                      className="active-beam"
                      style={{ animationDelay: `${(node.id || 0) * 0.2}s` }}
                    />
                  </g>
                )
              })}
            </svg>

            {nodes.map((node) => (
              <div 
                key={node.id}
                className={`skill-node ${node.isCenter ? 'is-active' : ''}`}
                onClick={() => setActiveId(node.id)}
                style={{
                  left: node.x,
                  top: node.y,
                  transform: `translate(-50%, -50%) scale(${node.scale})`,
                  zIndex: node.zIndex,
                  background: node.isCenter ? 'radial-gradient(circle at 30% 30%, #e92c78, #6a0dad)' : '#22030d',
                  borderColor: node.isCenter ? '#e92c78' : 'rgba(244, 178, 86, 0.6)'
                }}
              >
                <div className="icon-wrapper" style={{ color: '#fff' }}>
                  <node.IconComponent />
                </div>
                
                <span className="skill-name" style={{ opacity: node.isCenter ? 1 : undefined, bottom: '-40px' }}>
                  {node.name}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;