import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  text: string;
  className?: string;
}

export const GradientHeading: React.FC<GradientHeadingProps> = ({ text, className }) => {
  return (
    <span className={cn('gradient-text', className)}>
      {text}
    </span>
  );
};
