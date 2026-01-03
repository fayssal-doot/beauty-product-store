"use client";
import React from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

const CartSummary = () => {
  const { getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="glass p-6 md:p-8 rounded-2xl h-fit">
      <h3 className="text-xl font-bold text-rose-950 mb-6">Order Summary</h3>
      
      <div className="space-y-4 mb-6 text-sm text-stone-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        {shipping === 0 && (
          <p className="text-xs text-green-600 italic">You qualify for free shipping!</p>
        )}
      </div>
      
      <div className="border-t border-stone-200 pt-4 mb-8 flex justify-between items-center">
        <span className="text-lg font-bold text-rose-950">Total</span>
        <span className="text-xl font-bold text-rose-950">${total.toFixed(2)}</span>
      </div>
      
      <Link 
        href="/checkout"
        className="block w-full py-4 bg-rose-950 text-white font-bold text-center rounded-full hover:bg-rose-900 transition-colors shadow-lg"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
