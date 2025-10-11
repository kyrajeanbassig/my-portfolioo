import React, { useState } from "react";
import "./API.css";

function API() {
  const [card, setCard] = useState(null);

  const handleClick = (type) => {
    setCard(type);
  };

  const closeCard = () => setCard(null);

  return (
    <div className="api-orbit-wrapper">
      {}
      <div className="orbit-btn orbit1" onClick={() => handleClick("resume")}>📄</div>
      <div className="orbit-btn orbit2" onClick={() => handleClick("skills")}>🧠</div>
      <div className="orbit-btn orbit3" onClick={() => handleClick("certs")}>🎓</div>
      <div className="orbit-btn orbit4" onClick={() => handleClick("soft")}>💬</div>

      {}
      {card && (
        <div className="dash-card">
          <button className="close-btn" onClick={closeCard}>✖</button>
          
          {card === "resume" && (
            <>
              <h3>Mini Resume 📄</h3>
              <p><strong>Name:</strong> Kyra Jean Bassig</p>
              <p><strong>Course:</strong> BSIT Student</p>
              <p><strong>Goal:</strong> Build creative and useful digital solutions.</p>
            </>
          )}

          {card === "skills" && (
            <>
              <h3>Skill Generator 🧠</h3>
              <p>🎨 Frontend: React, HTML, CSS</p>
              <p>💻 Backend: Node.js, Firebase</p>
              <p>⚙️ Tools: Git, Figma, Canva</p>
            </>
          )}

          {card === "certs" && (
            <>
              <h3>Certificates 🎓</h3>
              <img 
                src="https://via.placeholder.com/250x150?text=Certificate+Preview"
                alt="Certificate"
              />
              <p>Click to view your latest achievement!</p>
            </>
          )}

          {card === "soft" && (
            <>
              <h3>Soft Skills 💬</h3>
              <ul>
                <li>🌟 Adaptability</li>
                <li>🤝 Teamwork</li>
                <li>💡 Problem Solving</li>
                <li>💬 Communication</li>
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default API;
