import dashboardImg from "../assets/dashboard.png";
import cinemaImg from "../assets/cinema.jpg";
import volunteerImg from "../assets/volunteer.jpeg";

function Projects() {
  const projects = [
    {
      title: "Personal Dashboard",
      image: dashboardImg,
      description:
        "A React-based personal dashboard built with reusable components, props, and clean UI structure.",
      tech: ["React", "JSX", "CSS"]
    },
    {
      title: "Cinema Tickets (Staff Panel)",
      image: cinemaImg,
      description:
        "A web app for cinema workers to manage screenings and ticket sales, including sessions and seat selection.",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Volunteer & Help Platform",
      image: volunteerImg,
      description:
        "A platform that connects volunteers with people in need, helping organize requests and support efficiently.",
      tech: ["React", "JavaScript", "CSS"]
    }
  ];

  return (
    <section className="card projects" id="projects">
      <h3 className="card__title">Projects</h3>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <article key={index} className="project">
            <img
              className="project__image"
              src={project.image}
              alt={project.title}
            />

            <h4 className="project__title">{project.title}</h4>
            <p className="project__description">{project.description}</p>

            <div className="project__tech">
              {project.tech.map((item) => (
                <span key={item} className="project__badge">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
