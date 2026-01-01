import React from 'react';

const RefundPolicy = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Cancellation & Refund Policy</h2>
        <p style={{ color: 'var(--text-muted)' }}>Our refund and cancellation policy.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 700, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Cancellation & Refund Policy</h3>
          <p style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            We value your satisfaction. If you are not happy with our services, you may request a cancellation or refund according to our policy below:
          </p>
          <ul style={{ color: 'var(--text-muted)', textAlign: 'left', listStyle: 'disc', paddingLeft: 24 }}>
            <li>Refunds are processed within 7 business days.</li>
            <li>Cancellation requests must be made within 48 hours of purchase.</li>
            <li>Contact support for all refund and cancellation queries.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: 18 }}>For more details, please <a href="#contact" style={{ color: 'var(--primary)' }}>contact us</a>.</p>
        </div>
      </div>
    </div>
  </section>
);

export default RefundPolicy;
