'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { sponsors } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-padding relative bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
            The Royal <span className="text-gradient">Benefactors</span>
          </h2>
          <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
            Visionaries who support the legendary arena
          </p>
          <OrnateDivider />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
          {sponsors.map((sponsor, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <motion.div
                whileHover={{ rotateY: 180, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="aspect-square rounded-full bg-cards/80 border-2 border-secondary/35 flex items-center justify-center p-6 mb-4 shadow-xl shadow-primary/10 hover:border-secondary transition-all relative overflow-hidden"
              >
                <div className="absolute inset-1.5 border border-dashed border-secondary/20 rounded-full" />
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center relative z-10">
                  <span className="text-secondary font-heading text-4xl select-none drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
              </motion.div>
              <p className="text-white font-heading-alt text-sm tracking-wider">{sponsor.name}</p>
              <p className="text-secondary text-[10px] uppercase tracking-widest font-semibold mt-0.5">{sponsor.tier}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-14">
          <p className="text-white/60 text-sm font-body-alt">
            Want to support the clan?{' '}
            <a href="/contact" className="text-secondary hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">
              Send a Scroll
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
