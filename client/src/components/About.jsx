import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    "Over 15 years of industry experience",
    "Expertise in structural & seismic design",
    "Commitment to sustainable building practices",
    "Proven track record of successful project delivery",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80"
              alt="Civil Engineer at site"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">Building Legacies Through Engineering</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At CivicEdge, we specialize in delivering high-quality civil engineering services tailored to our clients' unique needs. Our team of experts combines technical excellence with creative problem-solving to ensure every structure we design is safe, functional, and aesthetically pleasing.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether it's a residential development, commercial complex, or infrastructure project, we bring precision and passion to every stage of the process—from initial planning to final site supervision.
            </p>
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
