import React, { useState } from "react";
import resume from "../images/B K Hemanth Raj Resume.pdf"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-p">
          <h2>PORTFOLIO</h2>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-link ${menuOpen ? "show" : ""}`} id="navMenu">
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about" >About</a></li>
            <li><a href="#techstack">Tech Stack</a></li>
            <li><a href="#experience">Experience(Intern)</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a
                href={resume}
                download
                className="download-btn"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
