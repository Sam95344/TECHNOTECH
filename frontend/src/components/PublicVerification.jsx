import React, { useState, useEffect } from 'react';

const PublicVerification = () => {
  const [currentView, setCurrentView] = useState('verify');
  const [certInput, setCertInput] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [genId, setGenId] = useState('');
  const [genDate, setGenDate] = useState('');
  const [genName, setGenName] = useState('');
  const [genCourse, setGenCourse] = useState('');
  const [genDuration, setGenDuration] = useState('');
  const [verifyResult, setVerifyResult] = useState(null);

  const showAdminLogin = () => setCurrentView('adminLogin');
  const showVerifyPanel = () => {
    setCurrentView('verify');
    setVerifyResult(null);
  };

  const checkAdminLogin = async (e) => {
    e.preventDefault();
    console.log('Attempting login with:', adminEmail, adminPass);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || '/api';
      console.log('Backend URL:', backendUrl);
      const response = await fetch(`${backendUrl}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: adminEmail.trim(),
          password: adminPass.trim()
        }),
      });
      const data = await response.json();
      console.log('Response:', response.status, data);
      if (response.ok) {
        setCurrentView('adminDashboard');
      } else {
        alert(data.msg || 'Login failed');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('Error logging in');
    }
  };

  const generateCertificate = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || '/api';
      const response = await fetch(`${backendUrl}/certificates/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName: genName,
          course: genCourse,
          completionDate: genDate,
          grade: 'A+', // Default grade
          duration: genDuration
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to generate certificate');
      }
      const certificate = await response.json();
      alert(`Certificate generated with number: ${certificate.certificateNumber}`);
      setGenId('');
      setGenDate('');
      setGenName('');
      setGenCourse('');
      setGenDuration('');
    } catch (error) {
      alert('Error generating certificate');
    }
  };

  const verifyCertificate = async (e) => {
    e.preventDefault();
    setVerifyResult(null);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || '/api';
      const response = await fetch(`${backendUrl}/certificates/verify/${certInput.trim()}`);
      if (!response.ok) {
        setVerifyResult('not found');
        return;
      }
      const certificate = await response.json();
      setVerifyResult({
        id: certificate.certificateNumber,
        name: certificate.studentName,
        course: certificate.course,
        date: new Date(certificate.completionDate).toLocaleDateString(),
        duration: certificate.duration || 'N/A'
      });
    } catch (error) {
      setVerifyResult('not found');
    }
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#020617", color: "#f8fafc", overflowX: "hidden", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, background: "radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "600px", height: "600px", background: "rgba(59, 130, 246, 0.5)", filter: "blur(120px)", borderRadius: "50%", animation: "move 25s infinite alternate", opacity: 0.25, top: "-150px", left: "-150px" }}></div>
        <div style={{ position: "absolute", width: "600px", height: "600px", background: "rgba(139, 92, 246, 0.25)", filter: "blur(120px)", borderRadius: "50%", animation: "move 25s infinite alternate", opacity: 0.25, bottom: "-150px", right: "-150px", animationDelay: "-12s" }}></div>
      </div>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 0 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", width: "100%" }}>
          {currentView === 'verify' && (
            <div className="glass-card">
              <div className="card-sidebar">
                <h2 onDoubleClick={showAdminLogin} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.6rem", lineHeight: 1.1, marginBottom: "25px", background: "linear-gradient(to bottom, #fff, #94a3b8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", cursor: "default", userSelect: "none" }}>Secure<br/>Verification.</h2>
                <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7 }}>Validate achievements instantly through our secure digital ledger system.</p>
                <div style={{ marginTop: "45px", display: "flex", gap: "20px" }}>
                  <i className="fas fa-user-shield" style={{ color: "#10b981", fontSize: "1.6rem" }}></i>
                  <i className="fas fa-database" style={{ color: "#3b82f6", fontSize: "1.6rem" }}></i>
                  <i className="fas fa-check-double" style={{ color: "#8b5cf6", fontSize: "1.6rem" }}></i>
                </div>
              </div>
              <div className="card-content">
                <form onSubmit={verifyCertificate}>
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Certificate Number</label>
                    <input type="text" value={certInput} onChange={(e) => setCertInput(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} placeholder="NS-2025-XXXX" required />
                  </div>
                  <button type="submit" style={{ width: "100%", padding: "22px", borderRadius: "20px", border: "none", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", color: "white", fontSize: "1.1rem", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", boxShadow: "0 15px 40px -10px rgba(59, 130, 246, 0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    <i className="fas fa-search"></i> Authenticate
                  </button>
                </form>
                {verifyResult && (
                  <div style={{ marginTop: "40px", animation: "resultShow 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
                    {verifyResult === 'not found' ? (
                      <div style={{ background: "linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(15, 23, 42, 0.9) 100%)", border: "1px solid rgba(244, 63, 94, 0.4)", borderRadius: "30px", padding: "35px", position: "relative", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                        <h4 style={{ color: "#f43f5e", fontFamily: "'Outfit', sans-serif" }}>NOT FOUND</h4>
                        <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>The ID entered does not match our records.</p>
                      </div>
                    ) : (
                      <div style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0.9) 100%)", border: "1px solid rgba(16, 185, 129, 0.4)", borderRadius: "30px", padding: "35px", position: "relative", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                        <div style={{ position: "absolute", top: "-15px", right: "-15px", width: "120px", height: "120px", background: "#10b981", opacity: 0.12, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", transform: "rotate(12deg)" }}>
                          <i className="fas fa-award"></i>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "30px" }}>
                          <i className="fas fa-check-circle" style={{ color: "#10b981", fontSize: "2rem" }}></i>
                          <h4 style={{ color: "#10b981", fontFamily: "'Outfit', sans-serif" }}>VERIFIED</h4>
                        </div>
                        <div className="result-grid">
                          <div><label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginBottom: "6px", fontWeight: 700, letterSpacing: "1px" }}>Name</label><p style={{ fontSize: "1rem", fontWeight: 600, color: "white" }}>{verifyResult.name}</p></div>
                          <div><label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginBottom: "6px", fontWeight: 700, letterSpacing: "1px" }}>Certificate Number</label><p style={{ fontSize: "1rem", fontWeight: 600, color: "white", fontFamily: "'JetBrains Mono'" }}>{verifyResult.id}</p></div>
                          <div><label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginBottom: "6px", fontWeight: 700, letterSpacing: "1px" }}>Domain</label><p style={{ fontSize: "1rem", fontWeight: 600, color: "white" }}>{verifyResult.course}</p></div>
                          <div><label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginBottom: "6px", fontWeight: 700, letterSpacing: "1px" }}>Months</label><p style={{ fontSize: "1rem", fontWeight: 600, color: "white" }}>{verifyResult.duration}</p></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {currentView === 'adminLogin' && (
            <div className="glass-card">
              <div className="card-sidebar" style={{ background: "linear-gradient(165deg, #450a0a 0%, #020617 100%)" }}>
                <h2>Admin<br/>Gateway.</h2>
                <p>Protected area for Nova Solutions management.</p>
              </div>
              <div className="card-content">
                <form onSubmit={checkAdminLogin}>
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Administrator ID</label>
                    <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} placeholder="admin@gmail.com" required />
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Security Key</label>
                    <input type="password" value={adminPass} onChange={(e) => setAdminPass(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} placeholder="••••••••" required />
                  </div>
                  <button type="submit" style={{ width: "100%", padding: "22px", borderRadius: "20px", border: "none", background: "#f43f5e", color: "white", fontSize: "1.1rem", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", boxShadow: "0 15px 35px -10px rgba(244, 63, 94, 0.4)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    <i className="fas fa-unlock-alt"></i> Decrypt Session
                  </button>
                  <span onClick={showVerifyPanel} style={{ display: "block", textAlign: "center", marginTop: "30px", color: "#94a3b8", fontSize: "0.9rem", cursor: "pointer", transition: "color 0.3s" }}>← Exit Gateway</span>
                </form>
              </div>
            </div>
          )}

          {currentView === 'adminDashboard' && (
            <div className="glass-card">
              <div className="card-sidebar" style={{ background: "linear-gradient(165deg, #1e1b4b 0%, #020617 100%)" }}>
                <h2>Record<br/>Issuer.</h2>
                <p>Register new credentials to the digital database.</p>
              </div>
              <div className="card-content">
                <form onSubmit={generateCertificate}>
                  <div className="form-grid">
                    <div style={{ marginBottom: "30px" }}>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Certificate Number</label>
                      <input type="text" value={genId} onChange={(e) => setGenId(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} placeholder="NS-101" required />
                    </div>
                    <div style={{ marginBottom: "30px" }}>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Issue Date</label>
                      <input type="date" value={genDate} onChange={(e) => setGenDate(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} required />
                    </div>
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Full Name</label>
                    <input type="text" value={genName} onChange={(e) => setGenName(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} placeholder="Student Name" required />
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Domain Title</label>
                    <input type="text" value={genCourse} onChange={(e) => setGenCourse(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} placeholder="Domain Name" required />
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Duration</label>
                    <input type="text" value={genDuration} onChange={(e) => setGenDuration(e.target.value)} style={{ width: "100%", background: "rgba(255, 255, 255, 0.04)", border: "2px solid rgba(255, 255, 255, 0.08)", padding: "20px 25px", borderRadius: "20px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", outline: "none" }} placeholder="6 Months" required />
                  </div>
                  <button type="submit" style={{ width: "100%", padding: "22px", borderRadius: "20px", border: "none", background: "#10b981", color: "white", fontSize: "1.1rem", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", boxShadow: "0 15px 35px -10px rgba(16, 185, 129, 0.4)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    <i className="fas fa-plus-square"></i> Publish Record
                  </button>
                  <span onClick={showVerifyPanel} style={{ display: "block", textAlign: "center", marginTop: "30px", color: "#94a3b8", fontSize: "0.9rem", cursor: "pointer", transition: "color 0.3s" }}>Secure Logout</span>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer style={{ padding: "40px 0", textAlign: "center", borderTop: "1px solid rgba(255, 255, 255, 0.1)", color: "#94a3b8", fontSize: "0.85rem", letterSpacing: "1px" }}>
        <p>&copy; 2025 TECHNOTECH NOVA SOLUTIONS</p>
        <p style={{ marginTop: "10px", opacity: 0.5, fontSize: "0.75rem", fontFamily: "'JetBrains Mono'" }}>SYSTEM STATUS: SECURE (v3.2.8)</p>
      </footer>

    </div>
  );
};

export default PublicVerification;