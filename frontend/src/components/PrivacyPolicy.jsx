import React from 'react';

const PrivacyPolicy = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Privacy Policy</h2>
        <p style={{ color: 'var(--text-muted)' }}>Your privacy matters to us.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 700, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Privacy Policy</h3>
          <p style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            Your privacy is important to us. We do not share your personal information with third parties except as required by law or to provide our services. All data is handled securely and confidentially.
          </p>
          <ul style={{ color: 'var(--text-muted)', textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>We collect only necessary information.</li>
            <li>Your data is protected with industry-standard security.</li>
            <li>You may request deletion of your data at any time.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: 18 }}>For privacy concerns, please <a href="#contact" style={{ color: 'var(--primary)' }}>contact us</a>.</p>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;
