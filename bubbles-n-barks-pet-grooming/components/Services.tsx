import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Full Groom",
    description: "The complete spa treatment. Includes bath, blow dry, brush out, haircut, nail trim, and ear cleaning. Perfect for keeping your pet looking their absolute best.",
    image: "https://picsum.photos/id/1025/600/400"
  },
  {
    title: "Bath & Tidy",
    description: "Ideal for in-between grooms. Includes a refreshing bath, blow dry, nail trim, and trimming of the face, feet, and sanitary areas.",
    image: "https://picsum.photos/id/169/600/400"
  },
  {
    title: "Puppy Cuts",
    description: "A gentle introduction to grooming for your new family member. We focus on positive reinforcement to ensure a lifetime of happy grooming experiences.",
    image: "https://picsum.photos/id/582/600/400"
  },
  {
    title: "Nail Care",
    description: "Professional nail trimming and grinding to keep your pet's paws healthy and your floors scratch-free. Quick, safe, and stress-free.",
    image: "https://picsum.photos/id/837/600/400"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-brand-secondary text-sm font-bold uppercase tracking-widest mb-3">What We Do</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Exquisite Grooming Services</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 relative h-64 md:h-80">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-secondary leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-primary border-b border-brand-primary pb-1 inline-block">
                Learn More
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};