'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { galleryImages } from '@/lib/data';

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding relative bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
            Chronicles of the <span className="text-gradient">Maze</span>
          </h2>
          <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
            Relive the intensity and glory of Chakravyuh
          </p>
          <OrnateDivider />
        </AnimatedSection>

        <div className="masonry-grid mt-12">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="masonry-item">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group tamrapatra-card border border-secondary/20 hover:border-secondary/50"
                onClick={() => setSelected(i)}
              >
                <GoldCorner />
                <div className="aspect-[3/4] bg-cards/50 rounded-2xl flex items-center justify-center border border-secondary/10 group-hover:border-secondary/30 transition-colors">
                  <div className="text-center p-6 z-10">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center shadow-lg shadow-primary/20">
                      {img.type === 'video' ? (
                        <Play className="w-6 h-6 text-secondary ml-1" />
                      ) : (
                        <span className="text-secondary text-2xl select-none">📷</span>
                      )}
                    </div>
                    <p className="text-white/80 font-heading-alt text-sm tracking-wider">{img.alt}</p>
                  </div>
                  {/* Faded background motif */}
                  <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                    <svg className="w-40 h-40 text-secondary" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelected(null)}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-secondary hover:text-white transition-colors z-10 w-10 h-10 border border-secondary/35 rounded-full flex items-center justify-center bg-background/50"
              >
                <X size={20} />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-3xl w-full aspect-video bg-cards rounded-2xl border-2 border-secondary/35 flex items-center justify-center relative p-1 shadow-2xl shadow-primary/40 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <GoldCorner />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#580B0F_0%,_transparent_75%)] opacity-30 pointer-events-none" />
                <p className="text-white font-heading-alt text-lg md:text-xl tracking-wider z-10 px-6 text-center">
                  {galleryImages[selected]?.alt} — Preview Scroll Locked
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
