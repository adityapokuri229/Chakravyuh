'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MandalaMotif from '../ui/MandalaMotif';
import GoldCorner from '../ui/GoldCorner';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep pt-16">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
        >
          <MandalaMotif size={900} opacity={0.12} />
        </motion.div>
      </div>
      
      {/* Subtle ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,168,76,0.06)_0%,_transparent_65%)] pointer-events-none z-0" />

      {/* Frame Corners */}
      <div className="absolute inset-4 border border-gold/10 z-0 pointer-events-none hidden md:block rounded-sm">
        <GoldCorner className="absolute -top-[1px] -left-[1px] w-24 h-24 opacity-60 text-gold" />
        <GoldCorner className="absolute -top-[1px] -right-[1px] w-24 h-24 opacity-60 text-gold rotate-90" />
        <GoldCorner className="absolute -bottom-[1px] -right-[1px] w-24 h-24 opacity-60 text-gold rotate-180" />
        <GoldCorner className="absolute -bottom-[1px] -left-[1px] w-24 h-24 opacity-60 text-gold -rotate-90" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto">
        {/* LOGO */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 relative group"
        >
          <div className="absolute inset-0 bg-gold/15 blur-3xl rounded-full scale-150 transition-transform duration-1000 group-hover:scale-110" />
          
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Inner rotating mandala ring behind logo */}
            <motion.div
              className="absolute z-0 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <MandalaMotif size={280} opacity={0.3} />
            </motion.div>
            
            {/* Logo Container */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-[3px] border-gold/40 shadow-[0_0_30px_rgba(201,168,76,0.2)] relative z-10 bg-bg-surface p-1.5 transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]">
               <img
                  src="/logo.png"
                  alt="Chakravyuh Logo"
                  className="w-full h-full object-cover rounded-full filter brightness-110 contrast-125 saturate-50 sepia-[.3]"
                />
            </div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-samarkan text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-[0.05em] text-gradient mb-4 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
          style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400 }}
        >
          CHAKRAVYUH
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center w-full max-w-sm mx-auto mb-8 opacity-90"
        >
          <div className="h-[2px] bg-gradient-to-r from-transparent to-gold flex-1" />
          <div className="w-2.5 h-2.5 rounded-full bg-gold mx-3 shadow-[0_0_10px_#C9A84C]" />
          <div className="h-[2px] bg-gradient-to-l from-transparent to-gold flex-1" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading-alt text-xl md:text-3xl text-gold-pale tracking-[0.25em] mb-12"
        >
          Devise &amp; Dominate
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <Link href="/registration" className="btn-gold w-full sm:w-auto px-12 py-4 text-sm">
            Register Now
          </Link>
          <Link href="/events" className="btn-gold-outline w-full sm:w-auto px-12 py-4 text-sm">
            Explore Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
