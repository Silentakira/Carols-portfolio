'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[400px]">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form 
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="contact-form" 
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <input type="text" id="name" placeholder=" " required className="hover-target" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input type="email" id="email" placeholder=" " required className="hover-target" />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-group">
              <textarea id="message" rows={4} placeholder=" " required className="hover-target"></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="hover-target w-max mx-auto md:mx-0">Submit</button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col pt-16 items-center text-center space-y-4"
          >
            <h3 className="text-3xl font-serif italic text-[var(--text-primary)]">Thank You!</h3>
            <p className="text-[var(--text-muted)]">I'll get back to you soon.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-[0.2em] text-[var(--blush-accent)] mt-4 hover-target hover:text-[var(--text-primary)] transition-colors"
            >
              Send another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
