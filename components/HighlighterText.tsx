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
    <span className={className} style={{ display: 'inline-block' }}>
      {words.map((word, index) => {
        const isHighlighted = hoveredIndex !== null && Math.abs(index - hoveredIndex) <= 1;
        const opacity = hoveredIndex !== null ? (isHighlighted ? 1 : 0.2) : 1;

        return (
          <span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              display: 'inline',
              padding: '2px 4px',
              margin: '0 1px',
              transition: 'all 0.3s ease',
              cursor: 'none',
              opacity,
              background: isHighlighted
                ? 'linear-gradient(180deg, rgba(244, 143, 177, 0.5) 0%, rgba(244, 143, 177, 0.3) 100%)'
                : 'transparent',
              backgroundClip: 'padding-box',
              borderRadius: '2px'
            }}
          >
            {word}{' '}
          </span>
        );
      })}
    </span>
  );
}
