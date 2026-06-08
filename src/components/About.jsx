import React from "react";
import "./About.css";
import AboutImage from "../assets/aboutImage.jpeg";

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-image">
          <img
            src={AboutImage}
            alt="Manpreet Kaur presenting during an acadamic session"
          />

          <p className="about-caption">
            Delivering a technical presentation during an academic session.
          </p>
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I'm Manpreet Kaur, a B.Tech Computer Science Engineering student and
            frontend developer passionate about building responsive and
            user-friendly web applications.
          </p>

          <p>
            My journey into technology started with curiosity and gradually
            evolved into a strong interest in web development, problem-solving,
            and software engineering. I enjoy transforming ideas into practical
            solutions using React.js, JavaScript, HTML, and CSS.
          </p>

          <p>
            Beyond coding, I have more than four years of teaching and mentoring
            experience, guiding students in their academic journey and helping
            them achieve their goals. This experience strengthened my
            communication, leadership, patience, and problem-solving abilities.
          </p>

          <p>
            Currently pursuing B.Tech in Computer Science Engineering with a
            9.91 CGPA, I am continuously expanding my knowledge in full-stack
            development, cybersecurity, open-source collaboration, and modern
            software development practices.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h4>Education</h4>
              <p>B.Tech Computer Science Engineering</p>
            </div>

            <div className="info-card">
              <h4>Academic Excellence</h4>
              <p>9.91 CGPA</p>
            </div>

            <div className="info-card">
              <h4>Experience</h4>
              <p>4+ Years Teaching & Mentoring</p>
            </div>

            <div className="info-card">
              <h4>Focus</h4>
              <p>Frontend Development & React.js</p>
            </div>

            <div className="info-card">
              <h4>Currently Learning</h4>
              <p>Full-Stack Development & Cybersecurity</p>
            </div>

            <div className="info-card">
              <h4>Goal</h4>
              <p>Software Engineer & Problem Solver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
