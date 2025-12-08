import React, { useState, useMemo } from "react";
import "./SpiderWeb.css";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { LuUser } from "react-icons/lu";

const SpiderWeb = () => {
 
  const centerX = 250; 
  const centerY = 250; 
  const radius = 170;
  
  
  const allItems = [
    { id: 0, icon: <LuUser />, label: "About Me", color: "#fff" }, 
    { id: 1, icon: <FaHtml5 />, label: "HTML", color: "#E34F26" },
    { id: 2, icon: <FaCss3Alt />, label: "CSS", color: "#1572B6" },
    { id: 3, icon: <FaFigma />, label: "Figma", color: "#F24E1E" },
    { id: 4, icon: <SiNotion />, label: "Notion", color: "#ffffff" },
    { id: 5, icon: <FaJs />, label: "JS", color: "#F7DF1E" },
    { id: 6, icon: <FaReact />, label: "React", color: "#61DAFB" },
    { id: 7, icon: <FaGitAlt />, label: "Git", color: "#F05032" },
  ];


  const [activeId, setActiveId] = useState(0);


  const nodes = useMemo(() => {
  
    const outerItems = allItems.filter(item => item.id !== activeId);
    

    return allItems.map((item) => {
      let x, y, scale, zIndex, isCenter;

      if (item.id === activeId) {

        x = centerX;
        y = centerY;
        scale = 1.3; 
        zIndex = 10;
        isCenter = true;
      } else {
    
        const indexInOuter = outerItems.indexOf(item);
        const angle = (indexInOuter / outerItems.length) * 2 * Math.PI - Math.PI / 2;
        
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
        scale = 1;
        zIndex = 1;
        isCenter = false;
      }

      return { ...item, x, y, scale, zIndex, isCenter };
    });
  }, [activeId]); 

  return (
    <div className="spider-container">
  
      <svg className="spider-svg" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e92c78" stopOpacity="0" />
            <stop offset="100%" stopColor="#e92c78" stopOpacity="1" />
          </linearGradient>
        </defs>

        {nodes.map((node) => {

          if (node.isCenter) return null;

          return (
            <g key={node.id}>
              <line
                x1={node.x}
                y1={node.y}
                x2={centerX}
                y2={centerY}
                className="connector-line"
              />
              <path
                d={`M${node.x},${node.y} L${centerX},${centerY}`}
                className="active-beam"
                style={{ 
 
                   animationDelay: `${node.id * 0.5}s` 
                }}
              />
            </g>
          );
        })}
      </svg>


      <div className="icon-container">

        <div className="center-glow"></div>

        {nodes.map((node) => (
          <div
            key={node.id}
            className={`circle-node ${node.isCenter ? "is-active" : "is-outer"}`}
            onClick={() => setActiveId(node.id)} 
            style={{
              left: node.x,
              top: node.y,
              transform: `translate(-50%, -50%) scale(${node.scale})`, 
              zIndex: node.zIndex,
              borderColor: node.isCenter ? "#e92c78" : "rgba(244, 178, 86, 0.6)", 
              color: node.color 
            }}
          >
            <div className="icon-wrapper">
              {node.icon}
            </div>
            
        
            <span className="node-label" style={{ opacity: node.isCenter ? 1 : undefined }}>
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiderWeb;