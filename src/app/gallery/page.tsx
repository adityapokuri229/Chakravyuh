'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ImageIcon } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { galleryImages } from '@/lib/data';

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="pt-24 lg:pt-28 min-h-screen bg-background">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
              Chronicles of the <span className="text-gradient">Maze</span>
            </h1>
            <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
              Relive the intensity, strategy, and triumph of Chakravyuh.
            </p>
            <OrnateDivider />
          </AnimatedSection>

          <div className="masonry-grid mt-12">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="masonry-item">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group tamrapatra-card border border-secondary/20 hover:border-secondary/50"
                  onClick={() => setSelected(i)}
                >
                  <GoldCorner />
                  <div className={`${img.type === 'video' ? 'aspect-video' : 'aspect-[3/4]'} bg-cards/50 rounded-2xl flex items-center justify-center border border-secondary/10 group-hover:border-secondary/30 transition-all duration-300`}>
                    <div className="text-center p-6 z-10">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {img.type === 'video' ? (
                          <Play className="w-6 h-6 text-secondary ml-1" />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-secondary" />
                        )}
                      </div>
                      <p className="text-white/80 font-heading-alt text-sm tracking-wider">{img.alt}</p>
                    </div>
                    {/* Faded mandala background */}
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
                  className="max-w-4xl w-full aspect-video bg-cards rounded-2xl border-2 border-secondary/35 flex items-center justify-center relative p-1 shadow-2xl shadow-primary/40 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GoldCorner />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#580B0F_0%,_transparent_75%)] opacity-30 pointer-events-none" />
                  <div className="text-center z-10 p-6">
                    <ImageIcon className="w-16 h-16 text-secondary/50 mx-auto mb-4" />
                    <p className="text-white font-heading-alt text-lg md:text-xl tracking-wider">
                      {galleryImages[selected]?.alt}
                    </p>
                    <p className="text-white/40 text-xs font-body-alt mt-2 leading-relaxed">
                      Chronicle preview scroll locked. Secure access required.
                    </p>
                  </div>
                </motion.div>

                {/* Bullet selectors */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 select-none">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(i);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === selected ? 'bg-secondary w-6' : 'bg-secondary/40 hover:bg-secondary'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
