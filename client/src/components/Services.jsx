import React, { useMemo, useState } from 'react';
import { Building, Users, Clipboard, HardHat, BookOpen, ArrowUpRight, X } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Building,
  Users,
  Clipboard,
  HardHat,
  BookOpen,
};

export default function Services({ services }) {
  const [activeService, setActiveService] = useState(null);
  const activeImages = useMemo(() => {
    if (!activeService?.details?.images?.length) return [];
    return activeService.details.images.slice(0, 3);
  }, [activeService]);

  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Core Services</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">Civic engineering services for every stage</h2>
            <p className="mt-4 text-lg text-slate-600">
              From concept to supervision, CivicEdge supports planning, structural integrity, and execution quality across building and infrastructure works.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Building;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-6 edge-panel group cursor-pointer"
                onClick={() => setActiveService(service)}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                  <IconComponent size={26} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 flex items-center justify-between gap-3">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">{service.description}</p>

                <div className="mt-5 h-1 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
            <div className="w-full max-w-3xl rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    {(() => {
                      const IconComponent = iconMap[activeService.icon] || Building;
                      return <IconComponent className="w-5 h-5" />;
                    })()}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{activeService.title}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {activeService.details?.summary}
              </p>

              {activeService.details?.bullets?.length ? (
                <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                  {activeService.details.bullets.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {activeImages.length ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {activeImages.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl border border-white/40 bg-white/35 backdrop-blur-xl">
                      <img src={image} alt={`${activeService.title} ${index + 1}`} className="h-32 w-full object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}

              {activeService.details?.pdfs?.length ? (
                <div className="mt-5 grid gap-3">
                  {activeService.details.pdfs.map((pdf) => (
                    <a
                      key={pdf.href}
                      href={pdf.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 hover:border-accent hover:text-accent transition-colors"
                    >
                      {pdf.label}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
