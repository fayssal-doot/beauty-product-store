"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/components/cart/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartEmpty from '@/components/cart/CartEmpty';
import CartSummary from '@/components/cart/CartSummary';

export default function CartPage() {
  const { cart, isLoaded } = useCart();

  if (!isLoaded) return null;

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-rose-950 mb-12 text-center md:text-left"
        >
          Shopping Bag
        </motion.h1>
        
        <AnimatePresence mode="wait">
          {cart.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CartEmpty />
            </motion.div>
          ) : (
            <motion.div 
              key="cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              <div className="lg:col-span-2 space-y-2">
                <AnimatePresence>
                  {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>
              <div className="lg:col-span-1">
                <CartSummary />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
}
