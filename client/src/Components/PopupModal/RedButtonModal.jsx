import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RedButtonModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Custom Mods and Packages</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Craftify Productions: GTA V Mods & Maps Remakes!</strong>
        </p>
        <ul>
          <li>
          We offer high-quality remakes inspired by top creators like Jelly, Caylus, and more. While we are not the original creators of these mods and maps, we collaborate with the original developers and have their permission to resell them.
          </li>
          <li>
          Our pricing reflects the premium quality of each mod, and our developers are compensated per sale.
          </li>
          <li>
          Need an alternative payment option to PayPal? Reach out to us:
            <ul >
              <li className="text-primary red_btn_pop_text">
                Email: contact@craftifyproductions.com
              </li>
              <li className="text-primary red_btn_pop_text">Discord: thunderzlucky</li>
            </ul>
          </li>

          <li>
            <strong>Booking & Bulk Orders</strong>
          </li>
          <ul>
            <li>
            For custom GTA V mods or bulk order discounts, contact us via email or Discord.
            </li>
            <li>
            <a href="https://gtav.craftifyproductions.com/contact" className="red_btn_pop_text">Contact Us</a>
            </li>
          </ul>
        </ul>
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

export default RedButtonModal;
