import React from 'react'
import './Projects.css'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section id='projects'>
      <div className="container projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project)=>(
            <div className="project-cards" key={project.id}>
              <img src={project.image} alt={project.title} className='project-image' />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((item,index)=>(
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a href={project.github} target='_blank' rel='noreferrer'>Github</a>
                <a href={project.live} target="_blank" rel='noreferrer'>Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects