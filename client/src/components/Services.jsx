import React from 'react';
import { Building, Users, Clipboard, HardHat } from 'lucide-react';

const iconMap = {
  Building: Building,
  Users: Users,
  Clipboard: Clipboard,
  HardHat: HardHat,
};

export default function Services({ services }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of civil engineering services, ensuring excellence at every stage of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Building;
            return (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
