import React, { useState } from 'react';

const Navbar = ({ setActiveSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close mobile menu
    window.location.hash = `#${section}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#!" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <div className="logo-icon">
            <img src="/assets/TECHNOTECH_LOGO-removebg.png" alt="TECHNOTECH Logo" width="60" height="60" />
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
          <li><a href="#!" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'internship' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('internship'); }}>Internship</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
          <li><a href="#!" className={`nav-link ${activeSection === 'verify' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('verify'); }}>Verify Certificate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
