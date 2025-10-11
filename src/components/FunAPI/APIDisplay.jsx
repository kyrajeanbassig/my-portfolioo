import React from "react";
import { useLocation } from "react-router-dom";
import "./API.css";

// Example content for each type
const contentMap = {
  programming: {
    img: "https://via.placeholder.com/200?text=Programming",
    text: "Here's a programming joke or fact! 💻"
  },
  geek: {
    img: "https://via.placeholder.com/200?text=Geek",
    text: "Here's a geeky fun fact! 🤓"
  },
  quote: {
    img: "https://via.placeholder.com/200?text=Quote",
    text: "An inspiring quote for you! 💬"
  }
};

function APIDisplay() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  const content = contentMap[type];

  if (!content) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Select an icon to see content.</p>;
  }

  return (
    <div className="api-display-container">
      <img src={content.img} alt={type} className="api-display-img" />
      <p className="api-display-text">{content.text}</p>
    </div>
  );
}

export default APIDisplay;
