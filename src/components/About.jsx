import React from 'react'
import './About.css'
import profile from '../assets/profile.jpeg'

const About = () => {
  return (
    <section id='about'>
      <div className="container about-container">

        <div className="about-image">
          <img src={profile} alt="Manpreet Kaur" />
        </div>

        <div className="about-content">

          <h2>About Me</h2>

          <p>
            I'm Manpreet Kaur, a Computer Science Engineering student
            and frontend developer who enjoys turning ideas into
            functional, responsive web applications.
          </p>

          <p>
            My journey in technology started with curiosity and has grown
            into a passion for building web experiences using HTML, CSS,
            JavaScript, and React. I enjoy creating clean user interfaces,
            learning modern development practices, and improving my problem-solving
            abilities through hands-on projects.
          </p>

          <p>
            Beyond coding, I have experience teaching and mentoring students,
            which has strengthened my communication, leadership, and teamwork
            skills. These experiences have taught me how to explain complex
            ideas clearly, collaborate effectively, and approach challenges
            with patience and persistence.
          </p>

          <p>
            Currently, I'm expanding my knowledge of modern frontend development,
            full-stack technologies, and software engineering best practices.
            My goal is to become a skilled software developer who builds impactful
            products and contributes to meaningful projects.
          </p>

          <div className="about-info">

            <div className="info-card">
              <h4>Education</h4>
              <p>Computer Science Engineering Student</p>
            </div>

            <div className="info-card">
              <h4>Focus</h4>
              <p>Frontend Development & React</p>
            </div>

            <div className="info-card">
              <h4>Learning</h4>
              <p>TypeScript & Full-Stack Development</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About