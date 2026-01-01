import React from 'react';

const aboutItems = [
  {
    _id: '1',
    title: 'Our Mission',
    description: 'To democratize technology and empower businesses by bridging the gap between complex frameworks and user-centric solutions.',
    icon: 'fas fa-rocket'
  },
  {
    _id: '2',
    title: 'Innovation & Excellence',
    description: 'We are committed to transforming challenges into opportunities, driving sustainable growth in an ever-evolving tech landscape.',
    icon: 'fas fa-lightbulb'
  },
  {
    _id: '3',
    title: 'Expert Team',
    description: 'Our leadership team consists of seasoned experts in IT innovation, project management, and talent acquisition.',
    icon: 'fas fa-users-cog'
  },
  {
    _id: '4',
    title: 'Software Development',
    description: 'Creating robust and scalable software solutions tailored to your business needs, from web to mobile applications.',
    icon: 'fas fa-code'
  },
  {
    _id: '5',
    title: 'Digital Transformation',
    description: 'Guiding businesses through the digital era with expertise in cloud services, automation, and modern infrastructure.',
    icon: 'fas fa-cogs'
  },
  {
    _id: '6',
    title: 'IT Training',
    description: 'Empowering the next generation of tech professionals with hands-on training and real-world project experience.',
    icon: 'fas fa-graduation-cap'
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding section-spacing">
      <div className="container">
        <div className="section-header hero-fade-in" style={{ textAlign: 'center', marginBottom: '60px', animationDelay: '0.1s' }}>
          <h2 className="hero-float" style={{ animationDelay: '0.2s' }}>Why Choose Us</h2>
          <p style={{ color: 'var(--text-muted)', animationDelay: '0.3s' }} className="hero-float">The core pillars of our company.</p>
        </div>
        <div className="grid-cards">
          {aboutItems.map((item, idx) => {
            // Map about title to SVG image
            const imgMap = {
              'Our Mission': '/assets/about/our-mission.svg',
              'Innovation & Excellence': '/assets/about/innovation.svg',
              'Expert Team': '/assets/about/expert-team.svg',
              'Software Development': '/assets/about/software-dev.svg',
              'Digital Transformation': '/assets/about/digital-transformation.svg',
              'IT Training': '/assets/about/it-training.svg'
            };
            const imgSrc = imgMap[item.title] || '/assets/about/our-mission.svg';
            return (
              <div key={item._id} className="modern-card hero-fade-in" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="about-img-box">
                  <img src={imgSrc} alt={item.title} />
                </div>
                <h3 className="hero-float" style={{ animationDelay: `${0.25 + idx * 0.1}s` }}>{item.title}</h3>
                <p className="hero-float" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;