import React from 'react';

export function Badge({ children, tone = 'lemon', variant = 'solid' }) {
  const tones = {
    lemon: '#F8F058', lilac: '#E098D8', magenta: '#E868A0', lime: '#E0F068', charcoal: '#1E1E1E',
  };
  const c = tones[tone] || tones.lemon;
  const solid = { background: c, color: '#1E1E1E' };
  const outline = { background: 'transparent', color: tone === 'charcoal' ? '#1E1E1E' : c, border: `1.5px solid ${c}` };
  return (
    <span style={{
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
      display: 'inline-block',
      ...(variant === 'solid' ? solid : outline),
    }}>{children}</span>
  );
}
