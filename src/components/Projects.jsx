import React from "react";
import "./Projects.css";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container projects-container">

        <h2>Featured Projects</h2>

        <p className="projects-subtitle">
          A selection of projects showcasing my skills in React,
          JavaScript, API integration, responsive web development,
          and problem-solving through real-world applications.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.id}>

              {project.featured && (
                <span className="featured-badge">
                  ⭐ Featured Project
                </span>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;