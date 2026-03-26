'use client';

import PhotoCard from '@/components/PhotoCard';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const titleText = "Carolina Celedón";
  const { scrollY } = useScroll();
  const [hasLanded, setHasLanded] = useState(false);

  const ropeHeight = useTransform(scrollY, [0, 600], [80, 600]);
  const ropeOpacity = useTransform(scrollY, [0, 400, 600], [1, 0.6, 0.25]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500 && !hasLanded) setHasLanded(true);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setHasLanded(false), 600);
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const charItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] } }
  };

  return (
    <main>
      <section className="hero-section">
        <motion.h1 className="hero-title" variants={container} initial="hidden" animate="show">
          {titleText.split('').map((char, i) => (
            <motion.span key={i} variants={charItem} style={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Photography · Porto
        </motion.p>
      </section>

      {/* Rope zone */}
      <div className="rope-zone">
        <motion.div
          className="rope-line"
          style={{ height: ropeHeight, opacity: ropeOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        />
        <motion.button
          onClick={scrollToTop}
          className="rope-button hover-target"
          whileHover={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3 }}
          title="Pull back up"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="var(--blush-accent)" strokeWidth="1.5">
            <path d="M6 10V2M2 5l4-3 4 3" />
          </svg>
        </motion.button>
      </div>

      {/* Grid — bounces in */}
      <motion.section 
        className="portfolio-section"
        initial={{ opacity: 0, y: 120 }}
        animate={hasLanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, mass: 0.8 }}
      >
        <h2 className="section-header">Selected Works</h2>
        <div className="grid-container home-grid">
          <PhotoCard title="Para ver" href="/work/para-ver" itemClass="item-1" />
          <PhotoCard title="Fast" href="/work/fast" itemClass="item-2" />
          <PhotoCard title="Rua" href="/work/rua" itemClass="item-3" />
          <PhotoCard title="The Porto Selos" href="/work/the-porto-selos" itemClass="item-4" />
          <PhotoCard title="Para ver II" href="/work/para-ver" itemClass="item-5" />
          <PhotoCard title="Rua Fragments" href="/work/rua" itemClass="item-6" />
          <PhotoCard title="Fast Motion" href="/work/fast" itemClass="item-7" />
        </div>
      </motion.section>
    </main>
  );
}
