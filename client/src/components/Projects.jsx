import React from 'react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our most significant engineering achievements across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-accent font-semibold mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
