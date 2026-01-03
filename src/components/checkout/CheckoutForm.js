"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useCart } from '../cart/CartContext';
import Link from 'next/link';

const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const { clearCart } = useCart();

  const onSubmit = (data) => {
    // Simulate processing
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-8 rounded-2xl text-center"
      >
        <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Order Confirmed!</h2>
        <p className="text-green-700 mb-8">Thank you for your purchase. We've sent a confirmation email to you.</p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Contact Info */}
      <section>
        <h3 className="text-xl font-semibold text-rose-950 mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
            <input 
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>
      </section>

      {/* Shipping Address */}
      <section>
        <h3 className="text-xl font-semibold text-rose-950 mb-4">Shipping Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
            <input 
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-stone-700 mb-1">Address</label>
            <input 
              {...register("address", { required: "Address is required" })}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">City</label>
            <input 
              {...register("city", { required: "City is required" })}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
            />
             {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Postal Code</label>
            <input 
              {...register("zip", { required: "Zip Code is required" })}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
            />
             {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
          </div>
        </div>
      </section>

      {/* Payment - Mock */}
      <section>
        <h3 className="text-xl font-semibold text-rose-950 mb-4">Payment</h3>
        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-sm text-stone-600">
           Payment integration is mocked for this demo. No real charge will be made.
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-stone-700 mb-1">Card Number</label>
          <input 
            placeholder="0000 0000 0000 0000"
            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
           <div>
             <label className="block text-sm font-medium text-stone-700 mb-1">Expiry</label>
             <input 
               placeholder="MM/YY"
               className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-stone-700 mb-1">CVC</label>
             <input 
               placeholder="123"
               className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-rose-500 outline-none"
             />
           </div>
        </div>
      </section>

      <button 
        type="submit"
        className="w-full py-4 bg-rose-950 text-white font-bold text-lg rounded-full hover:bg-rose-900 transition-colors shadow-lg"
      >
        Complete Order
      </button>
    </form>
  );
};

export default CheckoutForm;
