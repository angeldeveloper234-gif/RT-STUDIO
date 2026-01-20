import React from 'react';
import { BUSINESS_NAME } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2 font-bold text-white tracking-widest">{BUSINESS_NAME}</p>
        <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p className="text-xs mt-4 opacity-50">Diseño web profesional para Arquitectura e Ingeniería.</p>
      </div>
    </footer>
  );
};