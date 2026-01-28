import React from 'react';
import { ArrowRight, Building2, HardHat, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-6">
                <HardHat className="w-4 h-4 mr-2" />
                Trusted Engineering Solutions
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Building the <span className="text-gradient">Foundations</span> of Tomorrow
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Innovative structural designs and comprehensive construction consultancy for modern infrastructure. Precision engineering meet sustainable vision.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-slate-700 bg-white border-2 border-slate-100 hover:bg-slate-50 transition-all"
                >
                  Get Consultation
                </motion.a>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">150+</span>
                  <span className="text-sm text-slate-500">Projects Completed</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">12+</span>
                  <span className="text-sm text-slate-500">Years Experience</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">98%</span>
                  <span className="text-sm text-slate-500">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-400/20">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Construction"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 glass p-4 rounded-2xl shadow-xl hidden xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Structure Type</p>
                    <p className="text-sm font-bold text-slate-900">High-Rise Buildings</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-1/4 glass p-4 rounded-2xl shadow-xl hidden xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white">
                    <Compass size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Design Focus</p>
                    <p className="text-sm font-bold text-slate-900">Sustainability</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
