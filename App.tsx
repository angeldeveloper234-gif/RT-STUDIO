import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

function App() {
  return (
    <div className="font-sans antialiased text-stone-900 bg-white">
      <Header />
      <main>
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;