
import React, { useState, useEffect } from 'react';
import { getAllCertificates, saveCertificateByNumber, updateCertificateByNumber, deleteCertificateByNumber } from '../firebaseConfig';

const AdminDashboard = ({ setActiveSection, handleLogout }) => {
  // Certificate state
  const [certificates, setCertificates] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    studentName: '',
    course: '',
    completionDate: '',
    grade: ''
  });
  const [loading, setLoading] = useState(true);

  // Service state
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    icon: '',
    order: ''
  });

  // Internship state
  const [internships, setInternships] = useState([]);
  const [newInternship, setNewInternship] = useState({
    title: '',
    type: '',
    duration: '',
    stipend: '',
    description: ''
  });
  const [showInternships, setShowInternships] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [showServices, setShowServices] = useState(false);
  // Edit states
  const [editCertId, setEditCertId] = useState(null);
  const [editCert, setEditCert] = useState({});
  const [editServiceId, setEditServiceId] = useState(null);
  const [editService, setEditService] = useState({});
  const [editInternId, setEditInternId] = useState(null);
  const [editIntern, setEditIntern] = useState({});

  useEffect(() => {
    fetchCertificates();
    fetchServices();
    fetchInternships();
  }, []);

  // Certificate handlers
  const fetchCertificates = async () => {
    try {
      console.log('Fetching all certificates from Firebase...');
      const certificates = await getAllCertificates();
      console.log('Fetched certificates:', certificates);
      setCertificates(certificates);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      setLoading(false);
    }
  };
  const handleGenerateCertificate = async (e) => {
    e.preventDefault();
    try {
      const certificateNumber = 'CERT' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
      console.log('Generated certificate number:', certificateNumber);
      console.log('Certificate data:', { ...newCertificate, issuedBy: 'TechNotech' });
      await saveCertificateByNumber(certificateNumber, { ...newCertificate, issuedBy: 'TechNotech' });
      setNewCertificate({ studentName: '', course: '', completionDate: '', grade: '' });
      fetchCertificates();
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };
  const handleInputChange = (e) => {
    setNewCertificate({ ...newCertificate, [e.target.name]: e.target.value });
  };
  // Edit certificate
  const handleEditCert = (cert) => {
    setEditCertId(cert.certificateNumber);
    setEditCert({ ...cert });
  };
  const handleEditCertChange = (e) => {
    setEditCert({ ...editCert, [e.target.name]: e.target.value });
  };
  const handleUpdateCert = async (certificateNumber) => {
    try {
      await updateCertificateByNumber(certificateNumber, editCert);
      setEditCertId(null);
      fetchCertificates();
    } catch (error) {}
  };
  const handleDeleteCert = async (certificateNumber) => {
    if (!window.confirm('Delete this certificate?')) return;
    try {
      await deleteCertificateByNumber(certificateNumber);
      fetchCertificates();
    } catch (error) {}
  };

  // Service handlers
  const fetchServices = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/services`);
      setServices(response.data);
    } catch (error) {}
  };
  const handleServiceInputChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };
  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/services`, newService);
      setNewService({ title: '', description: '', icon: '', order: '' });
      fetchServices();
    } catch (error) {}
  };
  // Edit service
  const handleEditService = (service) => {
    setEditServiceId(service._id);
    setEditService({ ...service });
  };
  const handleEditServiceChange = (e) => {
    setEditService({ ...editService, [e.target.name]: e.target.value });
  };
  const handleUpdateService = async (id) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/services/${id}`, editService);
      setEditServiceId(null);
      fetchServices();
    } catch (error) {}
  };
  const handleDeleteService = async (id) => {
    if (!window.confirm('Delete this service?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/services/${id}`);
      fetchServices();
    } catch (error) {}
  };

  // Internship handlers
  const fetchInternships = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/internships`);
      setInternships(response.data);
    } catch (error) {}
  };
  const handleInternshipInputChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };
  const handleAddInternship = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/internships`, newInternship);
      setNewInternship({ title: '', type: '', duration: '', stipend: '', description: '' });
      fetchInternships();
    } catch (error) {}
  };
  // Edit internship
  const handleEditIntern = (intern) => {
    setEditInternId(intern._id);
    setEditIntern({ ...intern });
  };
  const handleEditInternChange = (e) => {
    setEditIntern({ ...editIntern, [e.target.name]: e.target.value });
  };
  const handleUpdateIntern = async (id) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/internships/${id}`, editIntern);
      setEditInternId(null);
      fetchInternships();
    } catch (error) {}
  };
  const handleDeleteIntern = async (id) => {
    if (!window.confirm('Delete this internship?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/internships/${id}`);
      fetchInternships();
    } catch (error) {}
  };

  return (
    <section className="section-padding section-spacing">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '8px 16px', background: '#ff6b6b' }}>
            Logout
          </button>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', letterSpacing: '1px', fontWeight: 800, fontSize: '2.2rem', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Admin Dashboard</h2>

        {/* CERTIFICATE SECTION */}
        <div className="modern-card" style={{ marginBottom: '40px', boxShadow: '0 4px 32px rgba(59,130,246,0.10)' }}>
          <h3 style={{ marginBottom: '20px', textAlign: 'center', color: 'var(--primary)' }}>Certificate Management</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <form onSubmit={handleGenerateCertificate}>
                {/* ...existing code for certificate form... */}
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Student Name</label>
                  <input type="text" name="studentName" value={newCertificate.studentName} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Course</label>
                  <input type="text" name="course" value={newCertificate.course} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Completion Date</label>
                  <input type="date" name="completionDate" value={newCertificate.completionDate} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Grade</label>
                  <select name="grade" value={newCertificate.grade} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                    <option value="">Select Grade</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="Pass">Pass</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Generate Certificate
                </button>
              </form>
            </div>
            <div style={{ flex: 2, minWidth: 260 }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Generated Certificates</h4>
              <button className="btn btn-outline" style={{ width: '100%', fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px' }} onClick={() => setShowCertificates((v) => !v)}>
                {showCertificates ? 'Hide' : 'Show'} Generated Certificates <i className={`fas fa-chevron-${showCertificates ? 'up' : 'down'}`}></i>
              </button>
              {showCertificates && (
                loading ? (
                  <p>Loading certificates...</p>
                ) : certificates.length === 0 ? (
                  <p>No certificates generated yet.</p>
                ) : (
                  <div style={{ display: 'grid', gap: '20px' }}>
                    {certificates.map((cert) => (
                      <div key={cert.certificateNumber} className="modern-card" style={{ padding: '20px', background: 'rgba(59,130,246,0.08)', position: 'relative' }}>
                        {editCertId === cert.certificateNumber ? (
                          <>
                            <input type="text" name="studentName" value={editCert.studentName} onChange={handleEditCertChange} style={{ width: '100%', marginBottom: 6 }} />
                            <input type="text" name="course" value={editCert.course} onChange={handleEditCertChange} style={{ width: '100%', marginBottom: 6 }} />
                            <input type="date" name="completionDate" value={editCert.completionDate?.slice(0,10)} onChange={handleEditCertChange} style={{ width: '100%', marginBottom: 6 }} />
                            <select name="grade" value={editCert.grade} onChange={handleEditCertChange} style={{ width: '100%', marginBottom: 6 }}>
                              <option value="">Select Grade</option>
                              <option value="A+">A+</option>
                              <option value="A">A</option>
                              <option value="B+">B+</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="Pass">Pass</option>
                            </select>
                            <button className="btn btn-primary" style={{ marginRight: 8 }} onClick={() => handleUpdateCert(cert.certificateNumber)}>Save</button>
                            <button className="btn btn-outline" onClick={() => setEditCertId(null)}>Cancel</button>
                          </>
                        ) : (
                          <>
                            <h4>{cert.studentName}</h4>
                            <p><strong>Certificate ID:</strong> {cert.certificateNumber}</p>
                            <p><strong>Course:</strong> {cert.course}</p>
                            <p><strong>Completion Date:</strong> {new Date(cert.completionDate).toLocaleDateString()}</p>
                            <p><strong>Grade:</strong> {cert.grade}</p>
                            <button className="btn btn-outline" style={{ marginRight: 8 }} onClick={() => handleEditCert(cert)}>Edit</button>
                            <button className="btn btn-secondary" onClick={() => handleDeleteCert(cert.certificateNumber)}>Delete</button>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* SERVICE SECTION */}
        <div className="modern-card" style={{ marginBottom: '40px', boxShadow: '0 4px 32px rgba(139,92,246,0.10)' }}>
          <h3 style={{ marginBottom: '20px', textAlign: 'center', color: 'var(--accent)' }}>Service Management</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <form onSubmit={handleAddService}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Title</label>
                  <input type="text" name="title" value={newService.title} onChange={handleServiceInputChange} required style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Description</label>
                  <textarea name="description" value={newService.description} onChange={handleServiceInputChange} required rows={3} style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Icon (FontAwesome class)</label>
                  <input type="text" name="icon" value={newService.icon} onChange={handleServiceInputChange} required placeholder="e.g. fas fa-code" style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Order (optional)</label>
                  <input type="number" name="order" value={newService.order} onChange={handleServiceInputChange} style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Add Service
                </button>
              </form>
            </div>
            <div style={{ flex: 2, minWidth: 260 }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--primary)' }}>Current Services</h4>
              <button className="btn btn-outline" style={{ width: '100%', fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px' }} onClick={() => setShowServices((v) => !v)}>
                {showServices ? 'Hide' : 'Show'} Current Services <i className={`fas fa-chevron-${showServices ? 'up' : 'down'}`}></i>
              </button>
              {showServices && (
                services.length === 0 ? (
                  <p>No services added yet.</p>
                ) : (
                  <div style={{ display: 'grid', gap: '20px' }}>
                    {services.map((service) => (
                      <div key={service._id} className="modern-card" style={{ padding: '20px', background: 'rgba(139,92,246,0.08)', position: 'relative' }}>
                        {editServiceId === service._id ? (
                          <>
                            <input type="text" name="title" value={editService.title} onChange={handleEditServiceChange} style={{ width: '100%', marginBottom: 6 }} />
                            <textarea name="description" value={editService.description} onChange={handleEditServiceChange} style={{ width: '100%', marginBottom: 6 }} />
                            <input type="text" name="icon" value={editService.icon} onChange={handleEditServiceChange} style={{ width: '100%', marginBottom: 6 }} />
                            <input type="number" name="order" value={editService.order} onChange={handleEditServiceChange} style={{ width: '100%', marginBottom: 6 }} />
                            <button className="btn btn-primary" style={{ marginRight: 8 }} onClick={() => handleUpdateService(service._id)}>Save</button>
                            <button className="btn btn-outline" onClick={() => setEditServiceId(null)}>Cancel</button>
                          </>
                        ) : (
                          <>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            <p><strong>Icon:</strong> {service.icon}</p>
                            <p><strong>Order:</strong> {service.order}</p>
                            <button className="btn btn-outline" style={{ marginRight: 8 }} onClick={() => handleEditService(service)}>Edit</button>
                            <button className="btn btn-secondary" onClick={() => handleDeleteService(service._id)}>Delete</button>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* INTERNSHIP SECTION */}
        <div className="modern-card" style={{ marginBottom: '40px', boxShadow: '0 4px 32px rgba(16,185,129,0.10)' }}>
          <h3 style={{ marginBottom: '20px', textAlign: 'center', color: 'var(--success)' }}>Internship Management</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <form onSubmit={handleAddInternship}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Title</label>
                  <input type="text" name="title" value={newInternship.title} onChange={handleInternshipInputChange} required style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Type</label>
                  <input type="text" name="type" value={newInternship.type} onChange={handleInternshipInputChange} required placeholder="e.g. Remote, Onsite" style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Duration</label>
                  <input type="text" name="duration" value={newInternship.duration} onChange={handleInternshipInputChange} required placeholder="e.g. 2 months" style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Stipend</label>
                  <input type="text" name="stipend" value={newInternship.stipend} onChange={handleInternshipInputChange} required placeholder="e.g. 5000 INR" style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)' }}>Description</label>
                  <textarea name="description" value={newInternship.description} onChange={handleInternshipInputChange} required rows={3} style={{ width: '100%', padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Add Internship
                </button>
              </form>
            </div>
            <div style={{ flex: 2, minWidth: 260 }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--success)' }}>Registered Internships</h4>
              <div style={{ marginBottom: '10px' }}>
                <button className="btn btn-outline" style={{ width: '100%', fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px' }} onClick={() => setShowInternships((v) => !v)}>
                  {showInternships ? 'Hide' : 'Show'} Registered Internships <i className={`fas fa-chevron-${showInternships ? 'up' : 'down'}`}></i>
                </button>
                {showInternships && (
                  internships.length === 0 ? (
                    <p style={{ color: 'var(--text-muted)' }}>No internships added yet.</p>
                  ) : (
                    <div style={{ maxHeight: 350, overflowY: 'auto', borderRadius: 12, border: '1px solid rgba(16,185,129,0.15)', background: 'rgba(16,185,129,0.04)', padding: 12, marginTop: 8 }}>
                      {internships.map((intern) => (
                        <div key={intern._id} className="modern-card" style={{ padding: '16px', marginBottom: 10, background: 'rgba(16,185,129,0.08)', position: 'relative' }}>
                          {editInternId === intern._id ? (
                            <>
                              <input type="text" name="title" value={editIntern.title} onChange={handleEditInternChange} style={{ width: '100%', marginBottom: 6 }} />
                              <input type="text" name="type" value={editIntern.type} onChange={handleEditInternChange} style={{ width: '100%', marginBottom: 6 }} />
                              <input type="text" name="duration" value={editIntern.duration} onChange={handleEditInternChange} style={{ width: '100%', marginBottom: 6 }} />
                              <input type="text" name="stipend" value={editIntern.stipend} onChange={handleEditInternChange} style={{ width: '100%', marginBottom: 6 }} />
                              <textarea name="description" value={editIntern.description} onChange={handleEditInternChange} style={{ width: '100%', marginBottom: 6 }} />
                              <button className="btn btn-primary" style={{ marginRight: 8 }} onClick={() => handleUpdateIntern(intern._id)}>Save</button>
                              <button className="btn btn-outline" onClick={() => setEditInternId(null)}>Cancel</button>
                            </>
                          ) : (
                            <>
                              <h4>{intern.title}</h4>
                              <p><strong>Type:</strong> {intern.type}</p>
                              <p><strong>Duration:</strong> {intern.duration}</p>
                              <p><strong>Stipend:</strong> {intern.stipend}</p>
                              <p>{intern.description}</p>
                              <button className="btn btn-outline" style={{ marginRight: 8 }} onClick={() => handleEditIntern(intern)}>Edit</button>
                              <button className="btn btn-secondary" onClick={() => handleDeleteIntern(intern._id)}>Delete</button>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;
