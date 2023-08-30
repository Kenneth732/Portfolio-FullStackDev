import React from 'react';
import './Projects.css';
import projectsData from './projectsData';

function Projects() {
  return (
    <div className='container'>
      <div className="projects-containerX">
        <h1 className='sub-title'>Projects</h1>
      </div>

      <div className="grid-card">
        {projectsData.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} className='card-image' />
            <div className="card-content">
              <h2 className='card-title'>{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <a href="#" className="card-link">View More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
