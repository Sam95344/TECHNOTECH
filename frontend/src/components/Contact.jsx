import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding container section-spacing">
      <div className="section-header hero-fade-in" style={{ textAlign: 'center', marginBottom: '60px', animationDelay: '0.1s' }}>
        <h2 className="hero-float" style={{ animationDelay: '0.2s' }}>Contact Us</h2>
        <p style={{ color: 'var(--text-muted)', animationDelay: '0.3s' }} className="hero-float">We'd love to hear from you. Here's how you can reach us.</p>
      </div>
      <div className="contact-box">
        <div className="contact-sidebar hero-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="hero-float" style={{ animationDelay: '0.25s' }}>Contact Information</h3>
          <p className="contact-sidebar-text hero-float" style={{ animationDelay: '0.3s' }}>Fill up the form and our team will get back to you within 24 hours. Or get in touch with us through our contact details below.</p>
          <div className="contact-info-item hero-float" style={{ animationDelay: '0.35s' }}>
            <div className="contact-info-icon"><i className="fas fa-phone"></i></div>
            <div className="contact-info-text">
              <span className="contact-info-label">CALL US</span>
              <span>+91 9955789220</span>
            </div>
          </div>
          <div className="contact-info-item hero-float" style={{ animationDelay: '0.4s' }}>
            <div className="contact-info-icon"><i className="fas fa-envelope"></i></div>
            <div className="contact-info-text">
              <span className="contact-info-label">EMAIL US</span>
              <span>careerstechnotech@gmail.com</span>
            </div>
          </div>
          <div className="contact-info-item hero-float" style={{ animationDelay: '0.45s' }}>
            <div className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="contact-info-text">
              <span className="contact-info-label">OUR OFFICE</span>
              <span>Bihar, India</span>
            </div>
          </div>
        </div>
        <div className="contact-main hero-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="hero-float" style={{ animationDelay: '0.35s' }}>Send a Message</h3>
          <form id="contactForm" action="https://formsubmit.co/careerstechnotech@gmail.com" method="POST" target="_blank">
            <input type="hidden" name="_subject" value="New Customer Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group-row">
                <input type="text" name="Name" className="form-input hero-float" style={{ animationDelay: '0.4s' }} placeholder="Your Name" required />
                <input type="email" name="Email" className="form-input hero-float" style={{ animationDelay: '0.45s' }} placeholder="Email Address" required />
            </div>
            <textarea name="Message" rows="5" className="form-input hero-float" style={{ animationDelay: '0.5s' }} placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary hero-fade-btn" style={{ width: '100%', animationDelay: '0.55s' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;