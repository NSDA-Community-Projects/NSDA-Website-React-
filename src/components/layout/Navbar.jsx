import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location]);

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${elementId}`);
      setActiveHash(`#${elementId}`);
    }
  };

  const isActive = (path, hash = null) => {
    if (hash) {
      return activeHash === hash;
    }
    return location.pathname === path && !activeHash;
  };

  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        
        {/* Logo */}
       {/* Logo */}
<Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
  <img 
    src="/src/assets/logo/NSDA-logo.jpg" 
    alt="NSDA Logo" 
    style={{ height: '35px' }}
  />
  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#013463' }}>
    NSDA
  </span>
</Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isActive('/') ? '#000000' : '#000000',
              borderBottom: isActive('/') ? '2px solid #DDA23A' : '2px solid transparent',
              paddingBottom: '4px',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#000000',
              borderBottom: isActive(null, '#about') ? '2px solid #DDA23A' : '2px solid transparent',
              paddingBottom: '4px',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('what-we-do')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#000000',
              borderBottom: isActive(null, '#what-we-do') ? '2px solid #DDA23A' : '2px solid transparent',
              paddingBottom: '4px',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            What We Do
          </button>
          <button
            onClick={() => scrollToSection('nujum')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#000000',
              borderBottom: isActive(null, '#nujum') ? '2px solid #DDA23A' : '2px solid transparent',
              paddingBottom: '4px',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Nujum
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#000000',
              borderBottom: isActive(null, '#projects') ? '2px solid #DDA23A' : '2px solid transparent',
              paddingBottom: '4px',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('leadership')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#000000',
              borderBottom: isActive(null, '#leadership') ? '2px solid #DDA23A' : '2px solid transparent',
              paddingBottom: '4px',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Leadership
          </button>
          <Link
            to="/register"
            style={{
              backgroundColor: '#DDA23A',
              color: '#013463',
              padding: '8px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.85'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{ padding: '16px 24px', borderTop: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link to="/" style={{ color: '#000000', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <a href="#about" style={{ color: '#000000', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#what-we-do" style={{ color: '#000000', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>What We Do</a>
          <a href="#nujum" style={{ color: '#000000', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Nujum</a>
          <a href="#projects" style={{ color: '#000000', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#leadership" style={{ color: '#000000', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Leadership</a>
          <Link to="/register" style={{ backgroundColor: '#DDA23A', color: '#013463', padding: '8px', borderRadius: '8px', textAlign: 'center', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}