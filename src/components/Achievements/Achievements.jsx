import React from "react";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    { text: "MOS Certificate – Excel 2019 Associate", icon: "📄" },
    { text: "Microsoft Badges", icon: "🏅" },
    { text: "Packet Tracer Networking Labs – Cisco", icon: "🌐" },
    { text: "Portfolio Website – Personal Resume & Projects Showcase", icon: "💻" },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-title">🏆 Achievements</h2>
      <ul className="achievements-list">
        {achievements.map(({ text, icon }, idx) => (
          <li key={idx} className="achievement-item">
            <span className="achievement-icon">{icon}</span>
            <span className="achievement-text">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
