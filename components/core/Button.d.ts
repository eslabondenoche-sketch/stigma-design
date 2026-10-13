import React from 'react';
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. primary = lemon CTA, dark = charcoal fill, outline = charcoal ring, ghost = text only */
  variant?: 'primary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
