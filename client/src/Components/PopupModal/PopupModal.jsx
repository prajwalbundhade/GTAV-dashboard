import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary red_btn_pop_text" >
          Welcome to Craftify Productions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>
            Craftify Productions: Your Source for Quality GTA V Mod Remakes!
          </strong>
        </p>
        <ul>
          <li>
          We offer high-quality remakes inspired by popular creators like Jelly, Caylus, and more. Please note that we are not the original creators of the mods featured in these videos.
          </li>
          <li>
          Prices vary based on the quality and complexity of each mod. Higher prices reflect higher quality, ensuring a top-notch gaming experience. Our dedicated team of developers is compensated per sale.
          </li>
          <li>
            Need an alternative payment option to PayPal? Contact us at:
            <ul>
              <li className="text-primary red_btn_pop_text">
                Email: contact@craftifyproductions.com
              </li>
              <li className="text-primary red_btn_pop_text">Discord: thunderzlucky</li>
            </ul>
          </li>

          <li>
            <strong>Purchase and Booking Information</strong>
          </li>
          <ul>
            <li>
            <strong>Buy Now</strong>
            </li>
            <li>
            Click Buy Now to be securely redirected to PayPal for payment. After completing your purchase, you will receive a Mega link to download your product.
            </li>
            <li>
            <strong>Book Now</strong>
            </li>
            <li>
            To book a custom GTA V mod, contact us on the platforms listed above with the details of your desired mod.
            </li>
          </ul>
          <li>
            <strong>Encountered a bug or issue?</strong>
          </li>
          <li>Reach out to us, and our support team will work promptly to resolve it!</li>
          <li>Buying mods in bulk? Connect with us via email or Discord for exclusive discounts and benefits.</li>
          <ul>
            <li>
              Contact us on email or Discord with your request for custom mods
              or bulk order discounts.
            </li>
          </ul>
        </ul>
        <p>
        By visiting craftifyproductions.com, you agree to our terms and conditions mentioned on the site.
        </p>
        <p>
        Best Regards,
          <br />
          <strong>Thunderzlucky (Owner)</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
