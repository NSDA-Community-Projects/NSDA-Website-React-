import React from 'react';

export default function CTA() {
  return (
    <div style={{
      backgroundColor: '#0a1428',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          color: '#DDA23A', 
          marginBottom: '20px', 
          fontSize: '36px',
          fontFamily: 'var(--font-heading)',
          fontWeight: '600'
        }}>
          Ready to Build for the Ummah?
        </h2>
        
        <p style={{ 
          marginBottom: '40px', 
          fontSize: '18px',
          lineHeight: '1.6',
          color: '#FFFFFF',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
              Join 200+ Muslim developers across the country. Be part of a community that grows together, codes together, and prays together.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <a
            href="https://t.me/nsda_community"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#DDA23A',
              color: '#0a1428',
              padding: '14px 32px',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '16px',
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
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '16px',
              border: '2px solid #DDA23A',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#DDA23A';
              e.target.style.color = '#0a1428';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#FFFFFF';
              e.target.style.transform = 'scale(1)';
            }}
          >
            TELEGRAM SUPPORT
          </a>
        </div>
      </div>
    </div>
  );
}