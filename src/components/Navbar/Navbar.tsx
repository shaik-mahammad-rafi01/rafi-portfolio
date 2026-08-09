import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "/resume.pdf", label: "Resume", external: true },
  { href: "#contact", label: "Contact" },
];

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
          {NAV_LINKS.map(({ href, label, external }) => (
            <a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ href, label, external }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;