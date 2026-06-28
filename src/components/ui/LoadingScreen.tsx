'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MandalaMotif from './MandalaMotif';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-deep"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(218,122,5,0.08)_0%,_transparent_60%)]" />

          {/* Rotating mandala behind text */}
          <motion.div
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <MandalaMotif size={400} opacity={0.1} />
          </motion.div>

          {/* Center content */}
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-7xl font-samarkan py-2 leading-tight text-gradient tracking-wider"
              style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400 }}
            >
              Chakravyuh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-4 text-gold-dim text-sm font-heading-alt uppercase tracking-[0.3em]"
            >
              Devise & Dominate
            </motion.p>

            {/* Gold progress bar */}
            <motion.div
              className="mt-8 mx-auto h-0.5 bg-gold/20 rounded-full overflow-hidden"
              style={{ width: 160 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
