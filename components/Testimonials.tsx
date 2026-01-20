import React from 'react';
import { Star, User } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-accent font-medium uppercase tracking-widest mb-2">Opiniones</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                {review.imageUrl ? (
                  <img src={review.imageUrl} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-lg">
                    <User size={24} />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <div className="flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{review.comment}"</p>
              <div className="mt-4 text-xs text-gray-500 uppercase tracking-wide">Fuente: Google Maps</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};