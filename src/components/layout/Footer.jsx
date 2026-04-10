import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#whatwedo' },
    { name: 'Nujum', href: '#nujum' }
  ];

  const resourceLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
  ];

  const socialLinks = [
    { name: 'Telegram', href: 'https://t.me/nsda_community', icon: '💬', color: '#26A5E4' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/nsda', icon: '🔗', color: '#0077B5' },
    { name: 'YouTube', href: 'https://youtube.com/@nsda', icon: '🎙️', color: '#FF0000' },
  ];

  return (
    <footer style={{ 
      backgroundColor: '#0a0f1a',
      color: 'rgba(255,255,255,0.9)',
      padding: '4rem 0 2rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Logo & Description */}
          <div>
            <h2 style={{ color: 'var(--gold)', marginBottom: '0.75rem', fontSize: '1.8rem' }}>
              NSDA
            </h2>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
              Empowering Muslim student developers to achieve technical excellence through faith-centered collaboration.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gold)' }}>NAVIGATION</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href={link.href} 
                    style={{ 
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--gold)';
                      e.target.style.paddingLeft = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.8)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gold)' }}>RESOURCES</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {resourceLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href={link.href} 
                    style={{ 
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--gold)';
                      e.target.style.paddingLeft = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.8)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Links */}
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gold)' }}>CONNECT WITH US</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {socialLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = link.color;
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.8)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Sisters Only Section */}
            <div style={{ 
              marginTop: '1.5rem', 
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPH5aY0OimzAYIL49Ks-tnJhZLkE8F9eVFiZWyPGfb0rbAZA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255,255,255,0.9)';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>❤️</span>
                Sisters only: Join our private space
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            © {currentYear} Nejm Student Developers Association. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.5)' }}>
            <span>🇪🇹</span>
            <span>BUILT FOR THE UMMAH</span>
            <span>🤲</span>
            <span>ALHAMDULILLAH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}