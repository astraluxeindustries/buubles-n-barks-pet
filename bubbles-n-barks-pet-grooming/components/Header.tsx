import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`}>
          Bubbles N' Barks
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-colors ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden text-sm uppercase font-bold tracking-widest ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100"
          >
            <nav className="flex flex-col p-6 space-y-4 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-brand-dark text-sm uppercase tracking-widest font-bold py-2 border-b border-gray-50 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};