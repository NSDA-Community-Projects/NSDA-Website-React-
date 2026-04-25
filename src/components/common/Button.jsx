import React from 'react';

const variants = {
  primary: {
    backgroundColor: 'var(--prussian-blue)',
    color: 'var(--white)',
    border: '1px solid var(--prussian-blue)'
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--prussian-blue)',
    border: '1px solid rgba(1, 52, 99, 0.2)'
  }
};

const sizes = {
  sm: {
    fontSize: '0.78rem',
    padding: '0.35rem 0.7rem'
  },
  md: {
    fontSize: '0.92rem',
    padding: '0.5rem 1rem'
  }
};

export default function Button({
  children,
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={className}
      style={{
        borderRadius: '999px',
        fontWeight: 600,
        lineHeight: 1.1,
        fontFamily: 'var(--font-body)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...variants[variant],
        ...sizes[size],
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
