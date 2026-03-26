function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built using React.",
      link: "#"
    },
    {
      title: "Todo App",
      desc: "A task manager with add/delete features.",
      link: "#"
    },
    {
      title: "Weather App",
      desc: "Shows live weather using API.",
      link: "#"
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

            <a href={proj.link} className="btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;