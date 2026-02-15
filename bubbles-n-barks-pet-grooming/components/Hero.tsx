import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/237/1920/1080" 
          alt="Happy Black Dog" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4">St. George, Utah</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
            Bubbles N' Barks <br /> Pet Grooming
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light mb-10 text-gray-100">
            Professional grooming services where your pet is treated like royalty. 
            Polished, pristine, and perfectly pampered.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
             <a href="#contact">
                <Button variant="white">Book Appointment</Button>
             </a>
             <a href="#services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark hover:border-white">
                  Our Services
                </Button>
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};