import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Building2, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071629] text-white pt-16 pb-10 border-t border-cyan-800/20">
      <div className="section-shell">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-700/50">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Civil Studio</p>
                <p className="text-2xl font-extrabold">CivicEdge</p>
              </div>
            </div>
            <p className="mt-5 text-slate-300 text-sm leading-relaxed">
              Professional civil engineering solutions with a focus on resilient design, practical buildability, and project clarity.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200 font-semibold">Navigate</p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200 font-semibold">Specialization</p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>Structural Design</li>
              <li>Construction Consultancy</li>
              <li>Planning and Estimation</li>
              <li>Site Supervision</li>
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200 font-semibold">Contact</p>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-2"><Phone size={15} /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2"><Mail size={15} /> contact@civicedge.com</p>
            </div>
          </div>
        </div>

        <div className="pt-6 text-sm text-slate-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>Copyright {currentYear} CivicEdge Engineering. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
