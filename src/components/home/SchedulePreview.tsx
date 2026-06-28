'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { scheduleData } from '@/lib/data';

export default function SchedulePreview() {
  return (
    <section className="section-padding relative bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
                Battle <span className="text-gradient">Schedule</span>
              </h2>
              <p className="text-secondary/80 text-sm md:text-base font-heading-alt mt-2 uppercase tracking-widest">
                2 July 2026 — A Day of Relentless Conquest
              </p>
            </div>
            <Link
              href="/schedule"
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest font-bold border border-secondary/35 px-5 py-2.5 rounded-lg bg-primary/20"
            >
              Full Chronicle <ArrowRight size={12} />
            </Link>
          </div>
          <OrnateDivider className="!my-6" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-4">
            {scheduleData.slice(0, 6).map((item, i) => (
              <div
                key={i}
                className="tamrapatra-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border border-secondary/20 hover:border-secondary/50"
              >
                <GoldCorner className="w-4 h-4" />
                <div className="flex items-center gap-2 text-secondary font-heading-alt text-sm min-w-[170px] select-none">
                  <Calendar size={14} className="text-secondary" />
                  <span className="font-semibold">{item.time}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-heading text-base tracking-wide">{item.activity}</h4>
                  <p className="text-white/60 text-xs font-body-alt mt-1 leading-relaxed">{item.description}</p>
                </div>
                <div className="text-secondary/70 text-xs font-heading-alt border border-secondary/25 px-3 py-1 rounded bg-background/50 self-start sm:self-center">
                  {item.venue}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
