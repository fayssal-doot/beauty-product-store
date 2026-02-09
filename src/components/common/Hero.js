"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.04,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

const AnimatedText = ({ text, className }) => (
  <span className={className} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
);

// Pre-computed deterministic particle data to avoid hydration mismatch
const HERO_PARTICLES = [
  { size: 7, left: 5, duration: 10, xDrift: 30 },
  { size: 5, left: 15, duration: 12, xDrift: -20 },
  { size: 9, left: 25, duration: 9, xDrift: 45 },
  { size: 4, left: 35, duration: 11, xDrift: -35 },
  { size: 8, left: 45, duration: 13, xDrift: 25 },
  { size: 6, left: 55, duration: 8, xDrift: -40 },
  { size: 10, left: 65, duration: 10, xDrift: 15 },
  { size: 5, left: 75, duration: 14, xDrift: -25 },
  { size: 7, left: 82, duration: 9, xDrift: 35 },
  { size: 11, left: 90, duration: 12, xDrift: -15 },
  { size: 6, left: 50, duration: 11, xDrift: 20 },
  { size: 8, left: 70, duration: 10, xDrift: -30 },
];

const FloatingParticle = ({ delay, size, left, duration, xDrift }) => (
  <motion.div
    className="absolute rounded-full bg-rose-300/40"
    style={{ width: size, height: size, left: `${left}%`, bottom: '-10%' }}
    animate={{
      y: [0, -800],
      x: [0, xDrift],
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[100vh] w-full overflow-hidden flex items-center">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1920&q=80")',
          y: bgY,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent backdrop-blur-[2px]" />
      </motion.div>

      {/* Floating Particles */}
      {HERO_PARTICLES.map((p, i) => (
        <FloatingParticle
          key={i}
          delay={i * 1.5}
          size={p.size}
          left={p.left}
          duration={p.duration}
          xDrift={p.xDrift}
        />
      ))}

      {/* Morphing Blob 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="absolute -top-20 right-10 w-80 h-80 bg-gradient-to-br from-rose-400/40 to-purple-400/30 mix-blend-multiply filter blur-3xl animate-morph"
      />
      
      {/* Morphing Blob 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, type: "spring" }}
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-purple-400/30 to-pink-400/40 mix-blend-multiply filter blur-3xl animate-morph"
        style={{ animationDelay: '4s' }}
      />

      {/* Spinning Accent Ring */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-dashed border-rose-400 rounded-full animate-spin-slow"
      />

      <motion.div style={{ y: textY, opacity }} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Stagger-animated heading */}
          <motion.div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-rose-950 leading-tight">
              <AnimatedText text="Reveal Your" className="block" />
              <motion.span
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 80 }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 bg-[length:200%_auto] animate-text-shimmer"
              >
                Natural Glow
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Description with slide-up + blur reveal */}
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed glass-premium p-5 rounded-2xl"
          >
            Premium organic skincare formulated with nature's most potent ingredients to nourish, hydrate, and transform your skin.
          </motion.p>
          
          {/* CTA Buttons with spring entrance */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/products" 
                className="block px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg shadow-rose-300/50 text-center animate-glow-pulse"
              >
                Shop Collection
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="#featured" 
                className="block px-8 py-4 bg-white/80 backdrop-blur-sm text-rose-950 font-semibold rounded-full border border-white/50 hover:bg-white hover:border-rose-300 hover:text-rose-500 transition-all text-center shadow-lg"
              >
                Discover More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-950/60"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
