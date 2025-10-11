import React, { useEffect, useState } from "react";
import "./DogAPIDisplay.css";

function DogAPIDisplay() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImage(data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="dog-api-container">
      <h2>🐶 Random Dog Image</h2>
      {loading ? <p>Loading...</p> : <img src={dogImage} alt="Random Dog" className="dog-image" />}
      <button onClick={fetchDog} className="dog-refresh-btn">Get Another Dog</button>
    </div>
  );
}

export default DogAPIDisplay;
