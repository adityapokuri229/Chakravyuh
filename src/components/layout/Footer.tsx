'use client';

import Link from 'next/link';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import OrnateDivider from '../ui/OrnateDivider';

export default function Footer() {
  return (
    <footer className="relative bg-cards border-t border-secondary/20 overflow-hidden">
      {/* Background Mandala overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center">
        <svg className="w-[600px] h-[600px] text-secondary" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[...Array(24)].map((_, i) => (
            <path
              key={i}
              d="M 50 50 C 40 20, 60 20, 50 50"
              stroke="currentColor"
              strokeWidth="0.2"
              fill="none"
              transform={`rotate(${i * 15} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center border border-secondary/40">
                <span className="text-secondary font-heading text-lg font-bold select-none">च</span>
              </div>
              <span className="font-heading text-xl tracking-[0.1em] text-white">CHAKRAVYUH</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-body-alt">
              An entanglement of passages — a labyrinth of strategy, power, and prestige.
            </p>
            <p className="text-secondary font-heading-alt text-xs mt-3 uppercase tracking-[0.2em] font-semibold">
              विजयी भव • BE VICTORIOUS
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="font-heading text-white text-sm uppercase tracking-wider mb-4 border-b border-secondary/20 pb-2">
              Chronicles
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/events', label: 'Events' },
                { href: '/schedule', label: 'Schedule' },
                { href: '/faq', label: 'FAQ' },
                { href: '/registration', label: 'Register' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors text-sm font-body-alt"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-heading text-white text-sm uppercase tracking-wider mb-4 border-b border-secondary/20 pb-2">
              The Fortress
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-white/70 text-sm font-body-alt">
                <MapPin size={14} className="text-secondary shrink-0" />
                School Auditorium, Main Campus
              </li>
              <li className="flex items-center gap-2.5 text-white/70 text-sm font-body-alt">
                <Mail size={14} className="text-secondary shrink-0" />
                chakravyuh@school.edu
              </li>
              <li className="flex items-center gap-2.5 text-white/70 text-sm font-body-alt">
                <Phone size={14} className="text-secondary shrink-0" />
                +91 XXXXXXXXXX
              </li>
              <li className="flex items-center gap-2.5 text-white/70 text-sm font-body-alt">
                <Camera size={14} className="text-secondary shrink-0" />
                @chakravyuh
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h3 className="font-heading text-white text-sm uppercase tracking-wider mb-4 border-b border-secondary/20 pb-2">
              Clan Scrolls
            </h3>
            <p className="text-white/60 text-sm mb-4 font-body-alt">
              Stay updated with the latest news and announcements.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'WhatsApp', 'Email'].map((platform) => (
                <span
                  key={platform}
                  className="w-10 h-10 rounded-full bg-primary/20 border-2 border-secondary/35 flex items-center justify-center text-secondary hover:text-white hover:border-secondary transition-all cursor-pointer text-xs font-bold shadow-md shadow-primary/20 select-none"
                  title={platform}
                >
                  {platform.charAt(0)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <OrnateDivider className="!my-8 opacity-45" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 select-none">
          <p className="text-white/40 text-xs font-body-alt">
            &copy; {new Date().getFullYear()} Chakravyuh. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40 font-body-alt">
            <Link href="/" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
