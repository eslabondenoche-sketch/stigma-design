import React from 'react';

export function BurstShape({ tone = 'lime', size = 320, points = 12, rotation = 0 }) {
  const tones = { lemon: '#F8F058', lilac: '#E098D8', magenta: '#E868A0', lime: '#E0F068', charcoal: '#1E1E1E' };
  const c = tones[tone] || tones.lime;
  const outerR = 50, innerR = 38;
  let d = '';
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = (Math.PI / points) * i - Math.PI / 2;
    const x = 50 + r * Math.cos(a);
    const y = 50 + r * Math.sin(a);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2) + ' ';
  }
  d += 'Z';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', transform: `rotate(${rotation}deg)` }}>
      <path d={d} fill={c} />
    </svg>
  );
}
