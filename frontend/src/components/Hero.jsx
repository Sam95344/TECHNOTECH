import React from 'react';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="hero section-spacing">
      <div className="hero-content container hero-fade-in">
        <div className="badge-pill hero-float">🚀 Welcome to the Future</div>
        <h1 className="hero-float" style={{ animationDelay: '0.2s' }}>We Build <br /><span>Digital Experiences</span></h1>
        <p className="hero-float" style={{ animationDelay: '0.4s' }}>Transforming businesses with next-gen websites and empowering students with industry-ready internships.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary hero-fade-btn" onClick={() => setActiveSection('internship')}>Apply for Internship <i className="fas fa-arrow-right"></i></button>
          <button className="btn btn-outline hero-fade-btn" onClick={() => setActiveSection('contact')}>Get a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;