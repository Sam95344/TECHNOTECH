import React from 'react';

const FAQs = () => (
  <section className="section-padding section-spacing">
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>FAQs</h2>
        <p style={{ color: 'var(--text-muted)' }}>Frequently Asked Questions</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modern-card" style={{ maxWidth: 600, margin: '0 auto', padding: 40 }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: 18 }}>Frequently Asked Questions</h3>
          <div style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            <strong>Q:</strong> How do I apply for an internship?<br/>
            <strong>A:</strong> Go to the Internship section and click 'Apply Now'.
          </div>
          <div style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            <strong>Q:</strong> How do I contact support?<br/>
            <strong>A:</strong> Use the Contact page for all support queries.
          </div>
          <div style={{ color: 'var(--text-main)', marginBottom: 18 }}>
            <strong>Q:</strong> What services do you offer?<br/>
            <strong>A:</strong> We offer web development, mobile development, UI/UX design, digital marketing, and more.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQs;
