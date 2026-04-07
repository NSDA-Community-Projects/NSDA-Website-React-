import React from 'react';

export default function SectionWrapper({ 
  children, 
  id, 
  className = '', 
  backgroundColor = 'white' 
}) {
  const bgColor = backgroundColor === 'cloud' ? 'var(--cloud-break)' : 'white';
  
  return (
    <section 
      id={id} 
      className={className}
      style={{ 
        backgroundColor: bgColor,
        padding: '4rem 0'
      }}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}