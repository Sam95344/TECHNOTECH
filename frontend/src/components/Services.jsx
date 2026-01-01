import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/services`);
        // Always show fallback services for demonstration
        setServices([
          {
            _id: '1',
            title: 'Static Website',
            description: 'Perfect for portfolios and small businesses. Clean, fast, and professional.',
            icon: 'fas fa-code'
          },
          {
            _id: '2',
            title: 'Dynamic Website',
            description: 'Content-rich sites with admin panels. Interactive and user-friendly.',
            icon: 'fas fa-database'
          },
          {
            _id: '3',
            title: 'E-Commerce',
            description: 'Complete online selling platform with payment integration.',
            icon: 'fas fa-store'
          },
          {
            _id: '4',
            title: 'App Development',
            description: 'Native Android and iOS apps with modern UI/UX design.',
            icon: 'fas fa-mobile-alt'
          },
          {
            _id: '5',
            title: 'Digital Marketing',
            description: 'SEO, Social Media strategies, and online advertising.',
            icon: 'fas fa-rocket'
          },
          {
            _id: '6',
            title: 'Maintenance',
            description: 'Reliable updates, security patches, and technical support.',
            icon: 'fas fa-headset'
          },
          {
            _id: '7',
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive user interfaces with user experience optimization.',
            icon: 'fas fa-palette'
          },
          {
            _id: '8',
            title: 'Cloud Solutions',
            description: 'Scalable cloud hosting, deployment, and infrastructure management.',
            icon: 'fas fa-cloud'
          },
          {
            _id: '9',
            title: 'API Development',
            description: 'RESTful APIs, microservices, and third-party integrations.',
            icon: 'fas fa-cogs'
          },
          {
            _id: '10',
            title: 'Consulting',
            description: 'Technical consulting, project planning, and digital strategy.',
            icon: 'fas fa-users'
          }
        ]);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching services:', err);
        // Fallback to default services if API fails
        setServices([
          {
            _id: '1',
            title: 'Static Website',
            description: 'Perfect for portfolios and small businesses. Clean, fast, and professional.',
            icon: 'fas fa-code'
          },
          {
            _id: '2',
            title: 'Dynamic Website',
            description: 'Content-rich sites with admin panels. Interactive and user-friendly.',
            icon: 'fas fa-database'
          },
          {
            _id: '3',
            title: 'E-Commerce',
            description: 'Complete online selling platform with payment integration.',
            icon: 'fas fa-store'
          },
          {
            _id: '4',
            title: 'App Development',
            description: 'Native Android and iOS apps with modern UI/UX design.',
            icon: 'fas fa-mobile-alt'
          },
          {
            _id: '5',
            title: 'Digital Marketing',
            description: 'SEO, Social Media strategies, and online advertising.',
            icon: 'fas fa-rocket'
          },
          {
            _id: '6',
            title: 'Maintenance',
            description: 'Reliable updates, security patches, and technical support.',
            icon: 'fas fa-headset'
          },
          {
            _id: '7',
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive user interfaces with user experience optimization.',
            icon: 'fas fa-palette'
          },
          {
            _id: '8',
            title: 'Cloud Solutions',
            description: 'Scalable cloud hosting, deployment, and infrastructure management.',
            icon: 'fas fa-cloud'
          },
          {
            _id: '9',
            title: 'API Development',
            description: 'RESTful APIs, microservices, and third-party integrations.',
            icon: 'fas fa-cogs'
          },
          {
            _id: '10',
            title: 'Consulting',
            description: 'Technical consulting, project planning, and digital strategy.',
            icon: 'fas fa-users'
          }
        ]);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="section-padding section-spacing">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>Our Services</h2>
            <p style={{ color: 'var(--text-muted)' }}>Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-padding section-spacing">
      <div className="container">
        <div className="section-header hero-fade-in" style={{ textAlign: 'center', marginBottom: '60px', animationDelay: '0.1s' }}>
          <h2 className="hero-float" style={{ animationDelay: '0.2s' }}>Our Services</h2>
          <p style={{ color: 'var(--text-muted)', animationDelay: '0.3s' }} className="hero-float">End-to-End Digital Solutions</p>
        </div>
        <div className="grid-cards">
          {services.map((service, idx) => {
            // Map service title to SVG image
            const imgMap = {
              'Static Website': '/assets/service/static-website.svg',
              'Dynamic Website': '/assets/service/dynamic-website.svg',
              'E-Commerce': '/assets/service/ecommerce.svg',
              'App Development': '/assets/service/app-development.svg',
              'Digital Marketing': '/assets/service/digital-marketing.svg',
              'Maintenance': '/assets/service/maintenance.svg',
              'UI/UX Design': '/assets/service/ui-ux.svg',
              'Cloud Solutions': '/assets/service/cloud-solutions.svg',
              'API Development': '/assets/service/api-development.svg',
              'Consulting': '/assets/service/consulting.svg'
            };
            const imgSrc = imgMap[service.title] || '/assets/service/static-website.svg';
            return (
              <div key={service._id} className="modern-card service-full-img-card hero-fade-in" style={{ position: 'relative', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="service-img-box">
                  <img src={imgSrc} alt={service.title} />
                </div>
                <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 18px 32px 18px' }}>
                  <h3 className="hero-float" style={{ color: '#fff', marginBottom: 12, textShadow: '0 2px 8px #000', animationDelay: `${0.25 + idx * 0.1}s` }}>{service.title}</h3>
                  <p className="hero-float" style={{ color: '#fff', marginBottom: 0, textShadow: '0 2px 8px #000', animationDelay: `${0.3 + idx * 0.1}s` }}>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;