import React from 'react';

const MobileDevelopment = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Mobile Development</h2>
        <p style={{ color: 'var(--text-muted)' }}>Native and cross-platform mobile app development.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 700, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Mobile Development Services</h3>
          <p style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            We create native and cross-platform mobile apps that engage users and drive business growth. Our apps are designed for performance, usability, and seamless integration with your existing systems.
          </p>
          <ul style={{ color: 'var(--text-muted)', textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>Android & iOS app development</li>
            <li>React Native & Flutter solutions</li>
            <li>App store deployment & support</li>
            <li>UI/UX optimized for mobile</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: 18 }}>Contact us for a free quote and demo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default MobileDevelopment;
