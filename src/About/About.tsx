import { Code2, Database, Server, Smartphone } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="section-heading">
          <span>ABOUT ME</span>
          <h2>Building applications with purpose</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm a Full Stack Developer with hands-on experience building
              web and cross-platform mobile applications using modern
              JavaScript technologies.
            </p>

            <p>
              I work with React.js, React Native, TypeScript, Node.js,
              Express.js, MongoDB, and PostgreSQL to develop responsive
              interfaces, RESTful APIs, and database-driven applications.
            </p>

            <p>
              I also have experience with Firebase Cloud Messaging,
              Git/GitHub, Docker, and AWS fundamentals, along with
              AI-assisted development using tools such as OpenCode and
              Claude.
            </p>
          </div>

          <div className="about-highlights">

            <div className="about-card">
              <Code2 size={24} />
              <div>
                <h3>Frontend</h3>
                <p>React.js & React Native</p>
              </div>
            </div>

            <div className="about-card">
              <Server size={24} />
              <div>
                <h3>Backend</h3>
                <p>Node.js & Express.js</p>
              </div>
            </div>

            <div className="about-card">
              <Database size={24} />
              <div>
                <h3>Databases</h3>
                <p>MongoDB & PostgreSQL</p>
              </div>
            </div>

            <div className="about-card">
              <Smartphone size={24} />
              <div>
                <h3>Mobile</h3>
                <p>React Native Applications</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;