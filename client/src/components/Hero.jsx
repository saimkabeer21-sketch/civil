import React from 'react';
import { ArrowRight, ShieldCheck, ChartSpline, Layers3 } from 'lucide-react';
import { motion } from 'framer-motion';
import MediaSlider from './MediaSlider';

export default function Hero() {
  const stats = [
    { value: '50+', label: 'Completed Projects' },
    { value: '8+', label: 'Software Experiance' },
    { value: '98%', label: 'Client Retention Rate' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-34 pb-20 overflow-hidden">
      <div className="ambient-orb w-[520px] h-[520px] -top-32 -right-20 bg-cyan-300/35" />
      <div className="ambient-orb w-[420px] h-[420px] -bottom-32 -left-16 bg-slate-300/40" />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] text-slate-900"
            >
              Civic design with an
              <span className="steel-text"> engineering edge</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              CivicEdge delivers structural design, site execution support, and planning services for modern cities. We combine buildable details with resilient engineering decisions.
            </motion.p>

            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {stats.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24 + idx * 0.08 }}
                  className="edge-panel rounded-2xl p-4"
                >
                  <p className="text-2xl font-extrabold text-slate-900">{item.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-[0.14em] mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>

          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-100 to-slate-300/40 rounded-[2.2rem] blur-md" />
            <div className="relative rounded-[2rem] p-2 bg-white/90 shadow-[var(--shadow-hero)] border border-white">
              <MediaSlider />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
