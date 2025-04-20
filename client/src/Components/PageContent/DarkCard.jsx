import { useState } from "react";
import PropTypes from 'prop-types';
import { Card, Button, Badge, Modal, Table, Carousel } from "react-bootstrap";
import "./DarkCard.css";
import nextIcon from "../../images/rightIcon.png";
import prevIcon from "../../images/prevIcon.png";

const DarkCard = ({ data }) => {
  const { title, state, mediaContent, description, buyNow, price, bookNow, newbuynow } = data;
  const [showBookModal, setShowBookModal] = useState(false);
  const [showNewBuyNowModal, setShowNewBuyNowModal] = useState(false);

  const handleModalClose = () => {
    setShowBookModal(false);
    setShowNewBuyNowModal(false);
  };

  const handleBookNow = () => {
    setShowBookModal(true);
  };

  const handleNewBuyNow = () => {
    setShowNewBuyNowModal(true);
  };

  const getStateBadge = (state) => {
    switch (state) {
      case "Mod":
        return <Badge bg="success">Mod</Badge>;
      case "Plugin":
        return <Badge bg="warning">Plugin</Badge>;
      case "Datapack":
        return <Badge bg="info">Datapack</Badge>;
      case "Package":
        return <Badge bg="success">Package</Badge>;
      default:
        return null;
    }
  };

  const getVideoLabel = (media) => {
    if (!media.ytLink) return null;
    if (media.isRealVideo) return "Real Video";
    if (media.isRefVideo) return "Ref. Video";
    return null;
  };

  return (
    <>
      <Card className="text-white mb-3 cardStyle">
        <div className="image-carousel-container">
          {mediaContent && mediaContent.length > 1 ? (
            <Carousel
              indicators={true}
              controls={true}
              prevIcon={
                <img
                  src={prevIcon}
                  alt="Previous"
                  className="custom-carousel-icon"
                />
              }
              nextIcon={
                <img
                  src={nextIcon}
                  alt="Next"
                  className="custom-carousel-icon"
                />
              }
            >
              {mediaContent.map((media, index) => (
                <Carousel.Item key={index}>
                  <div className="image-container">
                    {media.ytLink ? (
                      <a href={media.ytLink} target="_blank" rel="noopener noreferrer">
                        <Card.Img
                          className="CardImg"
                          variant="top"
                          src={media.imageUrl}
                          alt={`${title} image`}
                        />
                        {getVideoLabel(media) && (
                          <div className="video-label">{getVideoLabel(media)}</div>
                        )}
                      </a>
                    ) : (
                      <Card.Img
                        className="CardImg"
                        variant="top"
                        src={media.imageUrl}
                        alt={`${title} image`}
                      />
                    )}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : mediaContent && mediaContent.length === 1 ? (
            <div className="image-container">
              {mediaContent[0].ytLink ? (
                <a href={mediaContent[0].ytLink} target="_blank" rel="noopener noreferrer">
                  <Card.Img
                    className="CardImg"
                    variant="top"
                    src={mediaContent[0].imageUrl}
                    alt={`${title} image`}
                  />
                  {getVideoLabel(mediaContent[0]) && (
                    <div className="video-label">{getVideoLabel(mediaContent[0])}</div>
                  )}
                </a>
              ) : (
                <Card.Img
                  className="CardImg"
                  variant="top"
                  src={mediaContent[0].imageUrl}
                  alt={`${title} image`}
                />
              )}
            </div>
          ) : null}
        </div>

        {/* Positioning the badge on top-left */}
        <div className="badge-container">{getStateBadge(state)}</div>

        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="desc">{description}</Card.Text>
          {price && <span className="tag">Price: {price} </span>}
          {buyNow && (
            <a href={buyNow} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="buybutton">
                Buy Now
              </Button>
            </a>
          )}

          {bookNow && (
            <Button
              variant="warning"
              className="bookbutton"
              onClick={handleNewBuyNow}
            >
              Book Now
            </Button>
          )}

          {newbuynow && (
            <Button className="newbuybutton" onClick={handleBookNow}>
              Buy Now
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Modal for Booking */}
      <Modal show={showBookModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Buy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Follow these steps to buy this product:</p>
          <Table bordered>
            <tbody>
              <tr>
                <td>1)</td>
                <td>This mod needs customization according to your skin.</td>
              </tr>
              <tr>
                <td>2)</td>
                <td>
                  This mod is completed, you have to contact me here:
                  <ul>
                    <li>
                      Email -{" "}
                      <a href="mailto:contact@craftifyproductions.com">
                        contact@craftifyproductions.com
                      </a>
                    </li>
                    <li>
                      Email -{" "}
                      <a href="mailto:techthunderz443@gmail.com">
                        techthunderz443@gmail.com
                      </a>
                    </li>
                    <li>Discord - thunderzlucky</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>3)</td>
                <td>
                  Here you have to send me your skin and the players who will be
                  playing the mod.
                </td>
              </tr>
              <tr>
                <td>4)</td>
                <td>
                  I will send an invoice, and once you pay, you will receive the
                  mod in 24-48 Hours.
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

      {/* Modal for New Buy Now */}
      <Modal show={showNewBuyNowModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Book Mods</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            These mods are <strong>under development</strong> and can be{" "}
            <strong>booked in advance</strong> for your region.
          </p>
          <p>📩 To book, contact me:</p>
          <ul>
            <li>
              Email –{" "}
              <a href="mailto:contact@craftifyproductions.com">
                contact@craftifyproductions.com
              </a>
            </li>
            <li>
              Email –{" "}
              <a href="mailto:techthunderz443@gmail.com">
                techthunderz443@gmail.com
              </a>
            </li>
            <li>💬 Discord – thunderzlucky</li>
          </ul>
          <p>
            Once the mod is complete, you will receive it within{" "}
            <strong>24-48 hours</strong> after payment.
          </p>
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

DarkCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    state: PropTypes.string,
    mediaContent: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        ytLink: PropTypes.string,
        isRealVideo: PropTypes.bool,
        isRefVideo: PropTypes.bool
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
    buyNow: PropTypes.string,
    price: PropTypes.string,
    bookNow: PropTypes.bool,
    newbuynow: PropTypes.bool,
  }).isRequired,
};

export default DarkCard;
