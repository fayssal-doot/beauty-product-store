"use client";
import React from 'react';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 md:gap-6 py-6 border-b border-stone-200">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-rose-950 text-lg">{item.name}</h3>
          <p className="font-bold text-stone-800">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        
        <p className="text-sm text-stone-500 mb-4">{item.size}</p>
        
        <div className="flex justify-between items-end mt-auto">
          <div className="flex items-center border border-stone-200 rounded-full">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-2 text-stone-500 hover:text-rose-600 transition-colors"
            >
              <FiMinus size={14} />
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-2 text-stone-500 hover:text-rose-600 transition-colors"
            >
              <FiPlus size={14} />
            </button>
          </div>
          
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-stone-400 hover:text-red-500 transition-colors p-2"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
