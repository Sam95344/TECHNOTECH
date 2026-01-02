import React, { useState } from 'react';

const Navbar = ({ setActiveSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#!" className="logo" onClick={() => handleNavClick('home')}>
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">TECHNOTECH</span>
            <span className="logo-sub">NOVA SOLUTIONS</span>
          </div>
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#!" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>Home</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>About</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={() => handleNavClick('services')}>Services</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'internship' ? 'active' : ''}`} onClick={() => handleNavClick('internship')}>Internship</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>Contact</a></li>
          <li><a href="https://technotech-solution.netlify.app/" className={`nav-link ${activeSection === 'verify' ? 'active' : ''}`} target="_blank" rel="noopener noreferrer">Verify Certificate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
