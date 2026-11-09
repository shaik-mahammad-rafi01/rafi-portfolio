import { type CSSProperties } from "react";
import { ArrowRight, Mail } from "lucide-react";
import HeroCutout from "../../Assets/Hero-cutout.png";
import { contact } from "../../data/Contact";
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  NodeJsIcon,
  MongodbIcon,
  PostgresqlIcon,
  TypescriptIcon,
  DockerIcon,
  AwsIcon,
} from "../icons";
import "./Hero.css";

const TECHNOLOGIES = [
  { label: "React.js", icon: ReactIcon, color: "#61DAFB" },
  { label: "Node.js", icon: NodeJsIcon, color: "#83CD29" },
  { label: "MongoDB", icon: MongodbIcon, color: "#47A248" },
  { label: "PostgreSQL", icon: PostgresqlIcon, color: "#4169E1" },
  { label: "TypeScript", icon: TypescriptIcon, color: "#3178C6" },
  { label: "GitHub", icon: GithubIcon, color: "#FFFFFF" },
  { label: "Docker", icon: DockerIcon, color: "#2496ED" },
  { label: "AWS", icon: AwsIcon, color: "#FF9900" },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orb hero-orb-purple" />
        <div className="hero-orb hero-orb-blue" />
        <div className="hero-orb hero-orb-violet" />
        <div className="hero-dots hero-dots-left" />
        <div className="hero-dots hero-dots-right" />
        <span className="hero-code hero-code-left">&lt;/&gt;</span>
        <span className="hero-code hero-code-right">{"{ }"}</span>

        <svg
          className="hero-lines"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="heroLineOne"
              x1="0"
              y1="0"
              x2="1440"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.55" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="heroLineTwo"
              x1="0"
              y1="900"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" stopOpacity="0" />
              <stop offset="0.5" stopColor="#2563EB" stopOpacity="0.45" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M-80 720C260 560 420 340 780 360C1080 378 1220 560 1520 470"
            stroke="url(#heroLineOne)"
            strokeWidth="1.5"
          />
          <path
            d="M-60 260C240 120 520 120 760 260C980 388 1180 380 1500 240"
            stroke="url(#heroLineTwo)"
            strokeWidth="1"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="hero-word" aria-hidden="true">
        DEVELOPER
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I&apos;m</p>

          <h1 className="hero-title">
            Shaik Mahammad <span className="hero-title-accent">Rafi</span>
          </h1>

          <p className="hero-role">
            FULL STACK <span className="hero-role-accent">DEVELOPER</span>
          </p>

          <p className="hero-description">
            Building responsive web and mobile applications with modern
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn hero-btn-primary">
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              Contact Me
              <Mail size={17} aria-hidden="true" />
            </a>
          </div>

          <ul className="hero-tech-list" aria-label="Technologies I work with">
            {TECHNOLOGIES.map(({ label, icon: Icon, color }) => (
              <li
                key={label}
                className="hero-tech-item"
                title={label}
                aria-label={label}
                style={{ "--tech-color": color } as CSSProperties}
              >
                <Icon size={22} aria-hidden="true" />
              </li>
            ))}
          </ul>

          <div className="hero-socials">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-glow" aria-hidden="true" />
          <img
            className="hero-portrait-img"
            src={HeroCutout}
            alt="Shaik Mahammad Rafi"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
