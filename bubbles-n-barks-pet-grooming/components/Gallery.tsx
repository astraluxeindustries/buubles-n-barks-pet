import React from 'react';

const galleryImages = [
  "https://picsum.photos/id/1025/400/500", // Poodle like
  "https://picsum.photos/id/237/400/300",  // Lab
  "https://picsum.photos/id/1062/400/400", // Wrapped in towel
  "https://picsum.photos/id/582/400/500",  // Wolf/Husky type
  "https://picsum.photos/id/593/400/300",  // Tiger? No, let's stick to dogs roughly or close. 
  "https://picsum.photos/id/659/400/400",  // Husky
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h3 className="text-brand-secondary text-sm font-bold uppercase tracking-widest mb-3">Portfolio</h3>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Our Happy Customers</h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden">
              <img 
                src={src} 
                alt={`Gallery pet ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};