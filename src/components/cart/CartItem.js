"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from './CartContext';
import { FALLBACK_IMAGE } from '@/utils/sanitize';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      className="flex gap-4 md:gap-6 py-6 border-b border-stone-200 group"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="w-24 h-24 md:w-32 md:h-32 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0 shadow-md"
      >
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }} />
      </motion.div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-rose-950 text-lg">{item.name}</h3>
          <AnimatePresence mode="wait">
            <motion.p 
              key={item.price * item.quantity}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-stone-800"
            >
              ${(item.price * item.quantity).toFixed(2)}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <p className="text-sm text-stone-500 mb-4">{item.size}</p>
        
        <div className="flex justify-between items-end mt-auto">
          <div className="flex items-center border border-stone-200 rounded-full">
            <motion.button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              whileTap={{ scale: 0.8 }}
              className="p-2 text-stone-500 hover:text-rose-600 transition-colors"
            >
              <FiMinus size={14} />
            </motion.button>
            <AnimatePresence mode="wait">
              <motion.span 
                key={item.quantity}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="w-8 text-center text-sm font-medium"
              >
                {item.quantity}
              </motion.span>
            </AnimatePresence>
            <motion.button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              whileTap={{ scale: 0.8 }}
              className="p-2 text-stone-500 hover:text-rose-600 transition-colors"
            >
              <FiPlus size={14} />
            </motion.button>
          </div>
          
          <motion.button 
            onClick={() => removeFromCart(item.id)}
            whileHover={{ scale: 1.2, color: '#ef4444' }}
            whileTap={{ scale: 0.8 }}
            className="text-stone-400 transition-colors p-2"
          >
            <FiTrash2 size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
