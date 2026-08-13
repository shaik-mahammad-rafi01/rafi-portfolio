import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import HeroImage from "../../Assets/Hero.jpeg";
import { GithubIcon, LinkedinIcon } from "../icons";
import "./Hero.css";

function Hero() {
  const name = "Shaik Mahammad Rafi";
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const progress = typed.length / name.length;

    if (!isDeleting && typed.length < name.length) {
      const delay = 120 - progress * 55;
      timeout = setTimeout(() => setTyped(name.slice(0, typed.length + 1)), delay);
    } else if (!isDeleting && typed.length === name.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1700);
    } else if (isDeleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(name.slice(0, typed.length - 1)), 45);
    } else {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [typed, isDeleting, name]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-greeting">
            Hi, I'm
          </p>

          <h1>
            {typed}
            <span className="hero-cursor" aria-hidden="true">
              |
            </span>
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I build responsive web and cross-platform mobile applications
            using React, React Native, TypeScript, Node.js, Express,
            MongoDB, and PostgreSQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-primary-button">
              View Projects
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="hero-secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-social-links">

            <a
              href="https://github.com/shaik-mahammad-rafi01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-mahammad-rafi-"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={21} />
            </a>

            <a
              href="mailto:shaikmahammadrafi484@gmail.com"
              aria-label="Email"
            >
              <Mail size={21} />
            </a>

          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="Mahammad Rafi Shaik" />
        </div>

      </div>
    </section>
  );
}

export default Hero;