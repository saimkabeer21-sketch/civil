import React from 'react';
import { CheckCircle2, Award, Users2, Target, Ruler, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import MediaSliderAbout from './MediaSliderAbout';

export default function About() {
  const highlights = [
    { text: 'Experienced with latest engineering technology', icon: Award },
    { text: 'Structural and seismic design expertise', icon: Target },
    { text: 'Sustainable and lifecycle-focused decisions', icon: CheckCircle2 },
    { text: 'Reliable multi-discipline project delivery', icon: Users2 },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 p-6 md:p-10 lg:p-12 shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-cyan-100/70 to-slate-200/50 rounded-[2rem] blur-md" />
              <div className="relative rounded-[1.8rem] overflow-hidden border border-white/40 bg-white/35 backdrop-blur-xl">
                <MediaSliderAbout />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">About CivicEdge</p>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Built for resilient cities and long-term performance
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We are a civil engineering portfolio team focused on practical design, clear documentation, and site-aligned execution. Every project balances safety, efficiency, and architectural intent.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-accent flex items-center justify-center border border-slate-200">
                        <Icon size={18} />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 leading-snug">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-primary text-white p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Method</p>
                  <p className="mt-2 text-lg font-bold flex items-center gap-2"><Ruler size={18} />Data + Design + Delivery</p>
                </div>
                <div className="rounded-2xl bg-slate-100 border border-slate-200 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Result</p>
                  <p className="mt-2 text-lg font-bold text-slate-800 flex items-center gap-2"><Gauge size={18} />Fast, buildable outcomes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
