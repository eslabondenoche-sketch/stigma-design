import React from 'react';

export function TestimonialCard({ quote, name, photoSlot }) {
  return (
    <div style={{
      background: 'var(--bone)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)', display: 'flex', gap: 'var(--space-4)', alignItems: 'center',
      fontFamily: 'var(--font-sans)', width: 340,
    }}>
      <div style={{ width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: '#E4DFD5' }}>{photoSlot}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, color: 'var(--charcoal)', lineHeight: 'var(--lh-body)' }}>&ldquo;{quote}&rdquo;</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted-on-light)' }}>— {name}</div>
      </div>
    </div>
  );
}
