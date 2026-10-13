import React from 'react';

export function ScallopedFrame({ children, tone = 'lilac', size = 220 }) {
  const tones = { lilac: '#E098D8', magenta: '#E868A0', lemon: '#F8F058', lime: '#E0F068', charcoal: '#1E1E1E' };
  const clip = 'polygon(50% 0%,58% 4%,66% 0%,72% 6%,80% 4%,84% 12%,92% 12%,92% 20%,100% 24%,96% 32%,100% 40%,94% 46%,96% 54%,88% 58%,90% 66%,82% 68%,80% 76%,72% 74%,66% 80%,58% 76%,50% 82%,42% 76%,34% 80%,28% 74%,20% 76%,18% 68%,10% 66%,12% 58%,4% 54%,8% 46%,0% 40%,6% 32%,2% 24%,10% 20%,10% 12%,18% 12%,22% 4%,30% 6%,36% 0%,42% 4%)';
  return (
    <div style={{
      width: size, height: size, background: tones[tone] || tones.lilac,
      clipPath: clip, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}
