import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container navbar-container">

        <a href="#hero" className="logo">
          MK
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          href="/Manpreet_Kaur.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

      </div>
    </nav>
  );
};

export default Navbar;