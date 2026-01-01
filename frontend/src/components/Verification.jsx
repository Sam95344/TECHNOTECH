
import React, { useState } from 'react';
import axios from 'axios';
import CodeCompiler from './CodeCompiler';

const Verification = () => {
  // Only verification tab now, admin login will be in corner
  const [certificateNumber, setCertificateNumber] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    setError('');
    setCertificate(null);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/certificates/${certificateNumber}`);
      setCertificate(response.data);
    } catch (err) {
      setError('Certificate not found or an error occurred.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-spacing" style={{ minHeight: '100vh', background: 'var(--bg-body)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 340px', minWidth: 320, maxWidth: 600 }}>
            <div className="modern-card" style={{ padding: 36, borderRadius: 22, boxShadow: 'var(--shadow-glow)' }}>
              <h1 style={{ textAlign: 'center', marginBottom: 8, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certificate Verification</h1>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 28 }}>Verify student certifications by certificate number</p>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <input
                  type="text"
                  placeholder="Enter Certificate Number"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  className="cert-input"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.07)',
                    color: 'var(--text-main)',
                    fontSize: 16,
                    outline: 'none',
                    boxShadow: 'none',
                    transition: 'var(--transition)'
                  }}
                />
                <button onClick={handleVerify} disabled={loading} className="btn btn-primary" style={{ borderRadius: 10, minWidth: 120 }}>
                  {loading ? 'Verifying...' : 'Verify'}
                </button>
              </div>
              {error && <div className="error-message" style={{ color: 'var(--danger)', marginBottom: 12 }}>{error}</div>}
              {certificate && (
                <div className="certificate-details" style={{ marginTop: 24, background: 'rgba(17,24,39,0.7)', borderRadius: 16, padding: 24, border: 'var(--glass-border)', boxShadow: '0 2px 12px rgba(59,130,246,0.08)' }}>
                  <h3 style={{ marginBottom: 16, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certificate Details</h3>
                  <div className="cert-info" style={{ color: 'var(--text-main)' }}>
                    <p><strong>Certificate Number:</strong> {certificate.certificateNumber}</p>
                    <p><strong>Student Name:</strong> {certificate.studentName}</p>
                    <p><strong>Course:</strong> {certificate.course}</p>
                    <p><strong>Completion Date:</strong> {new Date(certificate.completionDate).toLocaleDateString()}</p>
                    <p><strong>Grade:</strong> {certificate.grade}</p>
                    <p><strong>Issued By:</strong> {certificate.issuedBy}</p>
                  </div>
                </div>
              )}
              <div style={{ marginTop: 40 }}>
                <CodeCompiler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}