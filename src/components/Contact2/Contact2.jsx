import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact2.css";

// Optional: You can replace this image with one of your 3D assets later
import contactImage from "../../assets/dabree.jpg"; // Using a placeholder for now

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form
      className="contact-form"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-4">
        <Form.Control type="text" placeholder="Enter Name" className="glass-input" />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control type="email" placeholder="Enter Email" className="glass-input" />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control 
          as="textarea" 
          rows={4} 
          placeholder="Enter Message" 
          className="glass-input" 
        />
      </Form.Group>
      
      <div className="text-end">
        <Button type="submit" className="contact-btn">
          Send Message ➜
        </Button>
      </div>
    </Form>
  );
};

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          
          {/* Left Side: Image/Visual */}
          <Col lg={6} className="mb-5 mb-lg-0 text-center">
            <div className="contact-image-wrapper">
              <img
                /* You can change this src to one of your 3D assets or keep this placeholder */
                src="https://cdn.easyfrontend.com/pictures/contact/contact_1.png"
                alt="Contact Visual"
                className="img-fluid contact-banner"
              />
            </div>
          </Col>

          {/* Right Side: Glass Form */}
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