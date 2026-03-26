import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built using React.",
      link: "/" // Home page
    },
    {
      title: "Todo App",
      desc: "A task manager with add/delete features.",
      link: "/todo" // Todo page
    },
    {
      title: "Weather App",
      desc: "Shows live weather using API.",
      link: "#" // placeholder
    }
  ];

  return (
    <div className="section">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>

            <Link to={proj.link} className="btn">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;