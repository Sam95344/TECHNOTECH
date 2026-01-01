import React from 'react';

const WebDevelopment = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Web Development</h2>
        <p style={{ color: 'var(--text-muted)' }}>Professional web development services for your business.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 700, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Web Development Services</h3>
          <p style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            We build fast, secure, and scalable websites tailored to your business needs. From landing pages to complex web applications, our team delivers modern solutions with stunning design and robust functionality.
          </p>
          <ul style={{ color: 'var(--text-muted)', textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>Custom website design & development</li>
            <li>Responsive and mobile-friendly layouts</li>
            <li>SEO optimization and analytics</li>
            <li>Maintenance and support</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: 18 }}>Contact us for a free quote and demo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WebDevelopment;
