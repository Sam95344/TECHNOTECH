import React from 'react';

const UIDesign = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>UI/UX Design</h2>
        <p style={{ color: 'var(--text-muted)' }}>Beautiful and intuitive user interface design services.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 700, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>UI/UX Design Services</h3>
          <p style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            Our designers craft beautiful, intuitive interfaces that delight users and enhance brand value. We focus on usability, accessibility, and visual appeal to create memorable digital experiences.
          </p>
          <ul style={{ color: 'var(--text-muted)', textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>Wireframing & prototyping</li>
            <li>Custom UI design</li>
            <li>User experience optimization</li>
            <li>Design systems & branding</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: 18 }}>Contact us for a free quote and demo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default UIDesign;
