import React, { useState } from 'react';
import axios from 'axios';

const InternshipApplyForm = () => {
  const [form, setForm] = useState({ name: '', domain: '', resume: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await axios.post('/api/internships/apply', form);
      setSuccess(res.data.message || 'Application sent!');
      setForm({ name: '', domain: '', resume: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send application.');
    }
    setLoading(false);
  };

  return (
    <div className="modern-card" style={{ maxWidth: 500, margin: '0 auto', marginTop: 40 }}>
      <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Apply for Internship</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-input" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Domain</label>
          <input type="text" name="domain" value={form.domain} onChange={handleChange} required className="form-input" placeholder="e.g. Frontend, Backend, UI/UX..." />
        </div>
        <div className="form-group">
          <label>Resume (Google Drive Link)</label>
          <input type="url" name="resume" value={form.resume} onChange={handleChange} required className="form-input" placeholder="Paste your resume link" />
        </div>
        {success && <div style={{ color: 'var(--success)', marginBottom: 12 }}>{success}</div>}
        {error && <div style={{ color: 'var(--danger)', marginBottom: 12 }}>{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Sending...' : 'Apply Now'}
        </button>
      </form>
    </div>
  );
};

export default InternshipApplyForm;
