import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-sm shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="lg:w-1/3 p-10 bg-white">
            <h3 className="text-accent font-medium uppercase tracking-widest mb-2">Contacto</h3>
            <h2 className="text-3xl font-bold text-primary mb-8">Hablemos de tu proyecto</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-full text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Ubicación</h4>
                  <p className="text-gray-600 text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-full text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Teléfono / WhatsApp</h4>
                  <a href={`tel:+${CONTACT_INFO.phone}`} className="text-gray-600 hover:text-accent transition-colors">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-full text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-accent transition-colors break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-full text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Horario de Atención</h4>
                  {CONTACT_INFO.hours.map((hour, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 min-h-[400px]">
            <iframe 
              src={CONTACT_INFO.mapsUrl}
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación RT Studio ADI"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};