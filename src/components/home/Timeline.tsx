'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { timeline } from '@/lib/data';

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding relative bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
            The Vanguard's <span className="text-gradient">Path</span>
          </h2>
          <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
            The timeline of the day's conquest
          </p>
          <OrnateDivider />
        </AnimatedSection>
        <div className="relative mt-12">
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex items-start gap-6 md:gap-0 pb-12 md:pb-16 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Desktop Column */}
      <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-14' : 'md:text-left md:pl-14'} hidden md:block`}>
        <div
          className="tamrapatra-card rounded-xl p-6 cursor-pointer border border-secondary/20"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <GoldCorner className="w-5 h-5" />
          <h3 className="font-heading text-lg text-white mb-2 group-hover:text-secondary transition-colors">
            {item.title}
          </h3>
          <div className={`flex items-center gap-2 text-secondary font-heading-alt text-sm mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <Clock size={14} className="text-secondary" />
            <span>{item.time}</span>
          </div>
          <p className="text-white/70 text-sm font-body-alt leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Decorative Golden Lotus/Shield Node */}
      <div className="relative z-10 flex-shrink-0 ml-0 md:ml-0 self-center">
        <div className="w-9 h-9 rounded-full bg-background border-2 border-secondary flex items-center justify-center shadow-lg shadow-primary/20">
          <svg className="w-5 h-5 text-secondary animate-spin-slow" viewBox="0 0 100 100" fill="currentColor">
            {/* Ornate wheel/lotus node */}
            <circle cx="50" cy="50" r="10" />
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d="M 50 50 L 50 15 A 10 10 0 0 1 60 25 Z"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Mobile Column */}
      <div className="flex-1 md:hidden">
        <div className="tamrapatra-card rounded-xl p-5 border border-secondary/20">
          <GoldCorner className="w-5 h-5" />
          <h3 className="font-heading text-base text-white mb-1">{item.title}</h3>
          <div className="flex items-center gap-2 text-secondary font-heading-alt text-xs mb-2">
            <Clock size={12} className="text-secondary" />
            <span>{item.time}</span>
          </div>
          <p className="text-white/70 text-xs font-body-alt leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
