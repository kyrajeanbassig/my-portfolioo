import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contacts</h2>
      <div className="contact-container">

        {/* Email */}
        <div className="contact-box">
          <div className="contact-icon">📧</div>
          <h3>E-mail</h3>
          <p>
            <a href="mailto:kyrajean64@gmail.com">
              kyrajean.bassig@email.lcup.edu.ph
            </a>
          </p>
        </div>

        {/* Phone */}
        <div className="contact-box">
          <div className="contact-icon">📱</div>
          <h3>Telephone number</h3>
          <p>0963 118 7761</p>
        </div>

        {/* Social Media */}
        <div className="contact-box">
          <div className="contact-icon">🌐</div>
          <h3>Social media</h3>
          <div className="social-icons">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/kyrajeannn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.405.596 24 1.326 24H12.82v-9.294H9.692V11.06h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.309h3.587l-.467 3.646h-3.12V24h6.116C23.404 24 24 23.405 24 22.674V1.326C24 .596 23.404 0 22.675 0z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kyrajeanbassig/my-portfolioo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
                1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
                3.492.997.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 
                0-1.31.469-2.381 1.236-3.221-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.403c1.02.005 
                2.045.138 3.003.403 2.28-1.552 3.285-1.23 
                3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 
                5.92.43.372.81 1.102.81 2.222 0 1.606-.015 
                2.896-.015 3.286 0 .315.21.69.825.57 
                C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kyrajeanbassig"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 
                2.239 5 5 5h14c2.761 0 5-2.239 
                5-5V5c0-2.761-2.239-5-5-5zm-11 19H5V9h3v10zm-1.5-11.268c-.966 
                0-1.75-.79-1.75-1.764s.784-1.764 
                1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 
                1.764zM20 19h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.865 
                0-2.151 1.454-2.151 2.96V19h-3V9h2.881v1.367h.041c.401-.76 
                1.379-1.562 2.839-1.562 3.036 0 3.61 2.001 3.61 
                4.604V19z"/>
              </svg>
            </a>

            
            <a
              href="mailto:kyrajean64@gmail.com"
              className="social-circle"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M12 13.065L.015 6h23.97L12 13.065zM12 15.135L0 8.07V18c0 1.105.895 2 2 2h20c1.105 
                0 2-.895 2-2V8.07l-12 7.065z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
