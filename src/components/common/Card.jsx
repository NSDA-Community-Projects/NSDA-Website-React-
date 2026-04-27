import React from 'react';

const baseStyle = {
  display: 'block',
  backgroundColor: 'var(--white)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid rgba(1, 52, 99, 0.08)',
  boxShadow: '0 8px 22px rgba(1, 52, 99, 0.08)',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
};

export default function Card({
  children,
  href,
  className = '',
  padding = '1.25rem',
  hover = true,
  style = {},
  ...props
}) {
  const cardStyle = {
    ...baseStyle,
    padding,
    ...style
  };

  const interactiveProps = hover
    ? {
        onMouseEnter: (event) => {
          event.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
          event.currentTarget.style.boxShadow = '0 14px 28px rgba(1, 52, 99, 0.16)';
        },
        onMouseLeave: (event) => {
          event.currentTarget.style.transform = 'none';
          event.currentTarget.style.boxShadow = baseStyle.boxShadow;
        }
      }
    : {};

  if (href) {
    return (
      <a href={href} className={className} style={cardStyle} {...interactiveProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <div className={className} style={cardStyle} {...interactiveProps} {...props}>
      {children}
    </div>
  );
}
