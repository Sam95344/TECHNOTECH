import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="section-padding section-spacing">
      <div className="container">
        <div className="section-header hero-fade-in" style={{ textAlign: 'center', marginBottom: '60px', animationDelay: '0.1s' }}>
          <h2 className="hero-float" style={{ animationDelay: '0.2s' }}>Why Choose Us?</h2>
          <p style={{ color: 'var(--text-muted)', animationDelay: '0.3s' }} className="hero-float">Trusted by 200+ Businesses</p>
        </div>
        <div className="grid-cards">
          <div className="modern-card hero-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="icon-box hero-float" style={{ animationDelay: '0.25s' }}><i className="fas fa-rocket"></i></div>
            <h3 className="hero-float" style={{ animationDelay: '0.3s' }}>Fast Delivery</h3>
            <p className="hero-float" style={{ animationDelay: '0.35s' }}>We deliver projects on time without compromising quality.</p>
          </div>
          <div className="modern-card hero-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="icon-box hero-float" style={{ color: 'var(--accent)', animationDelay: '0.35s' }}><i className="fas fa-shield-alt"></i></div>
            <h3 className="hero-float" style={{ animationDelay: '0.4s' }}>Secure Code</h3>
            <p className="hero-float" style={{ animationDelay: '0.45s' }}>Built with the latest security standards to protect your data.</p>
          </div>
          <div className="modern-card hero-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="icon-box hero-float" style={{ color: '#10b981', animationDelay: '0.45s' }}><i className="fas fa-headset"></i></div>
            <h3 className="hero-float" style={{ animationDelay: '0.5s' }}>24/7 Support</h3>
            <p className="hero-float" style={{ animationDelay: '0.55s' }}>We are always here to help you solve technical issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;