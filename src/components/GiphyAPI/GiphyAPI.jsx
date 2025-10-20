import React, { useState } from "react";
import "./GiphyAPI.css";

function GiphyAPI() {
  const [gifIndex, setGifIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const gifs = [
     "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif",
    "https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif",
    "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
    "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
    "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/xT0GqeSlGSRQutn8eI/giphy.gif"
  ];

  const openModal = () => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setGifIndex(randomIndex);
    setShowModal(true);
    setLoading(true);

    setTimeout(() => setLoading(false), 500);
  };

  const nextGif = () => {
    setLoading(true);
    setTimeout(() => {
      setGifIndex((prev) => (prev + 1) % gifs.length);
      setLoading(false);
    }, 300);
  };

  const closeModal = () => {
    setShowModal(false);
    setGifIndex(null);
  };

  return (
    <div className="giphy-section">

      <div className="giphy-btn" onClick={openModal} title="Random GIF 🎬">
        🎬
      </div>


      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ✖
            </button>
            <h3>Random GIF 🎬</h3>
            {loading && <div className="spinner"></div>}
            {!loading && gifIndex !== null && (
              <img src={gifs[gifIndex]} alt="Random GIF" className="gif-img" />
            )}
            <button className="next-btn" onClick={nextGif}>
              Next GIF 🔄
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GiphyAPI;
