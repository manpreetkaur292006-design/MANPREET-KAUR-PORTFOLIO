import FocusBee from "../assets/projects/FocusBee.png";
import EventDashBoard from "../assets/projects/EventDashBoard.png";
import Weather from "../assets/projects/Weather.png";
import ScoreBoard from "../assets/projects/ScoreBoard.png";
import decorUrvora from "../assets/projects/decorUrvora.png";

const projects = [
  {
    id: 1,
    featured: true,
    title: "Focus Bee",
    description:
      "A React-based productivity application that helps users manage tasks, stay organized, and improve focus through an intuitive and responsive user interface.",
    tech: ["React", "JavaScript", "HTML", "CSS", "React Router"],
    github: "https://github.com/manpreetkaur292006-design/Focus-Bee.git",
    live: "https://focusbee.netlify.app/",
    image: FocusBee,
  },

  {
    id: 2,
    title: "Smart Event Dashboard",
    description:
      "A responsive event management dashboard built with JavaScript that enables users to organize events, track details, and manage event-related information efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/manpreetkaur292006-design/SMART-EVENT-DASHBOARD-JS.git",
    live: "https://inspiring-pika-f419eb.netlify.app/",
    image: EventDashBoard,
  },

  {
    id: 3,
    title: "Weather Tracker",
    description:
      "A weather application that integrates real-time weather APIs to display current weather conditions, demonstrating asynchronous JavaScript and API integration.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github:
      "https://github.com/manpreetkaur292006-design/ASYNC-WEATHER-TRACKER.git",
    live: "https://manu-weather-api.netlify.app/",
    image: Weather,
  },

  {
    id: 4,
    title: "Student Scoreboard",
    description:
      "A React application for managing and displaying student records, showcasing component-based architecture and dynamic UI rendering.",
    tech: ["React", "JavaScript", "CSS"],
    github:
      "https://github.com/manpreetkaur292006-design/Student-ScoreBoard.git",
    live: "https://student-score-board.netlify.app/",
    image: ScoreBoard,
  },

  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "A collaborative front-end e-commerce project focused on responsive design, user experience, and team-based development using Git and GitHub.",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    github:
      "https://github.com/manpreetkaur292006-design/Decor-Section-URVORA.git",
    live: "https://urvora-decor-section.netlify.app/",
    image: decorUrvora,
  },
];

export default projects;
