import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Move sections OUTSIDE component to prevent recreation on every render
const sections = ['about', 'what-we-do', 'mentorship', 'projects', 'nujum', 'leadership'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  // Track scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll for homepage only
  useEffect(() => {
    if (location.pathname !== '/') {
      const timer = setTimeout(() => {
        setActiveSection('');
      }, 0);
      return () => clearTimeout(timer);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(elementId);
      window.history.pushState(null, '', `/#${elementId}`);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      window.history.pushState(null, '', '/');
    }
  };

  const navigateToHomeAndScroll = (elementId) => {
    if (location.pathname !== '/') {
      navigate(`/#${elementId}`);
    } else {
      scrollToSection(elementId);
    }
  };

  const isActive = () => {
    if (location.pathname === '/register') return 'register';
    if (location.pathname === '/') {
      if (activeSection) return activeSection;
      return 'home';
    }
    return null;
  };

  const active = isActive();

  return (
    <nav style={{ 
      backgroundColor: 'white',
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      width: '100%'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        
        {/* Logo with nsda.png from public folder */}
        <div onClick={handleHomeClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="/nsda.png" 
            alt="NSDA Logo" 
            style={{ 
              height: '45px', 
              width: 'auto',
              display: 'block'
            }}
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            color: '#013463', 
            letterSpacing: '1px',
            display: 'block'
          }}>NSDA</span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button onClick={handleHomeClick} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: active === 'home' ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Home</button>
          <button onClick={() => navigateToHomeAndScroll('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: (active === 'about' && location.pathname === '/') ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>About</button>
          <button onClick={() => navigateToHomeAndScroll('what-we-do')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: (active === 'what-we-do' && location.pathname === '/') ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>What We Do</button>
          <button onClick={() => navigateToHomeAndScroll('mentorship')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: (active === 'mentorship' && location.pathname === '/') ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Mentorship</button>
          <button onClick={() => navigateToHomeAndScroll('projects')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: (active === 'projects' && location.pathname === '/') ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Projects</button>
          <button onClick={() => navigateToHomeAndScroll('nujum')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: (active === 'nujum' && location.pathname === '/') ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Nujum</button>
          <button onClick={() => navigateToHomeAndScroll('leadership')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: (active === 'leadership' && location.pathname === '/') ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Leadership</button>
          <Link to="/register" style={{ backgroundColor: '#DDA23A', color: '#013463', padding: '8px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }} onMouseEnter={(e) => e.target.style.opacity = '0.85'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', color: '#013463' }} className="mobile-menu-btn">☰</button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{ padding: '16px 24px', borderTop: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: 'white' }}>
          <button onClick={() => { handleHomeClick(); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#000000', fontWeight: '500', padding: '8px 0' }}>Home</button>
          <button onClick={() => { navigateToHomeAndScroll('about'); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#000000', fontWeight: '500', padding: '8px 0' }}>About</button>
          <button onClick={() => { navigateToHomeAndScroll('what-we-do'); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#000000', fontWeight: '500', padding: '8px 0' }}>What We Do</button>
          <button onClick={() => { navigateToHomeAndScroll('mentorship'); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#000000', fontWeight: '500', padding: '8px 0' }}>Mentorship</button>
          <button onClick={() => { navigateToHomeAndScroll('projects'); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#000000', fontWeight: '500', padding: '8px 0' }}>Projects</button>
          <button onClick={() => { navigateToHomeAndScroll('nujum'); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#000000', fontWeight: '500', padding: '8px 0' }}>Nujum</button>
          <button onClick={() => { navigateToHomeAndScroll('leadership'); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#000000', fontWeight: '500', padding: '8px 0' }}>Leadership</button>
          <Link to="/register" style={{ backgroundColor: '#DDA23A', color: '#013463', padding: '10px', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }} onClick={() => setIsMenuOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}