import React from 'react';
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'lemon' | 'lilac' | 'magenta' | 'lime' | 'charcoal';
  variant?: 'solid' | 'outline';
}
