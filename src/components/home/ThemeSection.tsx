'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import OrnateDivider from '@/components/ui/OrnateDivider';

const poemLines = [
  'An intricate labyrinth of power and might,',
  'Where shadows dance in the golden light.',
  'Each turn a trial, each path a test,',
  'Only the worthy earn their rest.',
  '',
  'Through corridors of strategy and schemes,',
  'Where nothing is as it truly seems.',
  'The center calls, the brave advance,',
  'To claim their place in circumstance.',
];

export default function ThemeSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background mandala rays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(88,11,15,0.2)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <OrnateDivider />

        {/* Large Decorative Quotes */}
        <div className="relative py-6">
          <span className="absolute -top-12 left-4 md:left-12 text-7xl md:text-9xl text-secondary/15 font-cinzel-dec select-none pointer-events-none">
            “
          </span>
          
          <div className="space-y-4">
            {poemLines.map((line, i) => (
              line === '' ? (
                <div key={i} className="h-6" />
              ) : (
                <PoemLine key={i} index={i} text={line} />
              )
            ))}
          </div>

          <span className="absolute -bottom-16 right-4 md:right-12 text-7xl md:text-9xl text-secondary/15 font-cinzel-dec select-none pointer-events-none">
            ”
          </span>
        </div>

        <OrnateDivider className="mt-8" />
      </div>
    </section>
  );
}

function PoemLine({ index, text }: { index: number; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1 }}
      className="font-heading text-lg md:text-2xl lg:text-3xl text-gradient leading-relaxed tracking-wider italic font-medium select-none"
    >
      {text}
    </motion.div>
  );
}
