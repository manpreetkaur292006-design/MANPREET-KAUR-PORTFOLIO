import React from "react";
import "./Achievements.css";

const achievements = [
  {
    icon: "🏆",
    title: "Academic Excellence",
    description: "Maintaining a 9.91 CGPA in B.Tech Computer Science Engineering."
  },

  {
    icon: "🥉",
    title: "Class XII Achievement",
    description: "Secured Overall 3rd Position with 91.6% in CBSE Class XII."
  },

  {
    icon: "🥉",
    title: "Class X Achievement",
    description: "Secured Overall 3rd Position with 93.69% in PSEB Class X."
  },

  {
    icon: "👩‍🏫",
    title: "Teaching & Mentoring",
    description: "4+ years of experience mentoring students and supporting academic success."
  },

  {
    icon: "🎯",
    title: "Student Success",
    description: "Mentored 18+ students with a 100% pass rate and multiple top rankers."
  },

  {
    icon: "💻",
    title: "Open Source Journey",
    description: "Contributed to GitHub projects through pull requests and collaborative development."
  },

  {
    icon: "🚀",
    title: "Project Deployment",
    description: "Successfully built and deployed Focus Bee using React.js and Netlify."
  },

  {
    icon: "🎤",
    title: "Technical Presentations",
    description: "Presented technical topics and actively participated in academic and club events."
  }
];

const certifications = [
  "Git & GitHub Certification – Simplilearn",
  "SQL Certification – Simplilearn",
  "Artificial Intelligence Workshop – EduNovas"
];

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="container achievements-container">

        <h2>Achievements & Certifications</h2>

        <p className="achievements-subtitle">
          Academic achievements, leadership experiences, certifications,
          and milestones that reflect my continuous learning journey.
        </p>

        {/* Stats */}

        <div className="achievement-stats">

          <div className="stat-card">
            <h3>9.91</h3>
            <p>CGPA</p>
          </div>

          <div className="stat-card">
            <h3>18+</h3>
            <p>Students Mentored</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Pass Rate</p>
          </div>

          <div className="stat-card">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>

        </div>

        {/* Achievement Cards */}

        <div className="achievements-grid">

          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>

              <div className="achievement-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

        {/* Certifications */}

        <div className="certifications-section">

          <h3>Certifications</h3>

          <div className="certifications-list">

            {certifications.map((cert, index) => (
              <span key={index} className="certificate-badge">
                📜 {cert}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;