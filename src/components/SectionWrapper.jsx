import React from 'react';

export default function SectionWrapper({ 
  children, 
  id, 
  className = '', 
  backgroundColor = 'white' 
}) {
  const bgColor = backgroundColor === 'cloud' ? '#F3F3FF' : 'white';
  
  return (
    <section 
      id={id} 
      className={className}
      style={{ 
        backgroundColor: bgColor,
        padding: '4rem 0'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {children}
      </div>
    </section>
  );
}
