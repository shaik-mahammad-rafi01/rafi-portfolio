import {

  Mail,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import { contact } from "../../data/Contact";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="section-heading">
          <span>CONTACT</span>
          <h2>Let's build something together</h2>
        </div>

        <div className="contact-content">

          <div className="contact-intro">
            <p>
              I'm always open to discussing new opportunities, interesting
              projects, and ways we can work together.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="contact-email"
            >
              {contact.email}
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-links">

            <a
              href={`mailto:${contact.email}`}
              className="contact-card"
            >
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>Email</span>
                <p>{contact.email}</p>
              </div>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <LinkedinIcon size={21} />
              </div>

              <div>
                <span>LinkedIn</span>
                <p>Connect with me</p>
              </div>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <GithubIcon size={21} />
              </div>

              <div>
                <span>GitHub</span>
                <p>View my repositories</p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;