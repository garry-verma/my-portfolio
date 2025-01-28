// src/components/Projects.jsx
import React from 'react';
import './Projects.css';
import htmllogo from '../images/stack/HTML.png'
import pythonlogo from "../images/stack/python-3.svg"
import reactlogo from "../images/stack/React.png"
import mongodblogo from "../images/stack/MongoDB.svg"
import nodelogo from "../images/stack/NodeJs.svg"
import project01 from "../images/projects/Project1.jpg"
import project02 from "../images/projects/Project2.jpg"

const Projects = () => {
  const projects = [
    {
      id: 'project1',
      number: '01',
      title: 'Study Notion',
      description: 'It is an ed-tech platform that enables users to create and consume educational content. It uses MERN Stack.',
      skills: [htmllogo,reactlogo,nodelogo,mongodblogo],
      image: project01,
      github: '',
      live: '',
    },
    {
      id: 'project2',
      number: '02',
      title: 'Recommender System (Movies)',
      description: 'This project is based on machine learning model which recommend you a list of movies on the basis of your input',
      skills: [pythonlogo],
      image: project02,
      github: 'https://github.com/Indra-S/Discord-Clone',
      live: '',
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-section" id="projects">
      <h2 className="page-header">Projects</h2>
      <div className="project-container" >
        {projects.map((project) => (
          <div className="project-card" id={project.id} key={project.id} style={{ backgroundImage: `url(${project.image})` }}>
            <div className={`project-number project-number-${project.number % 2 === 0 ? 'left' : 'right'}`}>{project.number}</div>
            <div className={`project-content project-content-${project.number % 2 === 0 ? 'right' : 'left'}`}>
              <div className="project-skills-container">
                {project.skills.map((skill, index) => (
                  <img key={index} className="project-skill" src={skill} alt="" />
                ))}
              </div>
              <h2 className="project-heading">{project.title}</h2>
              <p className="project-subHeading">{project.description}</p>
              {/* <div className="btn-grp">
                <a href={project.github}>
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href={project.live}>
                  <i title="Live Link" className="fa-solid fa-link icon"></i>
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;