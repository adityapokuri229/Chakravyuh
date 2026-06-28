'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MandalaMotif from '../ui/MandalaMotif';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep pt-20 md:pt-24">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute opacity-15"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
        >
          <MandalaMotif size={900} opacity={1} />
        </motion.div>
      </div>

      {/* Ambient light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,168,76,0.06)_0%,_transparent_70%)] pointer-events-none z-0" />



      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl mx-auto">


        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-samarkan text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-[0.05em] text-gradient mb-3 py-4 px-2 leading-[1.15] drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
          style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400 }}
        >
          CHAKRAVYUH
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center w-full max-w-xs mx-auto mb-5"
        >
          <div className="h-[1.5px] bg-gradient-to-r from-transparent to-secondary flex-1" />
          <div className="w-2.5 h-2.5 rounded-full bg-secondary mx-3 shadow-[0_0_10px_#C9A84C]" />
          <div className="h-[1.5px] bg-gradient-to-l from-transparent to-secondary flex-1" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading-alt text-base sm:text-lg md:text-2xl text-gold-pale tracking-[0.3em] mb-8 uppercase"
        >
          Devise &amp; Dominate
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-5 w-full flex-wrap"
        >
          <a href="https://docs.google.com/forms/d/1TPUvIxxkDbZULHmbX9g72leO92AL6Ti-s4Sx0aVBfWE/" target="_blank" rel="noopener noreferrer" className="btn-gold w-auto px-6 sm:px-12 py-3 sm:py-4 text-[10px] sm:text-xs">
            Register Now
          </a>
          <Link href="/events" className="btn-gold-outline w-auto px-6 sm:px-12 py-3 sm:py-4 text-[10px] sm:text-xs">
            Explore Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
