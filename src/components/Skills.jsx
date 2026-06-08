import React from "react";
import "./Skills.css";

const skillsData = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "React Router",
    "Responsive Design",
    "REST APIs"
  ],

  programming: [
    "Python",
    "SQL"
  ],

  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Linux",
    "Netlify"
  ],

  design: [
    "Figma",
    "Canva",
    "Miro"
  ],

  openSource: [
    "Open Source Contributions",
    "Pull Requests",
    "Github Collaboration"
  ],

  learning: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Cybersecurity Fundamentals"
  ]
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="container skills-container">

        <h2>Skills & Technologies</h2>

        <div className="skills-category">
          <h3>Frontend Technologies</h3>
          <div className="skills-list">
            {skillsData.frontend.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Programming</h3>
          <div className="skills-list">
            {skillsData.programming.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Developer Tools</h3>
          <div className="skills-list">
            {skillsData.tools.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Design & Collaboration</h3>
          <div className="skills-list">
            {skillsData.design.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Open Source</h3>
          <div className="skills-list">
            {skillsData.openSource.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Currently Learning</h3>
          <div className="skills-list">
            {skillsData.learning.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;