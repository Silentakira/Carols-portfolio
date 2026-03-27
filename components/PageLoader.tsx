'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            className="loader-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              className="loader-bow"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <path
                d="M12 11C10.5 8.5 7.5 7.5 5.5 8.5C3.5 9.5 3 12.5 5 14L12 11Z"
                stroke="#f48fb1"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M12 11C13.5 8.5 16.5 7.5 18.5 8.5C20.5 9.5 21 12.5 19 14L12 11Z"
                stroke="#f48fb1"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M11.5 11.5L9 19"
                stroke="#f48fb1"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M12.5 11.5L15 19"
                stroke="#f48fb1"
                strokeWidth="1.2"
                fill="none"
              />
            </motion.svg>
            <motion.p
              className="loader-text"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Carolina Celedón
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
