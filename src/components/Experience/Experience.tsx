import { Briefcase, MapPin } from "lucide-react";
import { experienceData } from "../../data/Experience";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <div className="section-heading">
          <span>EXPERIENCE</span>
          <h2>My professional journey</h2>
        </div>

        <div className="experience-list">
          {experienceData.map((experience) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
            >
              <div className="experience-icon">
                <Briefcase size={22} />
              </div>

              <div className="experience-content">

                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-duration">
                    {experience.duration}
                  </span>
                </div>

                <div className="experience-location">
                  <MapPin size={15} />
                  <span>{experience.location}</span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul className="experience-responsibilities">
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
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

export default Experience;