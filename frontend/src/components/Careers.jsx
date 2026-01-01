import React from 'react';

const Careers = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Careers</h2>
        <p style={{ color: 'var(--text-muted)' }}>Join our team and build your future with us!</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Work With Us</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 18 }}>
            We believe in empowering talent and fostering growth. If you are passionate about technology and want to make a difference, Technotech Nova Solutions is the place for you!
          </p>
          <ul style={{ color: 'var(--text-main)', marginBottom: 18, textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>Collaborative work environment</li>
            <li>Opportunities for learning and development</li>
            <li>Exciting projects and challenges</li>
            <li>Flexible work culture</li>
          </ul>
          <p style={{ color: 'var(--text-muted)' }}>Currently, there are no open positions. Please check back later or <a href="#contact" style={{ color: 'var(--primary)' }}>contact us</a> for more information.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Careers;
