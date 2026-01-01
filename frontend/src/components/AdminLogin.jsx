import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ setActiveSection, setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/admin/login', { username, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setError('');
        setIsAuthenticated(true);
        setActiveSection('admin');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'An error occurred');
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
      <div style={{width: '100%', maxWidth: '500px'}}>
          <div className="modern-card" style={{
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Admin Login
              </h2>
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-primary)' }}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
                placeholder="Enter username"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-primary)' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter password"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            {error && (
              <div className="error-message" style={{
                marginBottom: '20px',
                padding: '15px',
                background: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 107, 107, 0.3)',
                borderRadius: '10px',
                color: '#ff6b6b',
                textAlign: 'center',
              }}>
                {error}
              </div>
            )}
            <button
              onClick={handleLogin}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Login
            </button>
          </div>
        </div>
    </section>
  );
};

export default AdminLogin;
