import React from 'react';

export default function CTA() {
  return (
    <div style={{
      backgroundColor: '#0a1428',
      color: 'white',
      padding: '5rem 2rem',
      margin: '0 auto'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          color: 'var(--gold)', 
          marginBottom: '1rem', 
          fontSize: '2rem',
          fontFamily: 'var(--font-heading)'
        }}>
          Ready to Build for the Ummah?
        </h2>
        
        <p style={{ 
          marginBottom: '2rem', 
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: 'white',
          opacity: 0.95
        }}>
          Join 200+ Muslim developers across the country. Be part of a community that grows together, codes together, and prays together.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <a
            href="#register"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--prussian-blue)',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
            }}
          >
            JOIN NSDA NOW
          </a>
          
          <a 
            href="https://t.me/NejmAskBot" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: '2px solid var(--gold)',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--gold)';
              e.target.style.color = 'var(--prussian-blue)';
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }}
          >
            TELEGRAM SUPPORT
          </a>
        </div>
      </div>
    </div>
  );
}