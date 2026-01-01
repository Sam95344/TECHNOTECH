import React from 'react';

const Terms = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Terms & Conditions</h2>
        <p style={{ color: 'var(--text-muted)' }}>Read our terms and conditions below.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 700, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Terms & Conditions</h3>
          <p style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            By using our website and services, you agree to abide by our terms and conditions. We strive to provide accurate information and quality services, but reserve the right to update or change our terms at any time.
          </p>
          <ul style={{ color: 'var(--text-muted)', textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>All content is for informational purposes only.</li>
            <li>Unauthorized use of our materials is prohibited.</li>
            <li>We reserve the right to modify or discontinue services.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: 18 }}>For more details, please <a href="#contact" style={{ color: 'var(--primary)' }}>contact us</a>.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Terms;
