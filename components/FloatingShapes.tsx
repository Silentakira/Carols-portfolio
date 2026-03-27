'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const shapes = [
  { size: 300, top: '10%', left: '5%', duration: 20, delay: 0 },
  { size: 200, top: '60%', left: '85%', duration: 25, delay: 2 },
  { size: 150, top: '80%', left: '15%', duration: 18, delay: 4 },
  { size: 250, top: '30%', left: '90%', duration: 22, delay: 1 },
  { size: 180, top: '70%', left: '50%', duration: 28, delay: 3 },
  { size: 120, top: '20%', left: '70%', duration: 24, delay: 5 },
];

export default function FloatingShapes() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="floating-shapes-container">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
