import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#whatwedo' },
    { name: 'Projects', href: '#projects' },
    { name: 'Nujum', href: '#nujum' },
    { name: 'Leadership', href: '#leadership' }
  ];
  
  const teamLinks = [
    { name: 'Content Team', href: '#content' },
    { name: 'Production Team', href: '#production' },
    { name: 'Communication Team', href: '#communication' },
    { name: 'Project Team', href: '#project' },
    { name: 'Technical Team', href: '#technical' }
  ];
  
  return (
    <footer style={{ 
      backgroundColor: 'var(--prussian-blue)', 
      color: 'white',
      padding: '4rem 0 2rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h2 style={{ color: 'var(--gold)', marginBottom: '0.75rem', fontSize: '1.5rem' }}>
              NSDA
            </h2>
            <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>
              Nejm Student Developers Association
            </p>
            <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.75rem' }}>
              Empowering Muslim students to innovate, grow, and contribute meaningfully to the Ummah through technology.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gold)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                  <a href={link.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gold)' }}>Core Teams</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {teamLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                  <a href={link.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gold)' }}>Connect</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              Questions? Reach us on Telegram:
            </p>
            <a href="https://t.me/NejmAskBot" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.9rem' }}>
              📱 @NejmAskBot
            </a>
            
            <div style={{ marginTop: '1rem' }}>
              <a href="https://t.me/nsda_community" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                textDecoration: 'none',
                color: 'white',
                marginRight: '0.5rem'
              }}>
                Telegram
              </a>
              <a href="https://github.com/NSDA-Community-Projects" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                textDecoration: 'none',
                color: 'white'
              }}>
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.75rem',
          opacity: 0.6
        }}>
          <p>© {currentYear} Nejm Student Developers Association. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Empowering Muslim students to innovate, grow, and contribute meaningfully to the Ummah through technology.</p>
        </div>
      </div>
    </footer>
  );
}