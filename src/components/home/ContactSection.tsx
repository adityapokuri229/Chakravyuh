'use client';

import { Mail, MapPin, Camera, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { siteConfig } from '@/lib/data';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative bg-background">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
            Send a <span className="text-gradient">Scroll</span>
          </h2>
          <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
            Have a query? Reach out to the commanders.
          </p>
          <OrnateDivider />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-12">
          {/* Details Column */}
          <AnimatedSection direction="left">
            <div className="tamrapatra-card rounded-2xl p-8 border border-secondary/25 space-y-6">
              <GoldCorner className="w-5 h-5" />
              {[
                { icon: MapPin, label: 'Palace Grounds', value: siteConfig.address },
                { icon: Mail, label: 'Official Scroll', value: siteConfig.email },
                { icon: Camera, label: 'Clan Chronicles', value: siteConfig.instagram },
                { icon: MessageCircle, label: 'Messenger', value: siteConfig.whatsapp },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-secondary/10 pb-4 last:border-none last:pb-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-secondary/20 to-primary/20 border border-secondary/30 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary/70 text-[10px] uppercase tracking-wider font-heading-alt font-semibold">{item.label}</p>
                    <p className="text-white text-sm md:text-base font-body-alt mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Faux Map container with Ornate styling */}
            <div className="tamrapatra-card rounded-2xl mt-8 aspect-[16/9] border border-secondary/20 flex items-center justify-center">
              <GoldCorner className="w-4 h-4" />
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3 border border-secondary/30">
                  <MapPin className="w-6 h-6 text-secondary animate-pulse" />
                </div>
                <p className="text-white font-heading-alt text-sm tracking-widest uppercase">Arena Maps &amp; Navigation</p>
                <p className="text-white/40 text-xs font-body-alt mt-1">Scroll to view campus arena layouts</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form Column */}
          <AnimatedSection direction="right">
            <div className="tamrapatra-card rounded-2xl p-8 border border-secondary/25">
              <GoldCorner className="w-5 h-5" />
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                      placeholder="Warrior's name"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                      placeholder="Scroll address"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                    placeholder="Matter of discussion"
                  />
                </div>
                <div>
                  <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20 resize-none"
                    placeholder="Inscribe your scroll here..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-primary/80 border border-secondary text-secondary font-bold rounded-lg hover:from-secondary hover:to-secondary hover:text-background transition-all duration-300 text-xs uppercase tracking-[0.15em] cursor-pointer shadow-lg shadow-primary/20"
                >
                  Send Scroll
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
