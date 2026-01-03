"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FiHeart, FiGlobe, FiSun } from 'react-icons/fi';

export default function AboutPage() {
  const values = [
    {
      icon: <FiHeart className="w-8 h-8 text-rose-500" />,
      title: "Carefully Curated",
      description: "We hand-pick every product on our shelves, testing hundreds of brands to bring you only the absolute best."
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-rose-500" />,
      title: "Global Discovery",
      description: "We scour the globe to find hidden gems and cult favorites, making premium skincare accessible to everyone."
    },
    {
      icon: <FiSun className="w-8 h-8 text-rose-500" />,
      title: "Verified Authenticity",
      description: "We guarantee 100% authenticity. We work directly with brands and authorized distributors."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="glass p-8 md:p-16 rounded-3xl text-center mb-16 relative overflow-hidden">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="absolute -top-20 -right-20 w-64 h-64 bg-rose-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-rose-950 mb-6 relative z-10"
          >
            Your Beauty Destination
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-rose-900/80 max-w-3xl mx-auto leading-relaxed relative z-10"
          >
            GlowUp is your premier online destination for the world's most effective skincare. We do the research so you don't have to.
          </motion.p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-[500px] shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Curated Skincare Collection" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-rose-950 mb-6">Curating the Best</h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              At GlowUp, we are passionate about skincare, but we know how overwhelming the beauty industry can be. With thousands of new launches every year, finding what actually works is a challenge.
            </p>
            <p className="text-stone-700 leading-relaxed">
              That's where we come in. We are a team of beauty enthusiasts dedicated to vetting, testing, and selecting only the high-performing products that deliver real results. Whether you're looking for clean beauty staples or clinical-grade serums, you'll find it here.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-rose-950 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-rose-950 mb-3">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
