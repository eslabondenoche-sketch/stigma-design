import React from 'react';

export function SparkleAccent({ color = 'lemon', size = 24 }) {
  const colors = { lemon: '#F8F058', lilac: '#E098D8', magenta: '#E868A0', lime: '#E0F068' };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill={colors[color] || colors.lemon} />
    </svg>
  );
}
