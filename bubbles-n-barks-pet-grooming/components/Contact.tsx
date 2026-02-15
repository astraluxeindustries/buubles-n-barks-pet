import React from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-dark text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-3">Get in Touch</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Our Salon</h2>
            
            <div className="space-y-8 mb-10">
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wider mb-2 text-gray-300">Address</h4>
                <p className="text-xl font-light">875 E Tabernacle St<br/>Saint George, UT 84770</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wider mb-2 text-gray-300">Phone</h4>
                <a href="tel:4357054483" className="text-xl font-light hover:text-brand-primary transition-colors">
                  (435) 705-4483
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold uppercase tracking-wider mb-2 text-gray-300">Email</h4>
                <a href="mailto:bubblesnbarks19@gmail.com" className="text-xl font-light hover:text-brand-primary transition-colors">
                  bubblesnbarks19@gmail.com
                </a>
              </div>
            </div>

            <Button variant="white" className="w-full md:w-auto">Get Directions</Button>
          </div>

          {/* Map / Image */}
          <div className="relative h-96 lg:h-auto min-h-[400px] w-full bg-gray-800 overflow-hidden">
            {/* Using a static map image placeholder or an iframe if permitted. 
                Since I should scrape/include data, an iframe to the real location is best for utility. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.432654302633!2d-113.5670!3d37.1082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA2JzI5LjUiTiAxMTPCsDM0JzAxLjIiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Bubbles N' Barks Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Overlay to keep it looking premium until interaction */}
            <div className="absolute inset-0 bg-brand-dark/20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};