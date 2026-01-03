"use client";
import React from 'react';
import { useCart } from '../cart/CartContext';

const CheckoutSummary = () => {
  const { cart, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="glass p-6 md:p-8 rounded-2xl h-fit">
      <h3 className="text-xl font-bold text-rose-950 mb-6">Order Summary</h3>
      
      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="flex gap-4">
             <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
               <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
             </div>
             <div className="flex-1 text-sm">
                <p className="font-medium text-stone-800 line-clamp-1">{item.name}</p>
                <p className="text-stone-500">Qty: {item.quantity}</p>
                <p className="font-medium text-stone-800">${(item.price * item.quantity).toFixed(2)}</p>
             </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-stone-200 pt-4 space-y-2 text-sm text-stone-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
      </div>
      
      <div className="border-t border-stone-200 pt-4 mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-rose-950">Total</span>
        <span className="text-xl font-bold text-rose-950">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
