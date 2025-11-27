import React, { useState } from "react";
import "./Contact.css";

// Icons
import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate sending state
    setStatus("Sending...");
    
    // Simulate success after 1.5 seconds
    setTimeout(() => {
      setStatus("Message Sent Successfully!");
      e.target.reset(); // Clear the inputs
    }, 1500);
  };

  return (
    <section className="ezy__contact12 dark">
      {/* Background Map Image */}
      <div className="ezy__contact12-bg-holder"></div>

      <div className="container">
        <div className="contact-row">
          
          {/* LEFT SIDE: Info Cards */}
          <div className="contact-info-col">
            <h2 className="contact-heading">How can we help you?</h2>
            <p className="contact-sub-heading">
              Have a project in mind or want to collaborate? Reach out via email or phone, 
              or send a direct message using the form.
            </p>

            <div className="contact-cards-list">
              
              {/* Email Card */}
              <div className="info-card">
                <div className="card-body">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:kyrajean64@gmail.com" className="info-link">
                    kyrajean64@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="info-card">
                <div className="card-body">
                  <FaPhoneAlt className="contact-icon" />
                  <a href="tel:09631187761" className="info-link">
                    0963 118 7761
                  </a>
                </div>
              </div>

              {/* Website/Social Card */}
              <div className="info-card">
                <div className="card-body">
                  <FaGlobe className="contact-icon" />
                  <a href="#" className="info-link">
                    My Portfolio
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <div className="form-card-body">
                <h2 className="form-heading">Contact Us</h2>
                <p className="form-sub-heading">
                  We will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter Name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter Email" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      className="form-control" 
                      placeholder="Enter Message" 
                      rows="3" 
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-end">
                    <button type="submit" className="submit-btn">
                      Submit
                    </button>
                  </div>
                  
                  {/* Status Message Display */}
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