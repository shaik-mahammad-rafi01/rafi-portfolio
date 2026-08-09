import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Rafi<span>.</span>
            </a>

            <p>
              Full Stack Developer building modern web and
              cross-platform applications.
            </p>
          </div>

          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {currentYear} Mahammad Rafi Shaik. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;