'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function RuaSeries() {
  const photos = Array.from({ length: 10 }, (_, i) => i + 1);

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
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0.75rem',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        {photos.map((photo, index) => (
          <div
            key={photo}
            style={{
              aspectRatio: '1',
              background: `linear-gradient(145deg, ${[
                '#fce4ec, #f06292',
                '#f06292, #d81b60',
                '#f8bbd0, #e91e63',
                '#fce4ec, #f8bbd0',
                '#f48fb1, #ec407a',
                '#f06292, #f48fb1',
                '#fce4ec, #ffb6c1',
                '#f8bbd0, #f06292',
                '#f48fb1, #fce4ec',
                '#e91e63, #d81b60'
              ][index]})`,
              border: '1px solid rgba(244, 143, 177, 0.2)',
              borderRadius: '2px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.75rem',
              fontWeight: '300',
              letterSpacing: '0.05em'
            }}
          >
            {photo}
          </div>
        ))}
      </motion.div>
    </main>
  );
}
