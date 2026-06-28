'use client';

import { Briefcase, TrendingUp, Gavel, Scale, Trophy, Users, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { events } from '@/lib/data';

const icons: Record<string, React.ElementType> = {
  Briefcase, TrendingUp, Gavel, Scale, Trophy,
};

export default function EventsPage() {
  return (
    <div className="pt-24 lg:pt-28 min-h-screen bg-background">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
              The Royal <span className="text-gradient">Arenas</span>
            </h1>
            <p className="text-secondary/70 text-center max-w-2xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
              Five distinct challenges. Each demands a different kind of intelligence.
            </p>
            <OrnateDivider />
          </AnimatedSection>

          <div className="space-y-16 md:space-y-24 mt-12">
            {events.map((event, i) => {
              const Icon = icons[event.icon] || Trophy;
              const isReversed = i % 2 === 1;

              return (
                <AnimatedSection key={event.id} delay={0.1}>
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                    {/* Poster box with gold corner framework */}
                    <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="tamrapatra-card aspect-[4/3] rounded-2xl border border-secondary/20 flex items-center justify-center group overflow-hidden">
                        <GoldCorner />
                        <div className="text-center p-8 z-10">
                          <Icon className="w-16 h-16 text-secondary/40 group-hover:text-secondary transition-colors mx-auto mb-4" />
                          <p className="text-white/40 text-xs font-heading-alt uppercase tracking-wider">Labyrinth Poster Key</p>
                        </div>
                        {/* Faded mandala motif */}
                        <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                          <svg className="w-48 h-48 text-secondary" viewBox="0 0 100 100" fill="currentColor">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Text box */}
                    <div className={`order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h2 className="font-heading text-2xl md:text-3xl text-white">{event.name}</h2>
                          <p className="text-secondary font-heading-alt text-sm font-semibold tracking-wider">{event.sanskritName}</p>
                        </div>
                      </div>

                      <p className="text-accent text-sm md:text-base font-heading-alt uppercase tracking-widest font-semibold mb-3">{event.tagline}</p>
                      <p className="text-white/70 text-sm font-body-alt leading-relaxed mb-6">{event.description}</p>

                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 border border-secondary/20 bg-primary/10 px-3 py-1.5 rounded-lg text-white/80 text-xs font-heading-alt font-semibold uppercase tracking-wider select-none">
                          <Users size={14} className="text-secondary" />
                          <span>{event.teamSize}</span>
                        </div>
                        <div className="flex items-center gap-2 border border-secondary/20 bg-primary/10 px-3 py-1.5 rounded-lg text-white/80 text-xs font-heading-alt font-semibold uppercase tracking-wider select-none">
                          <Clock size={14} className="text-secondary" />
                          <span>{event.timeSlot}</span>
                        </div>
                        <div className="flex items-center gap-2 border border-secondary/20 bg-primary/10 px-3 py-1.5 rounded-lg text-white/80 text-xs font-heading-alt font-semibold uppercase tracking-wider select-none">
                          <MapPin size={14} className="text-secondary" />
                          <span>{event.venue}</span>
                        </div>
                      </div>

                      <Link
                        href={`/events/${event.slug}`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/80 border border-secondary text-secondary font-bold rounded-lg hover:from-secondary hover:to-secondary hover:text-background transition-all duration-300 text-xs uppercase tracking-widest"
                      >
                        Enter Arena Details
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
