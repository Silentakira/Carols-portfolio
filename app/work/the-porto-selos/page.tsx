'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function PortoSelosSeries() {
  const photos = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <motion.h1 className="series-header" {...fadeUp}>
        The Porto Selos
      </motion.h1>

      <motion.div
        className="series-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.p
          className="bilingual-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="lang-en">[EN] The Porto Selos is a "personal currency" of 12 stamp-sized photographs created in response to the experience of migration. Born from an exchange of letters with a collector friend, this series replaces official imagery with the visual clichés that define the Porto I inhabit. Mounted in a 20x20 archival frame, the collection elevates the fleeting transit of a stranger into a formal archive of belonging.</span>
        </motion.p>
        <motion.p
          className="bilingual-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="lang-es">[ES] The Porto Selos es una "moneda personal" compuesta por 12 fotografías en formato de estampilla, creada en respuesta a la experiencia de la migración. Nacida de un intercambio de cartas con una amiga coleccionista, esta serie sustituye la imaginería oficial por los clichés visuales que definen el Porto que habito. Montada en una moldura de 20x20, la colección eleva el tránsito fugaz de una extranjera a un archivo formal de pertenencia.</span>
        </motion.p>
      </motion.div>

      <motion.div
        className="series-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8 + (index * 0.05),
              duration: 0.6,
              ease: [0.2, 0.8, 0.2, 1]
            }}
            whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
            style={{
              aspectRatio: '1',
              background: `linear-gradient(145deg, ${[
                '#f48fb1, #ec407a',
                '#f8bbd0, #f48fb1',
                '#fce4ec, #f8bbd0',
                '#f06292, #d81b60',
                '#fce4ec, #f06292',
                '#f8bbd0, #e91e63',
                '#f48fb1, #f06292',
                '#fce4ec, #f48fb1',
                '#f06292, #ec407a',
                '#f8bbd0, #fce4ec',
                '#e91e63, #d81b60',
                '#f48fb1, #fce4ec'
              ][index % 12]})`,
              border: '1px solid rgba(244, 143, 177, 0.2)',
              borderRadius: '2px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none'
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + (index * 0.05) }}
              style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.75rem', fontWeight: '300', letterSpacing: '0.05em' }}
            >
              {photo}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
