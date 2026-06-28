'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUp from '@/components/ui/CountUp';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { siteConfig } from '@/lib/data';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Background Mandala overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg className="w-[800px] h-[800px] text-secondary" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
          {[...Array(36)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2="50"
              y2="10"
              stroke="currentColor"
              strokeWidth="0.2"
              transform={`rotate(${i * 10} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
            What is <span className="text-gradient">Chakravyuh</span>?
          </h2>
          <OrnateDivider />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
          <AnimatedSection direction="left">
            <div className="tamrapatra-card rounded-2xl p-8 md:p-10 border border-secondary/25">
              <GoldCorner />
              <p className="text-white/80 leading-relaxed text-sm md:text-base lg:text-lg font-cinzel-dec mb-4 tracking-wide">
                Chakravyuh is an entanglement of passages — a labyrinth of strategy, power, and prestige.
                Each corridor leads deeper into the unknown, where every turn holds a new challenge.
                To enter is to accept the game. To navigate is to prove your mettle.
                Only those who can think, adapt, and overcome will find their way to the center.
              </p>
              <p className="text-white/80 leading-relaxed text-sm md:text-base lg:text-lg font-cinzel-dec tracking-wide">
                Born from the ancient concept of the legendary Chakravyuh war formation, this competition
                brings together the sharpest minds from across schools to battle in a series of
                meticulously designed events that test every facet of intellect, wit, and strategy. 
                Step into the arena and claim your destiny.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative">
            <div className="aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(88,11,15,0.25)_0%,_transparent_70%)] rounded-full" />
              
              {/* Ornate Concentric Rotating Shield representing Chakravyuh */}
              <div className="w-72 h-72 md:w-96 md:h-96 relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border border-dashed border-secondary/20 rounded-full"
                />
                
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border border-secondary/20 rounded-full"
                    style={{
                      margin: `${i * 30 + 15}px`,
                      borderStyle: i === 1 ? 'dashed' : 'solid',
                    }}
                  />
                ))}

                {/* Inner Arch Window logo container */}
                <div className="absolute w-44 h-44 rounded-full bg-cards border-2 border-secondary/35 flex items-center justify-center shadow-2xl shadow-primary/50 overflow-hidden">
                  <div className="absolute inset-2 border border-dashed border-secondary/15 rounded-full" />
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="z-10 flex items-center justify-center w-full h-full p-2"
                  >
                    <img
                      src="/logo.png"
                      alt="Chakravyuh"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Floating outer nodes */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary rounded-full shadow-lg shadow-secondary"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-140px)`,
                      transformOrigin: '0 0',
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats card with Ornate grid */}
        <AnimatedSection className="mt-16 md:mt-24">
          <div className="relative tamrapatra-card rounded-2xl p-8 md:p-12 border border-secondary/25 overflow-hidden">
            <GoldCorner />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
              <CountUp end={siteConfig.stats.events} label="Royal Arenas" />
              <CountUp end={siteConfig.stats.participants} suffix="+" label="Warriors Joined" />
              <CountUp end={siteConfig.stats.schools} suffix="+" label="Clans Competing" />
              <CountUp end={siteConfig.stats.finale} label="Grand Showdown" />
            </div>
            
            {/* Background design accents */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-secondary/10 rounded-full opacity-30 pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-secondary/10 rounded-full opacity-30 pointer-events-none" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
