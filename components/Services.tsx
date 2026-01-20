import React from 'react';
import { SERVICES } from '../data';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-accent font-medium uppercase tracking-widest mb-2">Nuestros Servicios</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Soluciones Integrales</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 group border-b-4 border-transparent hover:border-accent"
            >
              <div className="mb-6 inline-block p-4 bg-stone-100 rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};