import React, { useState } from 'react';
import { Card, Button, Badge, Modal, Table } from 'react-bootstrap';
import './DarkCard.css';

const DarkCard = ({ data }) => {
  const { ytLink, title, category, state, imagePath, description, buyNow, price, bookNow } = data;

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleBookNow = () => {
    setShowModal(true);
  };

  const getStateBadge = (state) => {
    switch (state) {
      case 'Mod':
        return <Badge bg="success">Mod</Badge>;
      case 'Plugin':
        return <Badge bg="warning">Plugin</Badge>;
      case 'Datapack':
        return <Badge bg="info">Datapack</Badge>;
      case 'Package':
        return <Badge bg="success">Package</Badge>;
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="bg-dark text-white mb-3 cardStyle">
        <a href={ytLink} target="_blank" rel="noopener noreferrer">
          <Card.Img className='CardImg' variant="top" src={imagePath} alt={`${title} image`} />
          {/* Positioning the badge on top-left */}
          <div className="badge-container">
            {getStateBadge(state)}
          </div>
        </a>
        <Card.Body>
          <Card.Title className="card-title">
            {title}
          </Card.Title>
          <Card.Text className='desc'>{description}</Card.Text>
          {price && <span className="tag">Price: {price} </span>}
          {buyNow && (
            <a href={buyNow} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className='buybutton'>Buy Now</Button>
            </a>
          )}

          {bookNow && (
            <Button variant="warning" className='bookbutton' onClick={handleBookNow}>Buy Now</Button>
          )}
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Follow these steps to book this product:</p>
          <Table bordered>
            <tbody>
              <tr>
                <td>1)</td>
                <td>Select the mod which you are interested in buying.</td>
              </tr>
              <tr>
                <td>2)</td>
                <td>
                  If its available for book now, you have to contact me here:
                  <ul>
                    <li>Email - <a href="mailto:contact@craftifyproductions.com">contact@craftifyproductions.com</a></li>
                    <li>Email - <a href="mailto:techthunderz443@gmail.com">techthunderz443@gmail.com</a></li>
                    <li>Discord - thunderzlucky</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>3)</td>
                <td>Here you have to message me regarding this mod that you are interested in buying.</td>
              </tr>
              <tr>
                <td>4)</td>
                <td>
                  I will send an invoice, and once you pay, you will receive the mod in 24-48 Hours.
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DarkCard;
