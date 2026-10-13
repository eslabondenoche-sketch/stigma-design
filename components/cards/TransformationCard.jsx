import React from 'react';

export function TransformationCard({ beforeSlot, afterSlot, caption, stylist }) {
  return (
    <div style={{
      background: 'var(--charcoal)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      fontFamily: 'var(--font-sans)', width: 280, boxShadow: 'var(--shadow-card-lg)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative', aspectRatio: '1', background: '#3A3A3A' }}>
          {beforeSlot}
          <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 10, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: '#FAF7F2', background: 'rgba(30,30,30,0.55)', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>Antes</span>
        </div>
        <div style={{ position: 'relative', aspectRatio: '1', background: '#3A3A3A' }}>
          {afterSlot}
          <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 10, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: '#1E1E1E', background: '#F8F058', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>Después</span>
        </div>
      </div>
      <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ color: 'var(--bone)', fontSize: 14, lineHeight: 'var(--lh-body)' }}>{caption}</div>
        {stylist && <div style={{ color: '#C9C4B9', fontSize: 11, letterSpacing: 'var(--tracking-wide)' }}>Color por {stylist} ✦</div>}
      </div>
    </div>
  );
}
