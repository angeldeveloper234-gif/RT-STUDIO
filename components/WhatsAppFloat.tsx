import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.phone}?text=Hola,%20me%20interesa%20más%20información%20sobre%20sus%20servicios.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2 group hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-semibold">
        Escríbenos por WhatsApp
      </span>
    </a>
  );
};