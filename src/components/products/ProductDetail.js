"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiMinus, FiPlus, FiShoppingBag, FiCheck, FiHeart } from 'react-icons/fi';
import { useCart } from '../cart/CartContext';
import { FALLBACK_IMAGE, clampQuantity } from '@/utils/sanitize';

const MAX_QTY = 99;

const tabContent = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, filter: 'blur(4px)', transition: { duration: 0.2 } },
};

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits');
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imgHover, setImgHover] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Image with hover zoom */}
        <motion.div 
          initial={{ opacity: 0, x: -40, rotateY: -5 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-white/30 backdrop-blur-sm shadow-xl border border-white/20 group cursor-zoom-in"
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
          style={{ perspective: 1000 }}
        >
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
            animate={{ scale: imgHover ? 1.15 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
          >
            <FiHeart className="text-rose-500" size={20} />
          </motion.div>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
        >
          <div className="mb-4">
             <motion.span 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="text-sm text-rose-500 font-semibold tracking-wider uppercase mb-2 block"
             >
               {product.category}
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, type: "spring" }}
               className="text-3xl md:text-5xl font-bold text-rose-950 mb-4 leading-tight"
             >
               {product.name}
             </motion.h1>
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex items-center gap-4 mb-6"
             >
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ opacity: 0, scale: 0 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    >
                      <FiStar fill={i < Math.floor(product.rating) ? "currentColor" : "none"} size={18} />
                    </motion.span>
                  ))}
                  <span className="text-stone-800 font-medium ml-2">{product.rating}</span>
                </div>
                <span className="text-stone-400">|</span>
                <span className="text-stone-500">{product.reviews} Reviews</span>
             </motion.div>
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="text-2xl font-bold text-stone-800 mb-6"
             >
               ${product.price.toFixed(2)}
             </motion.p>
             <motion.p 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7 }}
               className="text-stone-600 leading-relaxed mb-8 text-lg"
             >
               {product.description}
             </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mb-8 border-b border-stone-200 pb-8"
          >
            <div className="flex items-center border border-stone-300 rounded-full w-max">
              <motion.button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                whileTap={{ scale: 0.85 }}
                className="p-4 hover:text-rose-600 transition-colors"
              >
                <FiMinus />
              </motion.button>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={quantity}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="font-semibold w-8 text-center"
                >
                  {quantity}
                </motion.span>
              </AnimatePresence>
              <motion.button 
                onClick={() => setQuantity(clampQuantity(quantity + 1, 1, MAX_QTY))}
                whileTap={{ scale: 0.85 }}
                className="p-4 hover:text-rose-600 transition-colors"
              >
                <FiPlus />
              </motion.button>
            </div>
            
            <motion.button 
              onClick={handleAddToCart}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all shadow-lg ${
                added 
                ? 'bg-green-600 text-white shadow-green-200' 
                : 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-200 animate-glow-pulse'
              }`}
            >
              <AnimatePresence mode="wait">
                {added ? (
                  <motion.span
                    key="added"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <FiCheck size={20} />
                    Added to Bag!
                  </motion.span>
                ) : (
                  <motion.span
                    key="add"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <FiShoppingBag size={20} />
                    Add to Cart
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Animated Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex gap-8 border-b border-stone-200 mb-6 overflow-x-auto">
              {['benefits', 'ingredients', 'usage'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-4 text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap ${
                    activeTab === tab 
                    ? 'text-rose-600' 
                    : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            <div className="min-h-[150px] text-stone-600 leading-relaxed">
              <AnimatePresence mode="wait">
                {activeTab === 'benefits' && (
                  <motion.ul 
                    key="benefits"
                    variants={tabContent}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {product.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></span>
                        {benefit}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
                {activeTab === 'ingredients' && (
                  <motion.p key="ingredients" variants={tabContent} initial="hidden" animate="visible" exit="exit">
                    {product.ingredients}
                  </motion.p>
                )}
                {activeTab === 'usage' && (
                  <motion.p key="usage" variants={tabContent} initial="hidden" animate="visible" exit="exit">
                    {product.usage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
