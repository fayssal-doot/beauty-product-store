"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FiHeart, FiGlobe, FiSun } from 'react-icons/fi';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

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
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, type: "spring" }}
             className="absolute -top-20 -right-20 w-80 h-80 bg-rose-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-morph"
          />
          <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, delay: 0.3, type: "spring" }}
             className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-morph"
             style={{ animationDelay: '4s' }}
          />
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-bold text-rose-950 mb-6 relative z-10"
          >
            Your Beauty Destination
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-rose-900/80 max-w-3xl mx-auto leading-relaxed relative z-10"
          >
            GlowUp is your premier online destination for the world&apos;s most effective skincare. We do the research so you don&apos;t have to.
          </motion.p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="rounded-3xl overflow-hidden h-[500px] shadow-xl group"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Curated Skincare Collection" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="glass p-8 rounded-3xl"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-rose-950 mb-6"
            >
              Curating the Best
            </motion.h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              At GlowUp, we are passionate about skincare, but we know how overwhelming the beauty industry can be. With thousands of new launches every year, finding what actually works is a challenge.
            </p>
            <p className="text-stone-700 leading-relaxed">
              That&apos;s where we come in. We are a team of beauty enthusiasts dedicated to vetting, testing, and selecting only the high-performing products that deliver real results. Whether you&apos;re looking for clean beauty staples or clinical-grade serums, you&apos;ll find it here.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-rose-950 text-center mb-12"
          >
            Our Values
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
                className="glass-card p-8 rounded-2xl text-center group"
              >
                <motion.div 
                  className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring" }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-rose-950 mb-3">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
