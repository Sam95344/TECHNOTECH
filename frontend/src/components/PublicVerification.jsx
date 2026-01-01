import React, { useState } from 'react';
import axios from 'axios';

const PublicVerification = ({ setActiveSection }) => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!certificateNumber.trim()) {
      setError('Please enter a certificate number');
      return;
    }

    setLoading(true);
    setError('');
    setCertificate(null);

    try {
      const response = await axios.get(`https://technotech-o44t.onrender.com/api/certificates/verify/${certificateNumber}`);
      setCertificate(response.data);
    } catch (err) {
      setError('Certificate not found or invalid.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '120px 20px 0',
      position: 'relative',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="verification-content" style={{width: '100%', maxWidth: '600px'}}>
          <div className="modern-card" style={{
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
            position: 'relative'
          }}>
            <button 
              onClick={() => setActiveSection('admin')} 
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-user-shield" style={{marginRight: '8px'}}></i>
              Admin Login
            </button>
            <div className="verification-header" style={{
              textAlign: 'center',
              marginBottom: '30px',
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '10px',
                textShadow: '0 2px 10px rgba(102, 126, 234, 0.3)'
              }}>
                Certificate Verification
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6'
              }}>
                Enter your certificate number to verify its authenticity.
              </p>
            </div>
            <div className="verify-form">
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  Certificate Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Certificate Number (e.g. CERT123456...)"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  className="cert-input"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
              </div>
              <button
                onClick={handleVerify}
                disabled={loading}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  color: 'white',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => !loading && (e.target.style.transform = 'translateY(0)')}
              >
                {loading ? '🔍 Verifying...' : '✅ Verify Certificate'}
              </button>
            </div>

            {error && (
              <div className="error-message" style={{
                marginTop: '20px',
                padding: '15px',
                background: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 107, 107, 0.3)',
                borderRadius: '10px',
                color: '#ff6b6b',
                textAlign: 'center',
                animation: 'shake 0.5s ease-in-out'
              }}>
                ❌ {error}
              </div>
            )}

            {certificate && (
              <div className="certificate-details" style={{
                marginTop: '30px',
                padding: '25px',
                background: 'rgba(46, 204, 113, 0.1)',
                border: '1px solid rgba(46, 204, 113, 0.3)',
                borderRadius: '15px',
                animation: 'fadeInUp 0.6s ease-out'
              }}>
                <h3 style={{
                  color: '#2ecc71',
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}>
                  ✅ Certificate Verified Successfully
                </h3>
                <div className="cert-info" style={{
                  display: 'grid',
                  gap: '12px'
                }}>
                  <div className="cert-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <span className="cert-label" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Certificate Number:</span>
                    <span className="cert-value" style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{certificate.certificateNumber}</span>
                  </div>
                  <div className="cert-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <span className="cert-label" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Student Name:</span>
                    <span className="cert-value" style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{certificate.studentName}</span>
                  </div>
                  <div className="cert-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <span className="cert-label" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Course:</span>
                    <span className="cert-value" style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{certificate.course}</span>
                  </div>
                  <div className="cert-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <span className="cert-label" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Completion Date:</span>
                    <span className="cert-value" style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{new Date(certificate.completionDate).toLocaleDateString()}</span>
                  </div>
                  <div className="cert-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <span className="cert-label" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Grade:</span>
                    <span className="cert-value" style={{
                      fontWeight: '700',
                      color: certificate.grade === 'A+' || certificate.grade === 'A' ? '#2ecc71' :
                             certificate.grade === 'B+' || certificate.grade === 'B' ? '#f39c12' : '#e74c3c'
                    }}>{certificate.grade}</span>
                  </div>
                  <div className="cert-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <span className="cert-label" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Issued By:</span>
                    <span className="cert-value" style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Technotech Nova Solutions</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </section>
  );
};

export default PublicVerification;