import React from "react";
import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact-container">

        <h2>Let's Connect</h2>

        <p className="contact-description">
          Whether you're looking for a frontend developer, a project
          collaborator, or someone passionate about building meaningful
          software, I'd love to connect. Feel free to reach out through any
          of the platforms below.
        </p>

        <p className="contact-email">
          manpreetkaur292006@gmail.com
        </p>

        <div className="contact-links">

          <a
            href="mailto:manpreetkaur292006@gmail.com"
            className="contact-btn"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/manpreetkaur-mk29"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/manpreetkaur292006-design"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="YOUR_LEETCODE_LINK"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <SiLeetcode />
            LeetCode
          </a>

          <a
            href="/Manpreet_Kaur.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-btn resume-contact"
          >
            <FaFilePdf />
            Resume
          </a>

        </div>

        <p className="contact-note">
          Currently seeking internship, freelance, and collaboration
          opportunities.
        </p>

      </div>
    </section>
  );
};

export default Contact;