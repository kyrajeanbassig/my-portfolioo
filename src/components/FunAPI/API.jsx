import React from "react";
import "./API.css";

function API() {
  const handleClick = (icon) => {
    switch (icon) {
      case "💻":
        // Fetch a random dog image and show in alert
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(res => res.json())
          .then(data => alert(`💻 Dog Image URL: ${data.message}`))
          .catch(() => alert("Failed to fetch dog"));
        break;

      case "🤓":
        // Fun fact alert
        const facts = [
          "Dogs can understand up to 250 words and gestures!",
          "A dog's sense of smell is 40 times better than humans!",
          "Puppies are born deaf, blind, and toothless!",
          "Dogs have three eyelids, including one to keep their eyes moist!"
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert(`🤓 Fun Fact: ${randomFact}`);
        break;

      case "💬":
        // Simple chat prompt
        const msg = prompt("Say something to your virtual dog:");
        if (msg) {
          alert(`You said: "${msg}" 🐶`);
        }
        break;

      default:
        console.log("Icon clicked");
    }
  };

  return (
    <div className="api-orbit-wrapper">
      <div className="api-orbit-container">
        <div className="orbit-btn orbit1" onClick={() => handleClick("💻")}>💻</div>
        <div className="orbit-btn orbit2" onClick={() => handleClick("🤓")}>🤓</div>
        <div className="orbit-btn orbit3" onClick={() => handleClick("💬")}>💬</div>
      </div>
    </div>
  );
}

export default API;
