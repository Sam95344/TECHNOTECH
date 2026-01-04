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
  const [certs, setCerts] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('technotech_certs');
    if (stored) {
      setCerts(JSON.parse(stored));
    }
  }, []);

  const showAdminLogin = () => setCurrentView('adminLogin');
  const showVerifyPanel = () => {
    setCurrentView('verify');
    setVerifyResult(null);
  };

  const checkAdminLogin = (e) => {
    e.preventDefault();
    const _u = "aWFtc2hhbXNoYWQ4MDg0QGdtYWlsLmNvbQ==";
    const _p = "U2hhbXNoYWRAMjAwNQ==";
    if (btoa(adminEmail) === _u && btoa(adminPass) === _p) {
      setCurrentView('adminDashboard');
    } else {
      alert('Access Refused');
    }
  };

  const generateCertificate = (e) => {
    e.preventDefault();
    const newCerts = { ...certs };
    newCerts[genId] = {
      id: genId,
      name: genName,
      course: genCourse,
      date: genDate,
      duration: genDuration
    };
    setCerts(newCerts);
    localStorage.setItem('technotech_certs', JSON.stringify(newCerts));
    alert('Record Published.');
    setGenId('');
    setGenDate('');
    setGenName('');
    setGenCourse('');
    setGenDuration('');
  };

  const verifyCertificate = (e) => {
    e.preventDefault();
    const record = certs[certInput.trim()];
    setVerifyResult(record || 'not found');
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#020617", color: "#f8fafc", overflowX: "hidden", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, background: "radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "600px", height: "600px", background: "rgba(59, 130, 246, 0.5)", filter: "blur(120px)", borderRadius: "50%", animation: "move 25s infinite alternate", opacity: 0.25, top: "-150px", left: "-150px" }}></div>
        <div style={{ position: "absolute", width: "600px", height: "600px", background: "rgba(139, 92, 246, 0.25)", filter: "blur(120px)", borderRadius: "50%", animation: "move 25s infinite alternate", opacity: 0.25, bottom: "-150px", right: "-150px", animationDelay: "-12s" }}></div>
      </div>

      <header style={{ padding: "40px 0", display: "flex", justifyContent: "center" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "15px", textDecoration: "none", cursor: "pointer" }}>
          <div style={{ width: "50px", height: "50px", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transform: "rotate(-5deg)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 800, letterSpacing: "-1px", color: "white", lineHeight: 1 }}>TECHNOTECH</h1>
            <span style={{ fontSize: "0.8rem", color: "#8b5cf6", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginTop: "5px" }}>NOVA SOLUTIONS</span>
          </div>
        </a>
      </header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 0 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", width: "100%" }}>
          {currentView === 'verify' && (
            <div style={{ background: "rgba(15, 23, 42, 0.75)", backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "40px", width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "380px 1fr", overflow: "hidden", boxShadow: "0 50px 100px -30px rgba(0,0,0,0.8)", animation: "cardFadeIn 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
              <div style={{ background: "linear-gradient(165deg, rgba(30, 41, 59, 0.6) 0%, rgba(2, 6, 23, 0.9) 100%)", padding: "60px 50px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(255, 255, 255, 0.1)", position: "relative" }}>
                <h2 onDoubleClick={showAdminLogin} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.6rem", lineHeight: 1.1, marginBottom: "25px", background: "linear-gradient(to bottom, #fff, #94a3b8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", cursor: "default", userSelect: "none" }}>Secure<br/>Verification.</h2>
                <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7 }}>Validate achievements instantly through our secure digital ledger system.</p>
                <div style={{ marginTop: "45px", display: "flex", gap: "20px" }}>
                  <i className="fas fa-user-shield" style={{ color: "#10b981", fontSize: "1.6rem" }}></i>
                  <i className="fas fa-database" style={{ color: "#3b82f6", fontSize: "1.6rem" }}></i>
                  <i className="fas fa-check-double" style={{ color: "#8b5cf6", fontSize: "1.6rem" }}></i>
                </div>
              </div>
              <div style={{ padding: "60px" }}>
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
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px" }}>
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
            <div style={{ background: "rgba(15, 23, 42, 0.75)", backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "40px", width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "380px 1fr", overflow: "hidden", boxShadow: "0 50px 100px -30px rgba(0,0,0,0.8)", animation: "cardFadeIn 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
              <div style={{ background: "linear-gradient(165deg, #450a0a 0%, #020617 100%)", padding: "60px 50px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <h2>Admin<br/>Gateway.</h2>
                <p>Protected area for Nova Solutions management.</p>
              </div>
              <div style={{ padding: "60px" }}>
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
            <div style={{ background: "rgba(15, 23, 42, 0.75)", backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "40px", width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "380px 1fr", overflow: "hidden", boxShadow: "0 50px 100px -30px rgba(0,0,0,0.8)", animation: "cardFadeIn 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
              <div style={{ background: "linear-gradient(165deg, #1e1b4b 0%, #020617 100%)", padding: "60px 50px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <h2>Record<br/>Issuer.</h2>
                <p>Register new credentials to the digital database.</p>
              </div>
              <div style={{ padding: "60px" }}>
                <form onSubmit={generateCertificate}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
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