import React from "react";
import "./Contact2.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaStar, FaPaperPlane } from "react-icons/fa";

const Contact2 = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-box">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>kyra@example.com</p>
        </div>

        <div className="contact-box">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+63 912 345 6789</p>
        </div>

        <div className="contact-box">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Bulacan, Philippines</p>
        </div>
      </div>

      {/* Floating background icons */}
      <div className="floating-icons">
        <FaHeart />
        <FaStar />
        <FaPaperPlane />
      </div>
    </section>
  );
};

export default Contact2;
