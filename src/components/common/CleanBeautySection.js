"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { FALLBACK_IMAGE } from '@/utils/sanitize';

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.5, type: "spring" },
  }),
};

const features = [
  "Cruelty-free and vegan",
  "Dermatologist tested",
  "Sustainably sourced ingredients",
  "Recyclable packaging",
];

const CleanBeautySection = () => {
  return (
    <section className="py-20 glass mx-4 md:mx-6 rounded-3xl my-8 relative overflow-hidden">
      {/* Decorative blob */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl animate-morph"
      />

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image with hover zoom */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotateY: -5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 rounded-2xl overflow-hidden shadow-xl group"
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Skincare Routine" 
            className="w-full object-cover h-[500px]"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="flex-1 space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-rose-950"
          >
            Clean Beauty, <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">No Compromises</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg leading-relaxed"
          >
            We believe that skincare should be simple, effective, and safe. That&apos;s why we formulate our products with high-quality organic ingredients that are free from parabens, sulfates, and artificial fragrances.
          </motion.p>
          <ul className="space-y-4">
            {features.map((item, i) => (
              <motion.li 
                key={i}
                custom={i}
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 text-stone-700 font-medium"
              >
                <motion.span 
                  className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.2, backgroundColor: 'rgb(244, 63, 94)' }}
                >
                  <FiCheck className="text-rose-500" size={14} />
                </motion.span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanBeautySection;
