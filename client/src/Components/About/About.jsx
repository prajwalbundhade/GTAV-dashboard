import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
// import Heres_Johnny from "../../images/Heres_Johnny.jpg";
// import Techy_Crew from "../../images/Techy_Crew.jpg";
// import Awita_Dos from "../../images/Awita_Dos.jpg";
// import Talcado_Roblox from "../../images/Talcado_Roblox.jpg";
// import Power_Suhaib from "../../images/Power_Suhaib.jpg";
// import Acenix from "../../images/Acenix.jpg";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="about-card" style={{ backgroundColor: "#444" }}>
              <Card.Body>
                <Card.Title className="about-title">About Us</Card.Title>
                <Card.Text className="about-text">
                  Craftify Productions is your ultimate destination for premium
                  GTA V mods and custom services designed specifically for
                  content creators and YouTubers. We offer top-quality mods at
                  unbeatable prices, alongside custom services like character
                  design and script writing, all aimed at elevating your gaming
                  experience.
                  <br /> <br />
                  Led by ThunderzLucky, Craftify Productions draws inspiration
                  from top gaming creators, crafting innovative mods and plugins
                  that push the boundaries of creativity and gameplay.
                  <br /> <br /> Join us as we continue to expand and innovate,
                  bringing you the best in GTA V gaming. Got questions or need
                  assistance? Feel free to reach out anytime – we’re here to
                  help you unleash your creativity and take your gaming to new
                  heights.
                  <br />
                </Card.Text>
                <div className="about-buttons">
                  <Link to="/contact">
                    <Button variant="primary">Contact Us</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h2 className="text-center mb-4" style={{ color: "#007bff" }}>
              Our Clients
            </h2>
            <Row>
              <ClientItem
                image={Heres_Johnny}
                name="Johnny Minecraf"
                subscribers={" 3.82MM+"}
              />
              <ClientItem
                image={Techy_Crew}
                name="Techy Crew"
                subscribers={" 140K+"}
              />
              <ClientItem
                image={Awita_Dos}
                name="Awita Dos"
                subscribers={" 710k+"}
              />
              <ClientItem
                image={Talcado_Roblox}
                name="Awita Dos"
                subscribers={" 140k+"}
              />
              <ClientItem
                image={Power_Suhaib}
                name="Awita Dos"
                subscribers={" 7.28M+"}
              />
              <ClientItem
                image={Acenix}
                name="Awita Dos"
                subscribers={" 16M+"}
              />
            </Row>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

// const ClientItem = ({ image, name, subscribers }) => {
//   return (
//     <Col md={4} className="mb-4">
//       <Card className="client-card">
//         <Card.Img variant="top" src={image} />
//         <Card.Body>
//           <Card.Title className="text-center">{name}</Card.Title>
//           <Card.Text className="text-center">
//             Subscribers: {subscribers}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// const PartnerItem = ({ image, name, subscribers }) => {
//   return (
//     <Col md={4} className="mb-4">
//       <Card className="client-card">
//         <Card.Img variant="top" src={image} />
//         <Card.Body>
//           <Card.Title className="text-center">{name}</Card.Title>
//           <Card.Text className="text-center">
//             Subscribers: {subscribers}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

export default About;
