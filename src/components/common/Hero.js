"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556228720-19875949e24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="absolute -top-20 -right-20 w-64 h-64 bg-rose-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          />
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          />

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-rose-950 mb-6 leading-tight relative"
          >
            Reveal Your <br/>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600 animate-pulse">Natural Glow</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed backdrop-blur-sm bg-white/30 p-4 rounded-xl border border-white/20 shadow-sm"
          >
            Premium organic skincare formulated with nature's most potent ingredients to nourish, hydrate, and transform your skin.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/products" 
              className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-full hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg shadow-rose-200 text-center"
            >
              Shop Collection
            </Link>
            <Link 
              href="#featured" 
              className="px-8 py-4 bg-white text-rose-950 font-semibold rounded-full border border-stone-200 hover:border-rose-300 hover:text-rose-500 transition-all text-center"
            >
              Discover More
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
