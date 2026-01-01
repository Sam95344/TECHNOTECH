import React from 'react';

const DigitalMarketing = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Digital Marketing</h2>
        <p style={{ color: 'var(--text-muted)' }}>SEO, social media, and online advertising services.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 700, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Digital Marketing Services</h3>
          <p style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            Grow your business online with our expert digital marketing solutions. We offer SEO, social media management, and targeted advertising to help you reach the right audience and achieve measurable results.
          </p>
          <ul style={{ color: 'var(--text-muted)', textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>SEO & content marketing</li>
            <li>Social media strategy</li>
            <li>Online advertising campaigns</li>
            <li>Analytics & reporting</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: 18 }}>Contact us for a free quote and demo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default DigitalMarketing;
