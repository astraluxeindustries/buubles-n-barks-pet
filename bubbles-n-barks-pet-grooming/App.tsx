import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;