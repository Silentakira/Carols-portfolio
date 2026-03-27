'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HighlighterTextProps {
  text: string;
  className?: string;
}

export default function HighlighterText({ text, className = '' }: HighlighterTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => {
        const isHighlighted = hoveredIndex !== null && Math.abs(index - hoveredIndex) <= 3;
        const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 0;
        const opacity = hoveredIndex !== null ? (isHighlighted ? 1 : 0.2) : 1;

        return (
          <motion.span
            key={index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
              display: 'inline-block',
              padding: '2px 4px',
              margin: '0 2px',
              borderRadius: '2px',
              background: isHighlighted
                ? 'rgba(244, 143, 177, 0.4)'
                : 'transparent',
              transition: 'all 0.3s ease',
              cursor: 'none',
              opacity
            }}
            whileHover={{ scale: 1.05 }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
