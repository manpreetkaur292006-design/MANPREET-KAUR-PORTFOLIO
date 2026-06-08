import React from "react";
import "./Hero.css";
import profile from "../assets/profile.jpeg";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            Manpreet <span>Kaur</span>
          </h1>

          <h2 className="hero-role">
            Frontend Developer | React.js Developer | B.Tech CSE Student
          </h2>

          <p className="hero-learning">
            Currently Exploring: Full-Stack Development & Cybersecurity
          </p>

          <p className="hero-description">
            I build responsive and user-friendly web applications using
            React.js, JavaScript, HTML, and CSS. Currently pursuing B.Tech in
            Computer Science Engineering with a 9.91 CGPA while expanding my
            skills in full-stack development, cybersecurity, and real-world
            software projects.
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
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/manpreetkaur-mk29"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Manpreet_Kaur29"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode /> LeetCode
            </a>

            <a href="mailto:manpreetkaur292006@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat">
              <h3>9.91</h3>
              <p>CGPA</p>
            </div>

            <div className="stat">
              <h3>18+</h3>
              <p>Students Mentored</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Manpreet Kaur" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
