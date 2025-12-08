import React, { useState, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact2.css";
import emailjs from '@emailjs/browser'; 
const ContactForm = () => {
  const form = useRef(); 
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState(""); 


  const currentTime = new Date().toLocaleString();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;


    if (formElement.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return; 
    }

    setValidated(true);
    setStatus("Sending...");

 
    emailjs.sendForm(
      'service_zfvi2el',   
      'template_eyaj6of',  
      form.current,        
      'xJNX1R9222yfGnw1O'  
    )
    .then((result) => {
        console.log("SUCCESS!", result.text);
        setStatus("Message Sent Successfully!");
        formElement.reset(); 
        setValidated(false); 
    }, (error) => {
        console.error("FAILED...", error);
        setStatus("Failed to send. Please try again.");
    });
  };

  return (
    <Form
      ref={form} 
      className="contact-form"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >

      <input type="hidden" name="title" value="New Portfolio Inquiry" />
      <input type="hidden" name="time" value={currentTime} />

      <Form.Group className="mb-4">
   
        <Form.Control 
          type="text" 
          name="name" 
          placeholder="Enter Name" 
          className="glass-input" 
          required 
        />
        <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">

        <Form.Control 
          type="email" 
          name="email" 
          placeholder="Enter Email" 
          className="glass-input" 
          required 
        />
        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">

        <Form.Control 
          as="textarea" 
          name="message"
          rows={4} 
          placeholder="Enter Message" 
          className="glass-input" 
          required 
        />
        <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
      </Form.Group>
      
      <div className="text-end">
        <Button type="submit" className="contact-btn">
          Send Message ➜
        </Button>
      </div>

   
      {status && (
        <div className="mt-3 text-center" style={{ 
          color: status.includes("Failed") ? "#ff6b6b" : "#51cf66", 
          fontWeight: "bold" 
        }}>
          {status}
        </div>
      )}
    </Form>
  );
};

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-center justify-content-center">
        
          <Col lg={6} className="mb-5 mb-lg-0 text-center">
            <div className="contact-image-wrapper">
              <img
                src="https://cdn.easyfrontend.com/pictures/contact/contact_1.png"
                alt="Contact Visual"
                className="img-fluid contact-banner"
              />
            </div>
          </Col>


          <Col lg={5} className="offset-lg-1">
            <div className="contact-card">
              <div className="mb-4">
                <h2 className="contact-heading">Get in Touch</h2>
                <p className="contact-sub-heading">
                  Have a project in mind? Let's build something amazing together.
                </p>
              </div>
              <ContactForm />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;