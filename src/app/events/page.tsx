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

              return (
                <AnimatedSection key={event.id} delay={0.1}>
                  <div className="tamrapatra-card rounded-2xl border border-secondary/20 p-8 md:p-12 relative overflow-hidden group">
                    <GoldCorner />
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                      
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <h2 className="font-heading text-2xl md:text-3xl text-white group-hover:text-secondary transition-colors duration-300">{event.name}</h2>
                            <p className="text-secondary font-heading-alt text-sm font-semibold tracking-wider">{event.sanskritName}</p>
                          </div>
                          <p className="text-accent text-xs md:text-sm font-heading-alt uppercase tracking-widest font-semibold bg-primary/10 px-4 py-2 border border-secondary/20 rounded-full inline-block">
                            {event.tagline}
                          </p>
                        </div>

                        <p className="text-white/70 text-sm md:text-base font-body-alt leading-relaxed mb-6 max-w-3xl">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-6">
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-white/80 text-xs font-heading-alt font-semibold uppercase tracking-wider select-none">
                              <Users size={16} className="text-secondary" />
                              <span>{event.teamSize}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-xs font-heading-alt font-semibold uppercase tracking-wider select-none">
                              <Clock size={16} className="text-secondary" />
                              <span>{event.timeSlot}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-xs font-heading-alt font-semibold uppercase tracking-wider select-none">
                              <MapPin size={16} className="text-secondary" />
                              <span>{event.venue}</span>
                            </div>
                          </div>

                          <Link
                            href={`/events/${event.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 border border-secondary text-secondary font-bold rounded-lg hover:from-secondary hover:to-secondary hover:text-background transition-all duration-300 text-xs uppercase tracking-widest"
                          >
                            Enter Arena Details
                          </Link>
                        </div>
                      </div>
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
