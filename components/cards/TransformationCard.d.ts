import React from 'react';
export interface TransformationCardProps {
  /** Before-photo slot (image element or placeholder) */
  beforeSlot?: React.ReactNode;
  /** After-photo slot */
  afterSlot?: React.ReactNode;
  caption: string;
  stylist?: string;
}
