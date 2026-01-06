
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getInternshipById } from '../firebaseConfig';

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [queryId, setQueryId] = useState('');
  const [queried, setQueried] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        // Using the same fallback data logic as before
        setInternships([
          {
            _id: '1',
            title: 'Frontend Developer',
            description: 'Learn React, JavaScript, and modern frontend technologies. Build responsive web applications.',
            icon: 'fas fa-code'
          },
          {
            _id: '2',
            title: 'Backend Developer',
            description: 'Work with Node.js, Express, and databases. Develop RESTful APIs and server-side logic.',
            icon: 'fas fa-server'
          },
          {
            _id: '3',
            title: 'UI/UX Design',
            description: 'Design user interfaces and experiences using Figma, Adobe XD, and prototyping tools.',
            icon: 'fas fa-palette'
          },
          {
            _id: '4',
            title: 'Mobile App Developer',
            description: 'Develop Android and iOS apps using React Native or Flutter. Learn cross-platform development.',
            icon: 'fas fa-mobile-alt'
          },
          {
            _id: '5',
            title: 'Data Analyst',
            description: 'Analyze data using Python, SQL, and visualization tools. Learn data-driven insights.',
            icon: 'fas fa-chart-line'
          },
          {
            _id: '6',
            title: 'DevOps Engineer',
            description: 'Learn cloud deployment, CI/CD pipelines, and infrastructure automation with AWS/Azure.',
            icon: 'fas fa-cloud-upload-alt'
          }
        ]);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching internships:', err);
        // Using a similar fallback as in the original file for safety
        setInternships([
            {
                _id: '1',
                title: 'Frontend Developer',
                description: 'Learn React, JavaScript, and modern frontend technologies. Build responsive web applications.',
                icon: 'fas fa-code'
              },
              {
                _id: '2',
                title: 'Backend Developer',
                description: 'Work with Node.js, Express, and databases. Develop RESTful APIs and server-side logic.',
                icon: 'fas fa-server'
              },
              {
                _id: '3',
                title: 'UI/UX Design',
                description: 'Design user interfaces and experiences using Figma, Adobe XD, and prototyping tools.',
                icon: 'fas fa-palette'
              },
              {
                _id: '4',
                title: 'Mobile App Developer',
                description: 'Develop Android and iOS apps using React Native or Flutter. Learn cross-platform development.',
                icon: 'fas fa-mobile-alt'
              },
              {
                _id: '5',
                title: 'Data Analyst',
                description: 'Analyze data using Python, SQL, and visualization tools. Learn data-driven insights.',
                icon: 'fas fa-chart-line'
              },
              {
                _id: '6',
                title: 'DevOps Engineer',
                description: 'Learn cloud deployment, CI/CD pipelines, and infrastructure automation with AWS/Azure.',
                icon: 'fas fa-cloud-upload-alt'
              }
        ]);
        setError('Failed to load internships');
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) {
    return (
      <section id="internship" className="section-padding section-spacing">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>Internship Opportunities</h2>
            <p style={{ color: 'var(--text-muted)' }}>Loading opportunities...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="internship" className="section-padding section-spacing">
      <div className="container">
        <div className="section-header hero-fade-in" style={{ textAlign: 'center', marginBottom: '60px', animationDelay: '0.1s' }}>
          <h2 className="hero-float" style={{ animationDelay: '0.2s' }}>Internship Opportunities</h2>
          <p style={{ color: 'var(--text-muted)', animationDelay: '0.3s' }} className="hero-float">Kickstart Your Tech Career With Us</p>
        </div>
        {/* Quick fetch by ID (client-side, using Firestore) */}
        <div style={{ maxWidth: 520, margin: '0 auto 28px', display: 'flex', gap: 8 }}>
          <input
            value={queryId}
            onChange={(e) => setQueryId(e.target.value)}
            placeholder="Enter internship ID (e.g. 1)"
            style={{ flex: 1, padding: '10px 12px' }}
          />
          <button
            className="btn btn-primary"
            onClick={async () => {
              if (!queryId) return;
              setError(null);
              try {
                const doc = await getInternshipById(queryId);
                if (!doc) {
                  setQueried({ notFound: true });
                } else {
                  setQueried(doc);
                }
              } catch (err) {
                setError('Failed to fetch');
                console.error(err);
              }
            }}
            style={{ padding: '10px 16px' }}
          >
            Fetch
          </button>
        </div>

        {queried && (
          <div style={{ maxWidth: 900, margin: '0 auto 24px', padding: 18, borderRadius: 8, background: '#fff' }}>
            {queried.notFound ? (
              <div style={{ textAlign: 'center', color: '#666' }}>No internship found for ID: {queryId}</div>
            ) : (
              <div>
                <h3 style={{ marginBottom: 6 }}>{queried.title || 'Untitled Internship'}</h3>
                <p style={{ marginBottom: 8 }}>{queried.description || 'No description available.'}</p>
                <a href={queried.applyLink || 'https://docs.google.com/forms/d/e/1FAIpQLSd95niQu7id1_3vfiLQgGSIYzmfNvs4qhKqjJNOiGuy3lwHGA/viewform?usp=dialog'} target="_blank" rel="noreferrer" className="btn btn-primary">Apply</a>
              </div>
            )}
          </div>
        )}
        <div className="grid-cards">
          {internships.map((internship, idx) => {
            // Map internship title to SVG image
            const imgMap = {
              'Frontend Developer': '/assets/internship/Frontend Developer.svg',
              'Backend Developer': '/assets/internship/Backend Developer.svg',
              'UI/UX Design': '/assets/internship/ui-ux-design.svg',
              'Mobile App Developer': '/assets/internship/Mobile App Developer.svg',
              'Data Analyst': '/assets/internship/Data Analyst.svg',
              'DevOps Engineer': '/assets/internship/DevOps Engineer.svg'
            };
            const imgSrc = imgMap[internship.title] || '/assets/internship/Frontend Developer.svg';
            return (
              <div key={internship._id} className="modern-card internship-full-img-card hero-fade-in" style={{ position: 'relative', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="internship-img-box">
                  <img src={imgSrc} alt={internship.title} />
                </div>
                <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 18px 32px 18px' }}>
                  <h3 className="hero-float" style={{ color: '#fff', marginBottom: 12, textShadow: '0 2px 8px #000', animationDelay: `${0.25 + idx * 0.1}s` }}>{internship.title}</h3>
                  <p className="hero-float" style={{ color: '#fff', marginBottom: 18, textShadow: '0 2px 8px #000', animationDelay: `${0.3 + idx * 0.1}s` }}>{internship.description}</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd95niQu7id1_3vfiLQgGSIYzmfNvs4qhKqjJNOiGuy3lwHGA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Apply Now</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Internship;