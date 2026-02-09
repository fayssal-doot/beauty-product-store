"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiCheck, FiSend } from 'react-icons/fi';

// Pre-computed deterministic dot data to avoid hydration mismatch
const NEWSLETTER_DOTS = [
  { size: 4, x: 10, duration: 9 },
  { size: 7, x: 25, duration: 11 },
  { size: 5, x: 40, duration: 8 },
  { size: 8, x: 55, duration: 13 },
  { size: 3, x: 65, duration: 10 },
  { size: 6, x: 78, duration: 12 },
  { size: 5, x: 88, duration: 9 },
  { size: 7, x: 50, duration: 11 },
];

const FloatingDot = ({ delay, size, x, duration }) => (
  <motion.div
    className="absolute rounded-full bg-rose-300/30"
    style={{ width: size, height: size, left: `${x}%`, bottom: '-5%' }}
    animate={{
      y: [0, -500],
      opacity: [0, 0.8, 0.8, 0],
      scale: [0, 1, 1, 0.5],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }}
  />
);

const Newsletter = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    setTimeout(() => {
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden mt-12 mb-12 mx-4 md:mx-6 rounded-3xl glass border-none">
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      {/* Floating particles */}
      {NEWSLETTER_DOTS.map((d, i) => (
        <FloatingDot
          key={i}
          delay={i * 2}
          size={d.size}
          x={d.x}
          duration={d.duration}
        />
      ))}

      {/* Decorative morphing blob */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-rose-400 rounded-full filter blur-3xl animate-morph"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-rose-950">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Join the Glow Club
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-rose-900/80 text-lg font-medium"
          >
            Sign up for exclusive access to new launches, skincare tips, and 15% off your first order.
          </motion.p>
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-green-500/20 backdrop-blur-sm p-6 rounded-2xl flex items-center justify-center gap-3 text-green-800 font-medium border border-green-200/50"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <FiCheck size={24} />
                </motion.span>
                <span>Thank you for subscribing! Check your inbox for the discount code.</span>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit(onSubmit)} 
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1 text-left">
                  <motion.input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(244,63,94,0.2)" }}
                    className="w-full px-6 py-4 rounded-full text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-shadow bg-white/90 backdrop-blur-sm"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-sm mt-1 ml-4"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-rose-950 text-white font-bold rounded-full hover:bg-rose-900 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Subscribe <FiSend size={16} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
