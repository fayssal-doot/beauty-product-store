"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiStar, FiShoppingBag, FiEye } from 'react-icons/fi';
import { useCart } from '../cart/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white/20">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Fallback to normal image if mix-blend looks bad, but for 'cool' effect trying overlay first, actually let's stick to normal image but maybe with a filter */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <span className="px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              Bestseller
            </span>
          )}
          {product.skinTypes.slice(0, 1).map(type => (
            <span key={type} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-semibold rounded-full uppercase tracking-wider">
              {type}
            </span>
          ))}
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button 
            onClick={() => addToCart(product)}
            className="p-3 bg-white text-rose-600 rounded-full hover:bg-rose-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
            title="Add to Cart"
          >
            <FiShoppingBag size={20} />
          </button>
          <Link 
            href={`/products/${product.id}`}
            className="p-3 bg-white text-stone-600 rounded-full hover:bg-stone-800 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg"
            title="View Details"
          >
            <FiEye size={20} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex items-center gap-1">
          <FiStar className="text-amber-400 fill-current" size={14} />
          <span className="text-sm text-stone-500">{product.rating} ({product.reviews})</span>
        </div>
        
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-stone-800 mb-1 group-hover:text-rose-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-stone-500 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-rose-950">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="text-sm font-medium text-rose-600 hover:text-rose-700 underline underline-offset-4"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
