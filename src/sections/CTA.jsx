import React from 'react';
import SectionWrapper from './common/SectionWrapper';

export default function CTA() {
  return (
    <SectionWrapper id="join" backgroundColor="white">
      <div style={{
        textAlign: 'center',
        backgroundColor: 'var(--prussian-blue)',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '1rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          color: 'var(--gold)', 
          marginBottom: '1rem', 
          fontSize: '2.5rem'
        }}>
          Build technology with purpose.
        </h2>
        <h2 style={{ 
          color: 'white', 
          marginBottom: '1.5rem', 
          fontSize: '2rem'
        }}>
          Grow with faith. Serve the Ummah.
        </h2>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://t.me/nsda_community" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--prussian-blue)',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Join NSDA
          </a>
          <a 
            href="#register" 
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              border: '2px solid var(--gold)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Register
          </a>
        </div>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
          Questions? Reach us on Telegram via{' '}
          <a href="https://t.me/NejmAskBot" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
            @NejmAskBot
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}