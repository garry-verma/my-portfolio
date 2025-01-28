
import React from 'react';
import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-faded-text">Abhay Verma</div>
          <div className="link-wrapper">
            <div><a href="#home">Home</a></div>
            {/* <div><a href="#skills">About</a></div> */}
            <div><a href="#projects">Projects</a></div>
            <div><a href="#skills">Skills</a></div>
            <div><a href="#contactme">Contact Me</a></div>
          </div>
          <div className="icon-wrapper">
            <a href="https://in.linkedin.com/in/abhay-verma-6b8b34281" target="_blank" rel="noopener noreferrer" ><FaLinkedin fill="white" classname="footer-logo"/></a>
            <a href="https://github.com/garry-verma" target="_blank" rel="noopener noreferrer" ><FaGithub fill="white" classname="footer-logo"/></a>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;