import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Featured Masterpieces</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discover our commitment to excellence through these selected projects that redefine modern infrastructure and structural design.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors">
              View All Projects
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[16/10] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInHover={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900"
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <div className="flex items-center text-blue-600 mb-2 gap-1.5">
                    <MapPin size={14} />
                    <span className="text-sm font-semibold uppercase tracking-widest">Structural Design</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
