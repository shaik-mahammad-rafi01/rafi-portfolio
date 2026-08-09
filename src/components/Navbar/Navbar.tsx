import { type ComponentType, type SVGProps, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

type IconProps = SVGProps<SVGSVGElement> & { size?: string | number };

const GithubIcon = FaGithub as unknown as ComponentType<IconProps>;
const LinkedinIcon = FaLinkedin as unknown as ComponentType<IconProps>;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          SHAIK MAHAMMAD RAFI
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-social">
          <a
            href="https://github.com/shaik-mahammad-rafi01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/shaik-mahammad-rafi-"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certifications" onClick={closeMenu}>
          Certifications
        </a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </header>
  );
}

export default Navbar;