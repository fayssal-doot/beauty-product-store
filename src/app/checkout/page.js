"use client";
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import CheckoutSummary from '@/components/checkout/CheckoutSummary';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-950 mb-12 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <CheckoutForm />
          </div>
          <div className="lg:pl-12">
            <CheckoutSummary />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
