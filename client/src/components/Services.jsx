import React from 'react';
import { Building, Users, Clipboard, HardHat, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Building: Building,
  Users: Users,
  Clipboard: Clipboard,
  HardHat: HardHat,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Services({ services }) {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Expert Engineering Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We provide a comprehensive range of civil engineering services, ensuring excellence at every stage of your project with modern methodologies.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Building;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group relative"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                  <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="absolute bottom-4 right-8 h-1 w-0 bg-blue-600 group-hover:w-12 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
