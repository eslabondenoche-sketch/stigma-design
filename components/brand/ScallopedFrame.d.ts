import React from 'react';
export interface ScallopedFrameProps {
  /** Recreates the emblem's wavy scalloped border as a reusable photo/testimonial/highlight container. */
  children?: React.ReactNode;
  tone?: 'lilac' | 'magenta' | 'lemon' | 'lime' | 'charcoal';
  size?: number;
}
