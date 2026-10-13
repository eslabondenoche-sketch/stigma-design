import React from 'react';

export function ServiceCard({ title, description, icon, tone = 'lemon' }) {
  const tones = { lemon: '#F8F058', lilac: '#E098D8', magenta: '#E868A0', lime: '#E0F068' };
  return (
    <div style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)', width: 220,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: tones[tone] || tones.lemon,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E1E1E',
      }}>{icon}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--charcoal)' }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--text-muted-on-light)', lineHeight: 'var(--lh-body)' }}>{description}</div>
    </div>
  );
}
