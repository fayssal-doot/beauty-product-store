"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiStar, FiShoppingBag, FiEye } from 'react-icons/fi';
import { useCart } from '../cart/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full will-change-transform"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white/20">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Shimmer overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg shadow-rose-500/30"
            >
              Bestseller
            </motion.span>
          )}
          {product.skinTypes.slice(0, 1).map(type => (
            <span key={type} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-semibold rounded-full uppercase tracking-wider">
              {type}
            </span>
          ))}
        </div>

        {/* Overlay Actions - spring up from bottom */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 pointer-events-none group-hover:pointer-events-auto">
          <motion.button 
            onClick={handleAdd}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1 }}
            className={`p-3 rounded-full transition-all duration-300 shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
              added ? 'bg-green-500 text-white scale-110' : 'bg-white text-rose-600 hover:bg-rose-500 hover:text-white'
            }`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title="Add to Cart"
          >
            <FiShoppingBag size={20} />
          </motion.button>
          <motion.div
            className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75"
          >
            <Link 
              href={`/products/${product.id}`}
              className="p-3 bg-white text-stone-600 rounded-full hover:bg-stone-800 hover:text-white transition-colors shadow-lg flex items-center justify-center"
              title="View Details"
            >
              <FiEye size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={`${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-stone-300'}`} size={14} />
          ))}
          <span className="text-sm text-stone-500 ml-1">({product.reviews})</span>
        </div>
        
        <Link href={`/products/${product.id}`} className="block group/link">
          <h3 className="text-lg font-semibold text-stone-800 mb-1 group-hover/link:text-rose-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-stone-500 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <motion.span 
            className="text-lg font-bold text-rose-950"
            key={product.price}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            ${product.price.toFixed(2)}
          </motion.span>
          <motion.button 
            onClick={handleAdd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-rose-600 hover:text-rose-700 underline underline-offset-4 decoration-rose-300 hover:decoration-rose-500 transition-all"
          >
            Add to Bag
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
