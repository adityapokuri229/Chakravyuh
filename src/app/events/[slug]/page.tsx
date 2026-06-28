'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Briefcase, TrendingUp, Gavel, Scale, Trophy,
  Users, Clock, MapPin, Phone, ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { events } from '@/lib/data';

const icons: Record<string, React.ElementType> = {
  Briefcase, TrendingUp, Gavel, Scale, Trophy,
};

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-6 border border-secondary/25 rounded-2xl tamrapatra-card max-w-sm relative">
          <GoldCorner />
          <h1 className="font-heading text-3xl text-white mb-3">Arena Not Found</h1>
          <p className="text-white/60 mb-6 font-body-alt">The fortress corridor you seek does not exist.</p>
          <Link
            href="/events"
            className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 border border-secondary text-secondary font-semibold rounded-lg text-xs uppercase tracking-wider block"
          >
            Back to Arenas
          </Link>
        </div>
      </div>
    );
  }

  const Icon = icons[event.icon] || Trophy;
  const poemLines = event.poem.split('\n');

  return (
    <div className="pt-24 lg:pt-28 min-h-screen bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[40vh] bg-[radial-gradient(circle_at_top,_rgba(88,11,15,0.25)_0%,_transparent_70%)] pointer-events-none z-[0]" />
      
      {/* Event Header Banner */}
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden z-10">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20"
          >
            <Icon className="w-7 h-7 text-secondary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-gradient text-shadow-gold mb-2"
          >
            {event.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary font-heading-alt text-lg md:text-xl uppercase tracking-widest font-semibold mb-2"
          >
            {event.sanskritName}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-body-alt"
          >
            {event.tagline}
          </motion.p>
        </div>
      </div>

      <div className="section-padding pt-0 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Ornate stats bar */}
          <AnimatedSection>
            <div className="tamrapatra-card rounded-2xl p-6 border border-secondary/25 mb-10">
              <GoldCorner className="w-4 h-4" />
              <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center">
                <div className="flex items-center gap-2.5 text-white/80 text-xs md:text-sm font-heading-alt uppercase tracking-wider font-semibold">
                  <Users size={16} className="text-secondary" />
                  <span>Size: {event.teamSize}</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/80 text-xs md:text-sm font-heading-alt uppercase tracking-wider font-semibold">
                  <Clock size={16} className="text-secondary" />
                  <span>Time: {event.timeSlot}</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/80 text-xs md:text-sm font-heading-alt uppercase tracking-wider font-semibold">
                  <MapPin size={16} className="text-secondary" />
                  <span>Ground: {event.venue}</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/80 text-xs md:text-sm font-heading-alt uppercase tracking-wider font-semibold">
                  <Phone size={16} className="text-secondary" />
                  <span>Commander: {event.coordinator}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Epic Poem lines */}
          <AnimatedSection>
            <div className="mb-14 text-center relative py-4">
              <span className="absolute top-0 left-12 text-5xl text-secondary/20 font-cinzel-dec select-none pointer-events-none">“</span>
              <div className="space-y-2">
                {poemLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="font-heading-alt text-base md:text-xl text-gradient-copper italic font-semibold leading-relaxed"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
              <span className="absolute bottom-0 right-12 text-5xl text-secondary/20 font-cinzel-dec select-none pointer-events-none">”</span>
            </div>
            <OrnateDivider className="!my-10" />
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection>
            <Section title="Description">
              <p className="text-white/80 font-body-alt leading-relaxed text-sm md:text-base">{event.description}</p>
            </Section>
          </AnimatedSection>

          {/* Objectives */}
          <AnimatedSection>
            <Section title="Objectives">
              <ul className="space-y-3">
                {event.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-body-alt text-sm md:text-base">
                    <ChevronRight size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </AnimatedSection>

          {/* Round Structure */}
          {event.roundStructure && (
            <AnimatedSection>
              <Section title="Round Structure">
                <div className="grid gap-4 mt-4">
                  {event.roundStructure.map((round, i) => (
                    <div key={i} className="tamrapatra-card rounded-xl p-5 border border-secondary/20">
                      <GoldCorner className="w-4 h-4" />
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 text-secondary text-xs flex items-center justify-center font-cinzel-dec font-bold border border-secondary/45 shadow">
                          {i + 1}
                        </span>
                        <h4 className="font-heading text-white text-base tracking-wide">{round.title}</h4>
                      </div>
                      <p className="text-white/60 text-sm font-body-alt ml-11 leading-relaxed">{round.description}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </AnimatedSection>
          )}

          {/* Rules */}
          <AnimatedSection>
            <Section title="Rules & Guidelines">
              <ul className="space-y-3">
                {event.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-body-alt text-sm md:text-base">
                    <ChevronRight size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </AnimatedSection>

          {/* Judging */}
          {event.judgingCriteria && (
            <AnimatedSection>
              <Section title="Judging Criteria">
                <div className="grid sm:grid-cols-2 gap-4">
                  {event.judgingCriteria.map((criterion, i) => (
                    <div
                      key={i}
                      className="tamrapatra-card rounded-xl p-4 text-center border border-secondary/20"
                    >
                      <GoldCorner className="w-4 h-4" />
                      <span className="text-white font-heading-alt text-sm font-semibold tracking-wider">{criterion}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </AnimatedSection>
          )}

          {/* Requirements */}
          {event.requirements && (
            <AnimatedSection>
              <Section title="Requirements">
                <ul className="space-y-3">
                  {event.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 font-body-alt text-sm md:text-base">
                      <ChevronRight size={18} className="text-secondary shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </AnimatedSection>
          )}

          {/* Buttons */}
          <AnimatedSection className="text-center mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                href="/registration"
                className="px-10 py-4 bg-gradient-to-r from-primary to-primary/80 border border-secondary text-secondary font-bold rounded-lg hover:from-secondary hover:to-secondary hover:text-background transition-all duration-300 text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-primary/20"
              >
                Register for {event.name}
              </Link>
              <Link
                href="/events"
                className="px-10 py-4 border border-secondary/30 text-white rounded-lg hover:bg-secondary/15 transition-all duration-300 text-xs uppercase tracking-widest"
              >
                All Arenas
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h3 className="font-heading text-xl md:text-2xl text-white mb-6 flex items-center gap-3">
        <span className="w-1.5 h-7 bg-gradient-to-b from-secondary to-primary rounded-full" />
        {title}
      </h3>
      <div className="pl-4 border-l border-secondary/10">
        {children}
      </div>
    </div>
  );
}
