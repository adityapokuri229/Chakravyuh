'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Gavel, Scale, Trophy } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { events } from '@/lib/data';

const icons: Record<string, React.ElementType> = {
  Briefcase, TrendingUp, Gavel, Scale, Trophy,
};

export default function EventsOverview() {
  return (
    <section id="events" className="section-padding relative bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
            The Royal <span className="text-gradient">Arenas</span>
          </h2>
          <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
            Five challenges. Five paths to glory. Choose your arena.
          </p>
          <OrnateDivider />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {events.map((event, i) => {
            const Icon = icons[event.icon] || Trophy;
            return (
              <AnimatedSection key={event.id} delay={i * 0.1}>
                <motion.div
                  className="tamrapatra-card group rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full min-h-[300px]"
                >
                  <GoldCorner />
                  
                  <div className="relative p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl text-white group-hover:text-secondary transition-colors duration-300">
                            {event.name}
                          </h3>
                          <p className="text-secondary font-heading-alt text-sm tracking-wider font-semibold">
                            {event.sanskritName}
                          </p>
                        </div>
                      </div>

                      <p className="text-white/70 text-sm mb-6 font-body-alt leading-relaxed">
                        {event.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-secondary/10 pt-4 mt-auto">
                      <span className="text-xs text-secondary/60 font-heading-alt uppercase tracking-widest">
                        {event.teamSize}
                      </span>
                      <Link
                        href={`/events/${event.slug}`}
                        className="text-xs uppercase tracking-widest text-secondary hover:text-white transition-colors duration-300 font-bold flex items-center gap-1"
                      >
                        Enter Arena <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
