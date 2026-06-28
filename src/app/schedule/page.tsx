'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Download, Search } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { scheduleData } from '@/lib/data';

export default function SchedulePage() {
  const [search, setSearch] = useState('');

  const filtered = scheduleData.filter(
    (item) =>
      item.activity.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.venue.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 lg:pt-28 min-h-screen bg-background">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
              Fortress <span className="text-gradient">Chronicles</span>
            </h1>
            <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
              Plan your journey through the Chakravyuh
            </p>
            <OrnateDivider />
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              <div className="relative flex-1 max-w-md w-full tamrapatra-card rounded-xl p-1 border border-secondary/20">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary/70" />
                <input
                  type="text"
                  placeholder="Filter by event or arena..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-background/50 border border-transparent rounded-lg text-white text-sm focus:outline-none focus:border-secondary/35 transition-all font-body-alt placeholder-white/20"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-primary/80 border border-secondary text-secondary font-semibold rounded-lg hover:from-secondary hover:to-secondary hover:text-background transition-all duration-300 text-xs uppercase tracking-wider shadow-lg shadow-primary/20 cursor-pointer">
                <Download size={14} />
                Download Scroll
              </button>
            </div>
          </AnimatedSection>

          {/* List layout instead of plain table */}
          <AnimatedSection>
            <div className="space-y-4">
              {filtered.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="tamrapatra-card rounded-xl p-5 border border-secondary/20 hover:border-secondary/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <GoldCorner className="w-4 h-4" />
                  <div className="flex items-center gap-2.5 text-secondary font-heading-alt text-sm font-semibold min-w-[180px] select-none">
                    <Clock size={15} className="text-secondary" />
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading text-lg text-white tracking-wide">{item.activity}</h3>
                    <p className="text-white/60 text-xs font-body-alt mt-1 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-secondary/70 text-xs font-heading-alt border border-secondary/25 px-3 py-1.5 rounded bg-background/50 self-start md:self-center">
                    <MapPin size={12} className="text-secondary" />
                    <span>{item.venue}</span>
                  </div>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-12 tamrapatra-card rounded-xl border border-secondary/20 p-6 relative">
                  <GoldCorner className="w-4 h-4" />
                  <Calendar className="w-12 h-12 text-secondary/30 mx-auto mb-3" />
                  <p className="text-white/50 font-heading-alt tracking-wider uppercase">No event schedules found.</p>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Guidelines / Team Allocations details */}
          <AnimatedSection className="mt-14">
            <div className="tamrapatra-card rounded-2xl p-8 border border-secondary/25">
              <GoldCorner className="w-5 h-5" />
              <h3 className="font-heading text-2xl text-gradient text-center mb-8">Fortress Team Structure</h3>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  {['Fortress Entry', 'The Pitch Arena', 'Parallel Competitions', 'Final Conquest', 'Valedictory Ceremony'].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 relative">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-b from-secondary/30 to-primary/30 text-secondary text-xs flex items-center justify-center font-cinzel-dec font-bold border border-secondary/45 shadow shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-base font-heading tracking-wide">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-heading text-secondary text-sm uppercase tracking-wider mb-4 border-b border-secondary/20 pb-2">Participant Allocations</h4>
                  <div className="space-y-3.5">
                    {[
                      { event: 'Artha Nirmaan (Shark Tank)', size: '3–4 Warriors' },
                      { event: 'Nivesh Chakra (Stock Market)', size: '2–3 Warriors' },
                      { event: 'Sangharsh (Auction Wars)', size: '2–3 Warriors' },
                      { event: 'Nyay Sabha (Tribunal)', size: '2–3 Warriors' },
                      { event: 'Antim Chakra (Grand Finale)', size: 'Entire Clan' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-secondary/10 last:border-0">
                        <span className="text-white/70 text-sm font-body-alt">{item.event}</span>
                        <span className="text-secondary font-heading-alt text-xs font-semibold uppercase tracking-wider">{item.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
