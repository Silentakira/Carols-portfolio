'use client';

import { motion } from 'framer-motion';
import LangToggle from '@/components/LangToggle';
import HighlighterText from '@/components/HighlighterText';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function AboutPage() {
  return (
    <main className="pt-48 pb-16 min-h-screen">
      <section id="about" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          style={{
            width: '300px',
            height: '300px',
            margin: '0 auto 3rem',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #fce4ec, #f8bbd0)',
            border: '3px solid rgba(244, 143, 177, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          whileHover={{ scale: 1.05, rotate: 5, borderColor: 'rgba(244, 143, 177, 0.6)' }}
        >
          <motion.span
            style={{
              color: 'var(--blush-accent)',
              fontSize: '0.875rem',
              fontWeight: '300',
              letterSpacing: '0.1em',
              textAlign: 'center'
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            PHOTO
          </motion.span>
        </motion.div>

        <motion.h2
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ position: 'relative', marginBottom: '2rem' }}
        >
          Carolina Celedón
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: '200',
              color: 'rgba(244, 143, 177, 0.08)',
              pointerEvents: 'none',
              zIndex: -1,
              whiteSpace: 'nowrap'
            }}
            animate={{
              x: ['-50%', '-48%', '-50%', '-52%', '-50%'],
              y: ['-50%', '-52%', '-48%', '-52%', '-50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Carolina
          </motion.div>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <LangToggle />
        </motion.div>
      </section>
    </main>
  );
}
