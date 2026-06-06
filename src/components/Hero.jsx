import React from 'react'
import './Hero.css'
import profile from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="container hero-container">
        <div className="hero-content">
          <p className='hero-greeting'>Hello, I'm</p>

          <h1 className='hero-name'>Manpreet Kaur</h1>

          <h2 className="hero-role">
            Frontend Developer | React Developer | Computer Science Student
          </h2>

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
        </div>

        <div className="hero-image">
            <img src={profile} alt="Manpreet Kaur" />
        </div>
      </div>
    </section>
  )
}

export default Hero