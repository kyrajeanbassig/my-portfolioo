import React, { useMemo } from "react";
import "./SpiderWeb.css";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { LuUser } from "react-icons/lu";

const SpiderWeb = () => {
  // Configuration
  const centerX = 250; // SVG Center X
  const centerY = 250; // SVG Center Y
  const radius = 160;  // Distance of icons from center
  const totalDuration = 6; // Total time for one full cycle of all animations (seconds)

  // List of outer icons
  const icons = [
    { id: 1, icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
    { id: 2, icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
    { id: 3, icon: <FaFigma color="#F24E1E" />, label: "Figma" },
    { id: 4, icon: <SiNotion color="#ffffff" />, label: "Notion" },
    { id: 5, icon: <FaJs color="#F7DF1E" />, label: "JS" },
    { id: 6, icon: <FaReact color="#61DAFB" />, label: "React" },
    { id: 7, icon: <FaGitAlt color="#F05032" />, label: "Git" },
  ];

  // Helper to calculate positions based on angle
  const nodes = useMemo(() => {
    return icons.map((item, index) => {
      const angle = (index / icons.length) * 2 * Math.PI - Math.PI / 2; // Start from top (-90deg)
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      // Calculate delay so they fire one after another
      const delay = (totalDuration / icons.length) * index;
      
      return { ...item, x, y, delay };
    });
  }, [icons]);

  return (
    <div className="spider-container">
      {/* 1. SVG Layer for Lines and Beams */}
      <svg className="spider-svg" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff00ff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ff00ff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {nodes.map((node) => (
          <g key={node.id}>
            {/* Static dashed line */}
            <line
              x1={node.x}
              y1={node.y}
              x2={centerX}
              y2={centerY}
              className="connector-line"
            />
            
            {/* Animated Beam: Fires sequentially based on delay */}
            <path
              d={`M${node.x},${node.y} L${centerX},${centerY}`}
              className="active-beam"
              style={{ 
                animationDelay: `${node.delay}s`,
                animationDuration: `${totalDuration}s` // Ensures they loop perfectly in sync
              }}
            />
          </g>
        ))}
      </svg>

      {/* 2. HTML Layer for Icons (Clickable) */}
      <div className="icon-container">
        {/* Background Glow for Center */}
        <div className="center-glow"></div>

        {/* Center User Node */}
        <div 
          className="circle-node center-node"
          style={{ left: centerX, top: centerY }}
        >
          <LuUser />
        </div>

        {/* Outer Tech Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className="circle-node outer-node"
            style={{ 
              left: node.x, 
              top: node.y,
            }}
            title={node.label}
          >
            {node.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiderWeb;