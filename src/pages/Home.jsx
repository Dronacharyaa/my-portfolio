function Home() {
  const skills = [
    { name: "HTML", desc: "Structured web pages" },
    { name: "CSS", desc: "Styling and layout design" },
    { name: "JavaScript", desc: "Interactivity" },
    { name: "React", desc: "UI development" },
    { name: "Node.js", desc: "Server-side development" },
    { name: "Git", desc: "Version control" }
  ];

  return (
    <div className="section">
      <h1>Welcome to My Portfolio</h1>

      {/* Image + Intro */}
      <div className="image-container">
        <img src="/1647096908402.jpg" alt="Yeash Jain" />
      </div>

      <div className="intro-text">
        <h2>Introduction</h2>
        <p>
          I'm Yeash Jain, a web developer passionate about building responsive
          and user-friendly websites.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skill">
        <h2>Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;