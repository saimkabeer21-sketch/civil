import React from 'react';
import { CheckCircle2, Award, Users2, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    { text: "Over 15 years of industry experience", icon: Award },
    { text: "Expertise in structural & seismic design", icon: Target },
    { text: "Commitment to sustainable building", icon: CheckCircle2 },
    { text: "Proven track record of project delivery", icon: Users2 },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80"
                alt="Civil Engineer at site"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-50 rounded-full -z-10 blur-2xl opacity-60" />
            
            <div className="absolute bottom-12 -right-6 glass p-6 rounded-3xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Certified Excellence</p>
                  <p className="text-xs text-slate-500">ISO 9001:2015 Standards</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Legacy</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Building Legacies Through <span className="text-gradient">Engineering</span> Precision
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At CivicEdge, we specialize in delivering high-quality civil engineering services tailored to our clients' unique needs. Our team of experts combines technical excellence with creative problem-solving to ensure every structure we design is safe, functional, and aesthetically pleasing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all"
                  >
                    <div className="p-2 rounded-xl bg-white group-hover:bg-blue-50 text-blue-600 mr-4 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-slate-700 font-semibold text-sm">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center text-blue-600 font-bold text-lg"
            >
              Learn more about our process
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
