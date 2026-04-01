import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Selected Work</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">Project portfolio with civic impact</h2>
            <p className="mt-4 text-lg text-slate-600">
              Built examples of structural, interior, supervision, and planning assignments shaped for real-world delivery.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold hover:bg-slate-100 transition-colors"
          >
            Discuss Similar Project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="relative rounded-[1.8rem] overflow-hidden border border-white/40 bg-white/35 backdrop-blur-xl shadow-[var(--shadow-card)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase bg-white/90 text-slate-800">
                  {project.category}
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-[0.15em]">
                    <MapPin size={13} /> CivicEdge Portfolio
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">{project.title}</h3>
                </div>
                <p className="text-sm text-slate-600 max-w-[260px] leading-relaxed">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
