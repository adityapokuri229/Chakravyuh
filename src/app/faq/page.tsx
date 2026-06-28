'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { faqs } from '@/lib/data';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filtered = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 lg:pt-28 min-h-screen bg-background">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
              Fortress <span className="text-gradient">Inquiries</span>
            </h1>
            <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
              Everything you need to know before entering the labyrinth
            </p>
            <OrnateDivider />
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative mb-10 tamrapatra-card rounded-xl p-1.5 border border-secondary/20">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/70" />
              <input
                type="text"
                placeholder="Inquire of specific matters..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-background/50 border border-transparent rounded-lg text-white text-sm focus:outline-none focus:border-secondary/35 transition-all font-body-alt placeholder-white/20"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4">
              {filtered.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="tamrapatra-card rounded-xl overflow-hidden border border-secondary/20"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left relative z-10"
                  >
                    <span className="text-white text-sm md:text-base font-heading pr-4">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-secondary shrink-0 transition-transform duration-300 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <div className="w-full h-px bg-secondary/15 mb-4" />
                          <p className="text-white/70 text-sm font-body-alt leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 tamrapatra-card rounded-xl border border-secondary/20 p-6 relative">
                <GoldCorner className="w-4 h-4" />
                <p className="text-white/50 font-heading-alt tracking-wider uppercase">No chronicles found matching your inquiry.</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
