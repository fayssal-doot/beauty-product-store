"use client";
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';

const CartSummary = () => {
  const { getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      className="glass p-6 md:p-8 rounded-2xl h-fit sticky top-28"
    >
      <h3 className="text-xl font-bold text-rose-950 mb-6">Order Summary</h3>
      
      <div className="space-y-4 mb-6 text-sm text-stone-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <AnimatePresence mode="wait">
            <motion.span 
              key={subtotal}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-medium"
            >
              ${subtotal.toFixed(2)}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <AnimatePresence>
          {shipping === 0 && (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-green-600 italic"
            >
              You qualify for free shipping!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      <div className="border-t border-stone-200 pt-4 mb-8 flex justify-between items-center">
        <span className="text-lg font-bold text-rose-950">Total</span>
        <AnimatePresence mode="wait">
          <motion.span 
            key={total}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl font-bold text-rose-950"
          >
            ${total.toFixed(2)}
          </motion.span>
        </AnimatePresence>
      </div>
      
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link 
          href="/checkout"
          className="block w-full py-4 bg-rose-950 text-white font-bold text-center rounded-full hover:bg-rose-900 transition-colors shadow-lg animate-glow-pulse"
        >
          Proceed to Checkout
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CartSummary;
