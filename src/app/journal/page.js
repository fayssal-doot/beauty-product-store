"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { FALLBACK_IMAGE } from '@/utils/sanitize';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Layering Skincare",
      excerpt: "Confused about whether serum goes before or after oil? We break down the correct order of application for maximum absorption and results.",
      date: "October 12, 2023",
      category: "Skincare Tips",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Why Niacinamide is a Game Changer",
      excerpt: "This multitasking ingredient is taking the beauty world by storm. Here's why you need to add it to your routine immediately.",
      date: "September 28, 2023",
      category: "Ingredients",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "5 Signs Your Moisture Barrier is Damaged",
      excerpt: "Redness, stinging, and breakouts? You might have compromised your skin barrier. Here is how to fix it gently and effectively.",
      date: "September 15, 2023",
      category: "Skin Health",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Morning vs. Night Routine: What's the Difference?",
      excerpt: "Should you double cleanse in the morning? Do you need SPF at night? We clarify the key differences between your AM and PM rituals.",
      date: "August 30, 2023",
      category: "Routines",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-bold text-rose-950 mb-6"
          >
            The Glow Edit
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-rose-900/80 max-w-2xl mx-auto"
          >
            Expert advice, ingredient spotlights, and beauty tips to help you achieve your healthiest skin yet.
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="glass rounded-3xl overflow-hidden mb-16 grid grid-cols-1 md:grid-cols-2 gap-0 shadow-xl group"
        >
          <div className="h-[400px] md:h-auto relative overflow-hidden">
             <motion.img 
               src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=1200&q=80" 
               alt="Featured Article" 
               className="w-full h-full object-cover"
               onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.6 }}
             />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-rose-500 font-bold tracking-wider uppercase text-sm mb-4"
            >
              Featured Story
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold text-rose-950 mb-4"
            >
              The Truth About Clean Beauty Standards
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-stone-700 leading-relaxed mb-8"
            >
              In an unregulated industry, &ldquo;clean&rdquo; can mean anything. We&apos;re diving deep into what it actually takes to formulate safe, effective, and environmentally conscious skincare products in 2024.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="#" className="text-rose-600 font-bold hover:text-rose-700 transition-colors inline-flex items-center gap-2 group/link">
                Read Full Article 
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                >
                  <FiArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Article Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="h-64 overflow-hidden">
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-stone-500">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-rose-950 mb-3 group-hover:text-rose-600 transition-colors">{post.title}</h3>
                <p className="text-stone-600 mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="mt-auto">
                   <Link href="#" className="text-rose-600 font-semibold hover:text-rose-800 transition-colors inline-flex items-center gap-1">
                     Read More <FiArrowRight size={14} />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
