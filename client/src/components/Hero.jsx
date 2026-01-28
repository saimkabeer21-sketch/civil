import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6">
              Engineering Excellence for a <span className="text-accent">Sustainable Future</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Innovative structural designs and comprehensive construction consultancy for modern infrastructure. Building the foundations of tomorrow with precision and integrity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-all shadow-lg"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-all"
              >
                Get a Consultation
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering blueprint"
                className="rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
