"use client";
import React from 'react';
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
        <h1 className="text-4xl font-bold text-rose-950 mb-12 text-center md:text-left">Shopping Bag</h1>
        
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-2">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
