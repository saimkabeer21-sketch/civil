import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="section-shell">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-white/45 border-white/40 shadow-xl shadow-slate-900/10 backdrop-blur-xl'
              : 'bg-white/35 border-white/30 backdrop-blur-lg'
          }`}
        >
          <div className="px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <div className="leading-none">
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-[0.2em]">Civil Studio</p>
                <p className="text-xl font-extrabold text-slate-900">
                  Civic<span className="text-accent">Edge</span>
                </p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-secondary transition-colors"
              >
                Start a Project
              </a>
            </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="section-shell">
              <div className="mt-3 rounded-2xl bg-white/45 border border-white/40 backdrop-blur-xl p-4 space-y-2 shadow-lg">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-slate-700 font-semibold hover:bg-slate-100"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 rounded-lg bg-primary text-white font-bold"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
