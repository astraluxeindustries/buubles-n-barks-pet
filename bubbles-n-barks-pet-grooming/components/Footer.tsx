import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold text-brand-dark tracking-tighter mb-4 block">
              Bubbles N' Barks
            </a>
            <p className="text-brand-secondary text-sm leading-relaxed max-w-xs">
              Providing premium pet grooming services in St. George, Utah. 
              We treat every pet with the love, care, and respect they deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brand-dark uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-brand-secondary">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-brand-primary transition-colors">Reviews</a></li>
              <li><a href="#gallery" className="hover:text-brand-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-brand-dark uppercase tracking-widest text-sm mb-6">Hours</h4>
            <ul className="space-y-3 text-sm text-brand-secondary">
              <li className="flex justify-between max-w-[200px]"><span>Mon - Fri</span> <span>9:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between max-w-[200px]"><span>Saturday</span> <span>By Appointment</span></li>
              <li className="flex justify-between max-w-[200px]"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-secondary">
          <p>&copy; {new Date().getFullYear()} Bubbles N' Barks Pet Grooming. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with care in Utah.</p>
        </div>
      </div>
    </footer>
  );
};