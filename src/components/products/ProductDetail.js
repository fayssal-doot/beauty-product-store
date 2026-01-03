"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMinus, FiPlus, FiShoppingBag, FiCheck } from 'react-icons/fi';
import { useCart } from '../cart/CartContext';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits');
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-white/30 backdrop-blur-sm shadow-xl border border-white/20"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4">
             <span className="text-sm text-rose-500 font-semibold tracking-wider uppercase mb-2 block">{product.category}</span>
             <h1 className="text-3xl md:text-5xl font-bold text-rose-950 mb-4 leading-tight">{product.name}</h1>
             <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-amber-400 gap-1">
                  <FiStar fill="currentColor" />
                  <span className="text-stone-800 font-medium ml-2">{product.rating}</span>
                </div>
                <span className="text-stone-400">|</span>
                <span className="text-stone-500">{product.reviews} Reviews</span>
             </div>
             <p className="text-2xl font-bold text-stone-800 mb-6">${product.price.toFixed(2)}</p>
             <p className="text-stone-600 leading-relaxed mb-8 text-lg">{product.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-8 border-b border-stone-200 pb-8">
            <div className="flex items-center border border-stone-300 rounded-full w-max">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 hover:text-rose-600 transition-colors"
              >
                <FiMinus />
              </button>
              <span className="font-semibold w-8 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 hover:text-rose-600 transition-colors"
              >
                <FiPlus />
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg ${
                added 
                ? 'bg-green-600 text-white' 
                : 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-200'
              }`}
            >
              {added ? (
                <>
                  <FiCheck size={20} />
                  Added to Bag
                </>
              ) : (
                <>
                  <FiShoppingBag size={20} />
                  Add to Cart
                </>
              )}
            </button>
          </div>

          {/* Details Tabs */}
          <div>
            <div className="flex gap-8 border-b border-stone-200 mb-6 overflow-x-auto">
              {['benefits', 'ingredients', 'usage'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap ${
                    activeTab === tab 
                    ? 'text-rose-600 border-b-2 border-rose-600' 
                    : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="min-h-[150px] text-stone-600 leading-relaxed">
              {activeTab === 'benefits' && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'ingredients' && (
                <p>{product.ingredients}</p>
              )}
              {activeTab === 'usage' && (
                <p>{product.usage}</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
