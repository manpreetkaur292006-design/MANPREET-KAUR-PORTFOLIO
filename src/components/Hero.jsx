import React from 'react'
import './Hero.css'
import profile from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="container hero-container">

        <div className="hero-content">

          <p className='hero-greeting'>Hello, I'm</p>

          <h1 className='hero-name'>
            Manpreet <span>Kaur</span>
          </h1>

          <h2 className="hero-role">
            Frontend Developer | React Developer | Computer Science Student
          </h2>

          <p className="hero-learning">
            Currently Learning: TypeScript • Full-Stack Development
          </p>

          <p className="hero-description">
            I build responsive web application using React, JavaScript,
            HTML, and CSS while continuously learning modern technologies
            and creating meaningful digital experience.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="/Manpreet_Kaur.pdf" download className="secondary-btn">
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/manpreetkaur292006-design"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/manpreetkaur-mk29"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:manpreetkaur292006@gmail.com">
              Email
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h3>React</h3>
              <p>Frontend</p>
            </div>

            <div className="stat">
              <h3>Open</h3>
              <p>To Opportunities</p>
            </div>
          </div>

        </div>

        <div className="hero-image">
          <img src={profile} alt="Manpreet Kaur" />
        </div>

      </div>
    </section>
  )
}

export default Hero