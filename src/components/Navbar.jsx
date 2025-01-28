// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import NavLogo from "../images/userAsset/NavLogo.jpg"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container" id="home">
        <img src={NavLogo} className="logo" alt="Logo" />
        <div className="logo-text">ortfoLio.</div>
      </div>
      <div className="nav-items">
        <div><a href="#home">Home</a></div>
        {/* <div><a href="#skills">About</a></div> */}
        <div><a href="#projects">Projects</a></div>
        <div><a href="#skills">Skills</a></div>
        <div><a href="#contactme">Contact Me</a></div>
      </div>
    </div>
  );
};

export default Navbar;