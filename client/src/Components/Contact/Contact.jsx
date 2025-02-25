import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  return (
    <div className=" text-light" style={{minHeight: '100vh',backgroundColor: "#222" }}>
      <Container >
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h1 className="display-4 mb-4">Get in Touch</h1>
            <p className="lead">
              Thank you for dropping by Craftify Productions! Whether you have questions,
              feedback, or need assistance with our mods or plugins, we're here to help.
              Additionally, if you're interested in collaborating with us or exploring
              our custom services, don't hesitate to reach out.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Card className="text-light shadow-lg" style={{backgroundColor:"#222"}}>
              <Card.Header className="text-center">
                <h2>Contact Information</h2>
              </Card.Header>
              <Card.Body>
                <div className="mb-4 contact-page">
                  <h5>Email</h5>
                  <p>
                    General Inquiries: <a href="mailto:contact@craftifyproductions.com" className="text-info">contact@craftifyproductions.com</a><br />
                    Technical Support: <a href="mailto:techthunderz443@gmail.com" className="text-info">techthunderz443@gmail.com</a>
                  </p>
                </div>
                <div className="mt-4">
                  <h5>Discord</h5>
                  <p>
                    Connect with us on Discord - <span className="text-info disss">thunderzlucky</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
