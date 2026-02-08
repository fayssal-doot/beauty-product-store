"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiShoppingBag } from 'react-icons/fi';

const CartEmpty = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-300"
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiShoppingBag size={40} />
        </motion.div>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold text-rose-950 mb-4"
      >
        Your bag is empty
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-stone-600 mb-8"
      >
        Looks like you haven&apos;t added any skincare goodies yet.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href="/products" 
            className="inline-block px-8 py-3 bg-rose-500 text-white font-semibold rounded-full hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200"
          >
            Start Shopping
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CartEmpty;
