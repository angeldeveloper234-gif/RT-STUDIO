import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_NAME, TAGLINE, CONTACT_INFO } from '../data';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            {BUSINESS_NAME}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium hover:text-accent transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-primary font-medium py-2 border-b border-gray-100 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipMeZeHsEdp9wVikzI9Kiqgk8id29orWOkPcAWE=s325-k-no" 
            alt="Arquitectura moderna" 
            className="w-full h-full object-cover scale-110 blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-accent font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
            {TAGLINE}
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Transformamos espacios, <br /> construimos sueños.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Especialistas en diseño arquitectónico, ingeniería y construcción en Teziutlán. 
            Soluciones integrales para proyectos residenciales y comerciales.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="bg-accent text-primary px-8 py-3 rounded-sm font-bold hover:bg-white transition-colors duration-300"
            >
              Solicitar Cotización
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="border border-white text-white px-8 py-3 rounded-sm font-bold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};