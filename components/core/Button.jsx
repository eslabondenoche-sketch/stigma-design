import React from 'react';

export function Button({ children, variant = 'primary', size = 'md', icon, disabled, onClick }) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13 },
    md: { padding: '12px 22px', fontSize: 15 },
    lg: { padding: '15px 28px', fontSize: 16 },
  };
  const variants = {
    primary: { background: 'var(--cta-bg)', color: 'var(--cta-text)', border: 'none' },
    dark: { background: 'var(--charcoal)', color: 'var(--bone)', border: 'none' },
    outline: { background: 'transparent', color: 'var(--charcoal)', border: '1.5px solid var(--charcoal)' },
    ghost: { background: 'transparent', color: 'var(--charcoal)', border: 'none' },
  };
  const style = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
    ...sizes[size],
    ...variants[variant],
  };
  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {icon}{children}
    </button>
  );
}
