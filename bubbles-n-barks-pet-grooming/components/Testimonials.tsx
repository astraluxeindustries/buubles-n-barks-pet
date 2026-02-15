import React from 'react';
import { motion } from 'framer-motion';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    author: "Korbin Ferris",
    text: "They do a wonderful job grooming dogs. Jessica has a great attitude and is very punctual, checked in with me multiple times during the appointment. My dog's hair was overdue and she still made them look amazing.",
    rating: 5,
    date: "4 months ago"
  },
  {
    id: 2,
    author: "Ellie",
    text: "We took our two long hair chihuahuas to get a short hair trim and they came out looking so adorable and perfect! The groomers did a stellar job! They also got our dogs in quickly.",
    rating: 5,
    date: "9 months ago"
  },
  {
    id: 3,
    author: "Ro Z Bee",
    text: "I've been bringing my granddogs to Bubbles & Barks for about a year, and they always do an Amazing job. Recently the mobile groomer that does my own dogs up and left town... my 3 schnauzer babies were in desperate need. Bubbles & Barks saved the day!",
    rating: 5,
    date: "4 months ago"
  },
  {
    id: 4,
    author: "Local Guide",
    text: "Best grooming in St. George. The attention to detail is unmatched. My poodle always comes back smelling fresh and looking like a show dog.",
    rating: 5,
    date: "6 months ago"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h3 className="text-brand-secondary text-sm font-bold uppercase tracking-widest mb-3">Client Love</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
              Trusted by Pet Parents <br /> in St. George.
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
             <p className="text-brand-primary font-bold text-lg">4.9/5 Average Rating</p>
             <p className="text-brand-secondary text-sm">Based on local reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-gray-100 -z-0">”</div>
              
              <div className="flex mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-brand-secondary mb-6 relative z-10 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                 <p className="font-bold text-brand-dark uppercase tracking-wide text-sm">{review.author}</p>
                 <p className="text-gray-400 text-xs mt-1">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};