'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function PortoSelosSeries() {
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
        <p className="bilingual-text">
          <span className="lang-en">[EN] The Porto Selos is a "personal currency" of 12 stamp-sized photographs created in response to the experience of migration. Born from an exchange of letters with a collector friend, this series replaces official imagery with the visual clichés that define the Porto I inhabit. Mounted in a 20x20 archival frame, the collection elevates the fleeting transit of a stranger into a formal archive of belonging.</span>
        </p>
        <p className="bilingual-text">
          <span className="lang-es">[ES] The Porto Selos es una "moneda personal" compuesta por 12 fotografías en formato de estampilla, creada en respuesta a la experiencia de la migración. Nacida de un intercambio de cartas con una amiga coleccionista, esta serie sustituye la imaginería oficial por los clichés visuales que definen el Porto que habito. Montada en una moldura de 20x20, la colección eleva el tránsito fugaz de una extranjera a un archivo formal de pertenencia.</span>
        </p>
      </motion.div>

      <motion.div
        className="series-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        <div style={{ gridColumn: 'span 2', gridRow: 'span 2', background: 'linear-gradient(145deg, #f48fb1, #ec407a)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f8bbd0, #f48fb1)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #fce4ec, #f8bbd0)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f06292, #d81b60)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #fce4ec, #ffb6c1)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f8bbd0, #e91e63)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f48fb1, #f06292)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #fce4ec, #f48fb1)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f06292, #ec407a)', borderRadius: '2px' }}></div>
        <div style={{ background: 'linear-gradient(145deg, #f8bbd0, #fce4ec)', borderRadius: '2px' }}></div>
      </motion.div>
    </main>
  );
}
