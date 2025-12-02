import React, { useState, useEffect } from "react";
import "./Contact.css";
import { supabase } from "../../supabaseClient";
import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "Loading...",
    phone: "Loading...",
    location: "Loading..."
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchContact = async () => {
      const { data } = await supabase.from('contact_info').select('*').single();
      if (data) setContactInfo(data);
    };
    fetchContact();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message Sent Successfully!");
      e.target.reset();
    }, 1500);
  };

  return (
    <section className="ezy__contact12 dark">
      <div className="ezy__contact12-bg-holder"></div>

      <div className="container">
        <div className="contact-row">
          
          <div className="contact-info-col">
            <h2 className="contact-heading">How can we help you?</h2>
            <p className="contact-sub-heading">
              Have a project in mind? Reach out via email or phone.
            </p>

            <div className="contact-cards-list">
              <div className="info-card">
                <div className="card-body">
                  <FaEnvelope className="contact-icon" />
                  <a href={`mailto:${contactInfo.email}`} className="info-link">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="card-body">
                  <FaPhoneAlt className="contact-icon" />
                  <a href={`tel:${contactInfo.phone}`} className="info-link">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="card-body">
                  <FaGlobe className="contact-icon" />
                  <span className="info-link">
                    {contactInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="form-card">
              <div className="form-card-body">
                <h2 className="form-heading">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter Email" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Enter Message" rows="3" required></textarea>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="submit-btn">Submit</button>
                  </div>
                  {status && <p className="status-msg">{status}</p>}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;