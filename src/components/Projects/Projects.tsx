import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons";
import { projects } from "../../data/Projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="section-heading">
          <span>PROJECTS</span>
          <h2>Things I've built</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-content">

                <div className="project-top">
                  <span className="project-number">
                    {String(
                      projects.indexOf(project) + 1
                    ).padStart(2, "0")}
                  </span>

                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={19} />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={19} />
                      </a>
                    )}
                  </div>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <div
                      className="project-feature"
                      key={feature}
                    >
                      <span>•</span>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;