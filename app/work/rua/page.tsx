'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function RuaSeries() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <motion.h1 className="series-header" {...fadeUp}>
        Rua
      </motion.h1>

      <motion.div
        className="series-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="bilingual-text">
          <span className="lang-en">[EN] A collection of street photography capturing the essence of urban life. Through these images, I explore the poetry of everyday moments — the fleeting interactions, the quiet solitude, and the vibrant energy that pulses through the city streets.</span>
        </p>
        <p className="bilingual-text">
          <span className="lang-es">[ES] Una colección de fotografía callejera que captura la esencia de la vida urbana. A través de estas imágenes, exploro la poesía de los momentos cotidianos — las interacciones efímeras, la soledad tranquila y la energía vibrante que pulsa por las calles de la ciudad.</span>
        </p>
      </motion.div>

      <motion.div
        className="series-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        <div style={{ gridColumn: 'span 2', gridRow: 'span 2', background: 'linear-gradient(145deg, #fce4ec, #f06292)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f06292, #d81b60)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f8bbd0, #e91e63)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #fce4ec, #f8bbd0)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f48fb1, #ec407a)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f06292, #f48fb1)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #fce4ec, #ffb6c1)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f8bbd0, #f06292)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f48fb1, #fce4ec)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #e91e63, #d81b60)', borderRadius: '2px' }}></div>
      </motion.div>
    </main>
  );
}
