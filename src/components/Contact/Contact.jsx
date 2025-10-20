import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contacts</h2>
      <div className="contact-container">

        <div className="contact-box">
          <div className="contact-icon">📧</div>
          <h3>E-mail</h3>
          <p>
            <a href="mailto:kyrajean64@gmail.com">kyrajean.bassig@email.lcup.edu.ph</a>
          </p>
        </div>

        <div className="contact-box">
          <div className="contact-icon">📱</div>
          <h3>Telephone number</h3>
          <p>0963 118 7761</p>
        </div>

        <div className="contact-box">
          <div className="contact-icon">🌐</div>
          <h3>Social media</h3>
          <div className="social-icons">
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
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 011.78 1.153 4.92 4.92 0 011.153 1.78c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.153 1.78 4.92 4.92 0 01-1.78 1.153c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 01-1.78-1.153 4.92 4.92 0 01-1.153-1.78c-.163-.457-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 011.153-1.78 4.92 4.92 0 011.78-1.153c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.775.127 4.897.313 4.158.635a6.92 6.92 0 00-2.523 1.645A6.92 6.92 0 00.635 4.158C.313 4.897.127 5.775.07 7.052.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.057 1.277.243 2.155.565 2.894a6.92 6.92 0 001.645 2.523 6.92 6.92 0 002.523 1.645c.739.322 1.617.508 2.894.565C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.277-.057 2.155-.243 2.894-.565a6.92 6.92 0 002.523-1.645 6.92 6.92 0 001.645-2.523c.322-.739.508-1.617.565-2.894.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.057-1.277-.243-2.155-.565-2.894a6.92 6.92 0 00-1.645-2.523A6.92 6.92 0 0019.842.635c-.739-.322-1.617-.508-2.894-.565C15.668.012 15.259 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
