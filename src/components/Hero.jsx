// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import dots from "../images/userAsset/dots.png"
import cube from "../images/userAsset/cube.png"
import circle from "../images/userAsset/circle.png"
import zigzags from "../images/userAsset/zigzags.png"
import plus from "../images/userAsset/plus.png"
import profile from "../images/userAsset/profile.png"
import Typer from "./Typer"
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="faded-text">Abhay Verma</div>
      <div className="hero-section-left">
        <div className="hero-section-heading">Hi! My Name is <br /> <div className="name">Abhay Verma</div></div>
        <div className="hero-section-heading hero-section-sub-heading">
          I am a <span className="role"><Typer/></span>
        </div>
        <div className="hero-section-description">
          I’m an Aspiring Software Developer and here is my portfolio website. Here you’ll learn about my journey.
        </div>
        <a href="https://drive.google.com/file/d/14usY8zjIQaqrYUVsTn6PGJDdGGm_nR9I/view?usp=sharing">
          <div className="btn-pink" id="btn">Check My Resume</div>
        </a>
      </div>
      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src={dots} alt="" />
        </div>
        <div className="absolute icons icon-cube">
          <img src={cube} alt="" />
        </div>
        <div className="absolute icons icon-circle">
          <img src={circle} alt="" />
        </div>
        <div className="absolute icons icon-zigzag">
          <img src={zigzags} alt="" />
        </div>
        <div className="absolute icons icon-plus">
          <img src={plus} alt="" />
        </div>
        <div className="user-image">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;