'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function ParaVerSeries() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <motion.h1 className="series-header" {...fadeUp}>
        Para ver
      </motion.h1>
      <motion.div 
        className="series-grid series-grid-3x3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        <div style={{ gridColumn: '1 / 3', gridRow: '1', background: 'linear-gradient(145deg, #fce4ec, #f8bbd0)', borderRadius: '2px' }}></div>
        <div style={{ gridColumn: '3', gridRow: '1 / 3', background: 'linear-gradient(145deg, #f06292, #d81b60)', borderRadius: '2px' }}></div>
        <div style={{ gridColumn: '1', gridRow: '2', background: 'linear-gradient(145deg, #f8bbd0, #e91e63)', borderRadius: '2px' }}></div>
        <div style={{ gridColumn: '2', gridRow: '2', background: 'linear-gradient(145deg, #f48fb1, #ec407a)', borderRadius: '2px' }}></div>
        <div style={{ gridColumn: '1 / 3', gridRow: '3', background: 'linear-gradient(145deg, #fce4ec, #f06292)', borderRadius: '2px' }}></div>
        <div style={{ gridColumn: '3', gridRow: '3', background: 'linear-gradient(145deg, #f8bbd0, #ffb6c1)', borderRadius: '2px' }}></div>
      </motion.div>
    </main>
  );
}
