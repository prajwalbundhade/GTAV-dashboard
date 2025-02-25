import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button } from "react-bootstrap";
import redbtn from '../../images/red-button.png';
import discord from '../../images/discord.png';
import twitter from '../../images/twitter.png';
import gmail from '../../images/gmail.png';
import ytjobs from '../../images/ytjobs.png';
import among_us_logo from '../../images/among_us_logo.png';
import craftifyproductions from '../../../public/minecraft_logo.png';
import './TopBar.css';
import logo from '../../../public/logo.png';
import RedButtonModal from '../PopupModal/RedButtonModal';



const TopBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const copyDiscordID = () => {
    const discordID = 'thunderzlucky';
    navigator.clipboard.writeText(discordID).then(() => {
      alert('Discord ID copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="topBar d-flex flex-column align-items-center text-center py-4">
      <div className="title mb-3">
        <img src={logo} className="logo" alt="Craftify Productions Logo" />
        Craftify Productions
      </div>
      <div className="justify-content-center" id="navbarNav">
        <ul className="d-flex navbarCustom" style={{ listStyle: "none", color: "#787878" }}>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/terms">Terms and Conditions</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/contact">Contact us</Link>
          </li>
          <li className="nav-item p-3">
            <a href="https://craftifyproductions.com/"  className="nav-link"><img className="update-button" src={craftifyproductions} alt="craftifyproductions" /></a>
          </li>
          <li className="nav-item p-3">
            <a href="https://amongus.craftifyproductions.com/"  className="nav-link"><img className="update-button" src={among_us_logo} alt="among_us_logo" /></a>
          </li>
        
        </ul>
      </div>
      {/* social icon starts here */}
      <div className="socials d-flex justify-content-center align-items-center">
        <div className="icon mx-2">
          <div onClick={copyDiscordID} style={{ cursor: 'pointer' }}>
            <img src={discord} alt="Discord" />
          </div>
        </div>
        <div className="icon mx-2">
          <a href="https://x.com/CraftifyProd" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        <div className="icon mx-2">
          <a href="mailto:contact@craftifyproductions.com">
            <img src={gmail} alt="Gmail" />
          </a>
        </div>
        <div className="icon mx-2">
          <a href="https://ytjobs.co/@Craftifyproductions">
            <img src={ytjobs} alt="ytjobs" />
          </a>
        </div>
        <div className="icon mx-2">
        <a href="#" className="nav-link red-button" onClick={handleShow}>
            <img src={redbtn} alt="red_btn" />
          </a>
        </div>
      </div>
      <RedButtonModal show={show} handleClose={handleClose} />
      <div className="mt-5">
      <Link to="/contact">
      <Button variant="primary" className="custom_order_button">Order Custom Mod</Button>
      </Link>
      </div>
    </div>
  );
}

export default TopBar;
