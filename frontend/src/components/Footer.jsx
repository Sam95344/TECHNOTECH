import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Centered Logo */}
          <div className="footer-section logo-centered">
            <div className="logo">
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
            </div>
            <div className="footer-company-desc-marquee">
              <span className="floating-text">
                Transforming ideas into reality with innovative technology solutions and exceptional digital experiences. Your reliable partner for comprehensive IT services and unparalleled software development expertise.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={() => { window.location.hash = '#home'; }}>Home</a></li>
              <li><a href="#about" onClick={() => { window.location.hash = '#about'; }}>About</a></li>
              <li><a href="#services" onClick={() => { window.location.hash = '#services'; }}>Services</a></li>
              <li><a href="#careers" onClick={() => { window.location.hash = '#careers'; }}>Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#faqs" onClick={() => { window.location.hash = '#faqs'; }}>FAQs</a></li>
              <li><a href="#terms" onClick={() => { window.location.hash = '#terms'; }}>Terms & Conditions</a></li>
              <li><a href="#privacy" onClick={() => { window.location.hash = '#privacy'; }}>Privacy Policy</a></li>
              <li><a href="#refund" onClick={() => { window.location.hash = '#refund'; }}>Cancellation & Refund Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#webdev" onClick={() => { window.location.hash = '#webdev'; }}>Web Development</a></li>
              <li><a href="#mobiledev" onClick={() => { window.location.hash = '#mobiledev'; }}>Mobile Development</a></li>
              <li><a href="#uidesign" onClick={() => { window.location.hash = '#uidesign'; }}>UI/UX Design</a></li>
              <li><a href="#digitalmarketing" onClick={() => { window.location.hash = '#digitalmarketing'; }}>Digital Marketing</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-content">
            <div className="social-icons">
              <a href="https://www.facebook.com/igsam8084" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}>
                <i className="fab fa-facebook-f" style={{ fontSize: '1.5rem', color: '#1877f3' }}></i>
              </a>
              <a href="https://www.instagram.com/careerstechnotech/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}>
                <i className="fab fa-instagram" style={{ fontSize: '1.5rem', color: '#e4405f' }}></i>
              </a>
              <a href="https://www.linkedin.com/company/technotechs/?viewAsMember=true" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}>
                <i className="fab fa-linkedin-in" style={{ fontSize: '1.5rem', color: '#0a66c2' }}></i>
              </a>
              <a href="https://x.com/mrsam8084" target="_blank" rel="noopener noreferrer" title="Twitter" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}>
                <i className="fab fa-twitter" style={{ fontSize: '1.5rem', color: '#1da1f2' }}></i>
              </a>
            </div>
            <p>&copy; 2025 TECHNOTECH NOVA SOLUTIONS. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;