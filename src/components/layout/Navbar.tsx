'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      return activeSection === targetId;
    }
    if (href === '/') {
      return pathname === '/' && (!activeSection || activeSection === 'home');
    }
    return pathname === href;
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-2xl border-b border-secondary/10 shadow-xl shadow-primary/5'
            : 'bg-transparent'
        }`}
      >
        {/* Gold top line accent */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent transition-all duration-700 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/dps-logo.png"
                alt="DPS Bangalore East"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-normal tracking-wide transition-all duration-300 rounded-lg ${
                    isActive(link.href)
                      ? 'text-secondary'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-secondary/60 rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/registration"
                className="ml-4 px-5 py-2.5 bg-secondary text-background text-sm font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20"
              >
                Register
              </Link>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-secondary/10"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm tracking-wide transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-secondary bg-secondary/8'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/registration"
                  className="block px-4 py-3 bg-secondary text-background font-semibold text-center text-sm rounded-lg mt-4"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
