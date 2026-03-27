'use client';

import { motion } from 'framer-motion';
import PhotoCard from '@/components/PhotoCard';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }
};

export default function WorkPage() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <motion.h1 className="series-header" {...fadeUp}>
        Selected Works
      </motion.h1>
      <motion.section 
        className="portfolio-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        <div className="grid-container home-grid">
          <PhotoCard title="Fast" href="/work/fast" itemClass="item-1" />
          <PhotoCard title="Rua" href="/work/rua" itemClass="item-2" />
          <PhotoCard title="The Porto Selos" href="/work/the-porto-selos" itemClass="item-3" />
          <PhotoCard title="Rua Fragments" href="/work/rua" itemClass="item-4" />
          <PhotoCard title="Fast Motion" href="/work/fast" itemClass="item-5" />
        </div>
      </motion.section>
    </main>
  );
}
