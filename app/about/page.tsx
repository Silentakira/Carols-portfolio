'use client';

import { motion } from 'framer-motion';
import LangToggle from '@/components/LangToggle';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      <section id="about" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            width: '300px',
            height: '300px',
            margin: '0 auto 3rem',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #fce4ec, #f8bbd0)',
            border: '3px solid rgba(244, 143, 177, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--blush-accent)',
            fontSize: '0.875rem',
            fontWeight: '300',
            letterSpacing: '0.1em',
            textAlign: 'center',
            padding: '2rem'
          }}
        >
          PHOTO
        </motion.div>

        <motion.h2
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Carolina Celedón
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
