import React from 'react';
import { motion } from 'framer-motion';

interface MusicNoteProps {
  symbol: string;
  size: string;
  top: string;
  left: string;
  delay: number;
}

export const MusicNote: React.FC<MusicNoteProps> = ({ symbol, size, top, left, delay }) => {
  return (
    <motion.div 
      className={`musical-note ${size}`} 
      style={{ top, left }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 0.15, 
        y: [0, -15, 0],
      }}
      transition={{
        delay,
        y: {
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
    >
      {symbol}
    </motion.div>
  );
};
