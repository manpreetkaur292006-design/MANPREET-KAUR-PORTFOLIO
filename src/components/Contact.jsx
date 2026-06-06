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
          <a href="mailto:manpreetkaur292006@gmail.com">Email</a>
          <a href="https://github.com/manpreetkaur292006-design">GitHub</a>
          <a href="https://www.linkedin.com/in/manpreetkaur-mk29">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact