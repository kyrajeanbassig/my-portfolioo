import React from "react";
import "./SpiderWeb.css";
import { FaGoogleDrive, FaWhatsapp, FaFacebookMessenger, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiNotion, SiOpenai, SiFigma, SiJavascript } from "react-icons/si";
import { LuUser } from "react-icons/lu";

const SpiderWeb = () => {
  return (
    <div className="spider-container">
      {/* 1. The SVG Lines (The "Beam" Effect) */}
      <svg className="spider-lines" viewBox="0 0 400 400">
        {/* Lines connecting Left side to Center */}
        <path d="M50,60 L200,200" className="beam-line" />
        <path d="M50,130 L200,200" className="beam-line delay-1" />
        <path d="M50,200 L200,200" className="beam-line delay-2" />
        <path d="M50,270 L200,200" className="beam-line delay-3" />
        <path d="M50,340 L200,200" className="beam-line delay-4" />
        
        {/* Line connecting Center to User (Right) */}
        <path d="M200,200 L350,200" className="beam-line-final" />
      </svg>

      {/* 2. The Icons (Positioned on top of lines) */}
      
      {/* Left Column Icons */}
      <div className="icon-group left-group">
        <div className="spider-circle"><FaGoogleDrive /></div>
        <div className="spider-circle"><SiNotion /></div>
        <div className="spider-circle"><FaWhatsapp /></div>
        <div className="spider-circle"><FaFacebookMessenger /></div>
        <div className="spider-circle"><SiFigma /></div>
      </div>

      {/* Center Icon (The Brain) */}
      <div className="icon-group center-group">
        <div className="spider-circle center-circle">
          <SiOpenai />
        </div>
      </div>

      {/* Right Icon (User) */}
      <div className="icon-group right-group">
        <div className="spider-circle user-circle">
          <LuUser />
        </div>
      </div>
    </div>
  );
};

export default SpiderWeb;