import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BUSINESS_NAME } from '../data';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Using one of the provided images */}
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMzp0O5A_YYENEfT4VjWt28MgveQbutxaL1ZPc=w203-h253-k-no" 
                alt="Proyecto RT Studio" 
                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 hidden md:block rounded-sm shadow-lg">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-sm tracking-widest uppercase">Compromiso</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-accent font-medium uppercase tracking-widest mb-2">Sobre Nosotros</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Excelencia técnica y visión creativa en cada proyecto
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En <strong>{BUSINESS_NAME}</strong>, entendemos que la arquitectura va más allá de construir edificios; 
              se trata de crear entornos que mejoren la calidad de vida. Ubicados en Teziutlán, Puebla, 
              nos especializamos en fusionar la ingeniería de precisión con un diseño arquitectónico vanguardista.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro enfoque está centrado en el cliente. Escuchamos tus necesidades para traducirlas en 
              espacios funcionales, seguros y estéticamente impactantes. Desde la primera línea en el plano 
              hasta el último detalle en la obra, garantizamos calidad y profesionalismo.
            </p>

            <ul className="space-y-4">
              {[
                "Experiencia comprobada en el sector residencial y comercial.",
                "Atención personalizada y asesoría técnica continua.",
                "Compromiso absoluto con los tiempos de entrega.",
                "Diseños innovadores adaptados al entorno local."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};