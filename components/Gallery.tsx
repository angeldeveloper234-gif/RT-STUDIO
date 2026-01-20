import React from 'react';
import { GALLERY_IMAGES } from '../data';

export const Gallery: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-accent font-medium uppercase tracking-widest mb-2">Portafolio</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestros Proyectos Recientes</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-sm">
              <img 
                src={img.url} 
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium px-4 text-center">
                  Imagen igual a la siguiente URL: <br/>
                  <span className="text-xs break-all opacity-70">{img.url.substring(0, 50)}...</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};