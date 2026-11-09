import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "skills", href: "#skills", label: "Skills" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "contact", href: "#contact", label: "Contact" },
];

const RESUME_HREF = "/resume.pdf";
const RESUME_FILENAME = "Shaik-Mahammad-Rafi-Resume.pdf";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = NAV_LINKS.map(({ id }) =>
      document.getElementById(id)
    ).filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Shaik Mahammad Rafi — Home"
        >
          <span className="navbar-logo-code" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="navbar-logo-name">Shaik Mahammad Rafi</span>
        </a>

        <nav className="navbar-links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ id, href, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            className="navbar-resume"
            href={RESUME_HREF}
            download={RESUME_FILENAME}
          >
            <Download size={16} aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ id, href, label }) => (
          <a
            key={id}
            href={href}
            onClick={closeMenu}
            className={activeSection === id ? "active" : undefined}
            aria-current={activeSection === id ? "page" : undefined}
          >
            {label}
          </a>
        ))}

        <a
          className="mobile-resume"
          href={RESUME_HREF}
          download={RESUME_FILENAME}
          onClick={closeMenu}
        >
          <Download size={16} aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
