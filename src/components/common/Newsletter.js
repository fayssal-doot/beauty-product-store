"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiCheck } from 'react-icons/fi';

const Newsletter = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden mt-12 mb-12 mx-4 md:mx-6 rounded-3xl glass border-none">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-600 opacity-90" /> */}\
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-rose-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Glow Club</h2>
          <p className="mb-8 text-rose-900/80 text-lg font-medium">Sign up for exclusive access to new launches, skincare tips, and 15% off your first order.</p>
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center gap-2 text-white font-medium"
            >
              <FiCheck size={20} />
              <span>Thank you for subscribing! Check your inbox for the discount code.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 text-left">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-6 py-4 rounded-full text-stone-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                {errors.email && (
                  <p className="text-red-200 text-sm mt-1 ml-4">{errors.email.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-rose-950 text-white font-bold rounded-full hover:bg-rose-900 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
