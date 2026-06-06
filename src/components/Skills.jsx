import React from "react";
import "./Skills.css";

const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "React Router"],
  programming: ["Python", "SQL"],
  tools: ["Git", "GitHub", "VS Code", "Linux", "Netlify"],
  design: ["Figma", "Miro", "Canva"],
  productivity: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  learning: ["Full-Stack Development"]
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="container skills-container">
        <h2>Skills</h2>

        <div className="skills-category">
          <h3>Frontend Development</h3>
          <div className="skills-list">
            {skillsData.frontend.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            {skillsData.programming.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools & Platforms</h3>
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
          <h3>Productivity Tools</h3>
          <div className="skills-list">
            {skillsData.productivity.map((skill) => (
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
