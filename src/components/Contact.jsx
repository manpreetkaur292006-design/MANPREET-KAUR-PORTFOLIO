import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container contact-container">

        <h2>Contact Me</h2>

        <p>
          I'm always open to discussing new opportunities,
          collaborations, and interesting projects.
        </p>

        <div className="contact-links">

          <a
            href="mailto:manpreetkaur292006@gmail.com"
            className="contact-btn"
          >
            Email
          </a>

          <a
            href="https://github.com/manpreetkaur292006-design"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/manpreetkaur-mk29"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>

          <a
            href="/Manpreet_Kaur.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-btn resume-contact"
          >
            Resume
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact