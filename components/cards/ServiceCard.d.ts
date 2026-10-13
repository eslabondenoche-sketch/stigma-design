import React from 'react';
export interface ServiceCardProps {
  title: string;
  description: string;
  /** Icon element — Lucide icon recommended (linear, medium stroke, single ink) */
  icon?: React.ReactNode;
  tone?: 'lemon' | 'lilac' | 'magenta' | 'lime';
}
