'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { href: '/work/para-ver', label: 'Para ver' },
    { href: '/work/fast', label: 'Fast' },
    { href: '/work/the-porto-selos', label: 'The Porto Selos' },
    { href: '/work/rua', label: 'Rua' },
    { href: '/about', label: 'About me' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        className="md:px-16 px-6"
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-100%' : 0 }}
        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Link href="/" className="nav-brand hover-target" onClick={() => setIsOpen(false)}>
          <svg className="bow-icon" viewBox="0 0 24 24">
            <path d="M12 11C10.5 8.5 7.5 7.5 5.5 8.5C3.5 9.5 3 12.5 5 14L12 11Z" />
            <path d="M12 11C13.5 8.5 16.5 7.5 18.5 8.5C20.5 9.5 21 12.5 19 14L12 11Z" />
            <path d="M11.5 11.5L9 19" />
            <path d="M12.5 11.5L15 19" />
          </svg>
          Carolina
        </Link>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link hover-target ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden z-[101] hover-target relative w-6 h-6 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-6 h-[2px] bg-[var(--text-primary)] block"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-[2px] bg-[var(--text-primary)] block"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-6 h-[2px] bg-[var(--text-primary)] block"
          />
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-[var(--bg-color)] px-4"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link text-xl hover-target ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
