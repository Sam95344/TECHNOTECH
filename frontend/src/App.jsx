import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import About from './components/About';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PublicVerification from './components/PublicVerification';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import Careers from './components/Careers';
import FAQs from './components/FAQs';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import WebDevelopment from './components/WebDevelopment';
import MobileDevelopment from './components/MobileDevelopment';
import UIDesign from './components/UIDesign';
import DigitalMarketing from './components/DigitalMarketing';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveSection('home');
    window.location.hash = '#home';
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <WhyChooseUs />
          </>
        );
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'internship':
        return <Internship />;
      case 'contact':
        return <Contact />;
      case 'verify':
        return <PublicVerification setActiveSection={setActiveSection} />;
      case 'admin':
        return isAuthenticated ? (
          <AdminDashboard setActiveSection={setActiveSection} handleLogout={handleLogout} />
        ) : (
          <AdminLogin
            setActiveSection={setActiveSection}
            setIsAuthenticated={setIsAuthenticated}
          />
        );
      case 'careers':
        return <Careers />;
      case 'faqs':
        return <FAQs />;
      case 'terms':
        return <Terms />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'refund':
        return <RefundPolicy />;
      case 'webdev':
        return <WebDevelopment />;
      case 'mobiledev':
        return <MobileDevelopment />;
      case 'uidesign':
        return <UIDesign />;
      case 'digitalmarketing':
        return <DigitalMarketing />;
      default:
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <WhyChooseUs />
          </>
        );
    }
  };

  return (
    <div className="App">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;