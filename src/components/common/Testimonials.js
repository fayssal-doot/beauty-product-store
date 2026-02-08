"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '@/data/products';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-96 h-96 bg-rose-400 rounded-full filter blur-3xl animate-morph"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-rose-950 mb-4">Loved by Skin Enthusiasts</h2>
          <p className="text-rose-900/80 max-w-2xl mx-auto font-medium text-lg">See what our community has to say about their journey to better skin.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="glass p-8 rounded-2xl border border-white/40 relative group"
            >
              {/* Decorative quote */}
              <span className="absolute -top-4 -left-2 text-7xl text-rose-200 font-serif leading-none select-none opacity-50 group-hover:opacity-100 transition-opacity">&ldquo;</span>
              
              <div className="flex gap-0.5 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
                  >
                    <FiStar fill={i < testimonial.rating ? "currentColor" : "none"} />
                  </motion.span>
                ))}
              </div>
              <p className="text-stone-600 mb-6 italic leading-relaxed relative z-10">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-4">
                <motion.img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-100"
                  whileHover={{ scale: 1.15 }}
                />
                <div>
                  <h4 className="font-semibold text-rose-950">{testimonial.name}</h4>
                  <p className="text-xs text-rose-500 uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
