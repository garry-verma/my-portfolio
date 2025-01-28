// Skill.js
import React from "react";
import htmllogo from "../images/stack/HTML.png"
import csslogo from "../images/stack/CSS.png"
import javascriptlogo from "../images/stack/Javascript.svg"
import reactlogo from "../images/stack/React.png"
import nodelogo from "../images/stack/NodeJs.svg"
import pythonlogo from "../images/stack/python-3.svg"
import sqllogo from "../images/stack/mysql-4.svg"
import tailwindlogo from "../images/stack/Tailwind.png"
import expresslogo from "../images/stack/Express.png"
import gitlogo from "../images/stack/Git.svg"
import githublogo from "../images/stack/Github.svg"
import mongodblogo from "../images/stack/MongoDB.svg"
import vercellogo from "../images/stack/Vercel.svg"
import blobvector from "../images/userAsset/blob vector.png"


const Skill = () => {
  return (
    <div id="skills" className="container skills-container">
      <div className="skill-fade-text">Skills</div>

      <div className="skill-container-left">
        <h2 className="skill-heading">
          <span className="caps">M</span>y
          
          Tech Stack
        </h2>

        <div className="skill-subHeading">
          <p>
            I am a highly motivated <strong>Computer Science & Engineering</strong> student with a passion for technology and its application in solving real-world problems. Goal is to work with an organization where I can learn new skills and increase my abilities for the organizational goals as well as myself.
          </p>
          {/* <p>
            As a tech enthusiast, I'm currently exploring in <strong>Software Development, Full Stack Development</strong> & pursuing<strong>B.Tech</strong>  from Jai Parkash Mukand Lal Innovative Egineering and Technology Institute and love exploring new technologies.
          </p> */}
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MERN Stack</li>
            
            <li>SQl</li>

          </ul>
        </div>
      </div>

      <div className="skill-container-right">
        <img src={blobvector} className="blob-style" alt="" />
        <img src={pythonlogo} alt="" className="skills-logo" />
        <img src={htmllogo} alt="" className="skills-logo" />
        <img src={csslogo} alt="" className="skills-logo" />
        <img src={javascriptlogo} alt="" className="skills-logo" />
        <img src={reactlogo} alt="" className="skills-logo" />
        <img src={nodelogo} alt="" className="skills-logo" />
        <img src={tailwindlogo} alt="" className="skills-logo" />
        <img src={expresslogo} alt="" className="skills-logo" />
        <img src={sqllogo} alt="" className="skills-logo" />
        <img src={gitlogo} alt="" className="skills-logo" />
        <img src={githublogo} alt="" className="skills-logo" />
        <img src={mongodblogo} alt="" className="skills-logo" />
        <img src={vercellogo} alt="" className="skills-logo" />

      </div>
    </div>
  );
};

export default Skill;
