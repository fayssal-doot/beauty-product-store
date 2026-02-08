"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useCart } from '../cart/CartContext';

const NavLink = ({ href, name, isActive }) => (
  <Link href={href} className="relative text-sm font-medium transition-colors hover:text-rose-500 group py-1">
    <span className={isActive ? 'text-rose-600' : 'text-stone-600'}>
      {name}
    </span>
    {/* Animated underline */}
    <motion.span
      className="absolute bottom-0 left-0 h-0.5 bg-rose-500 rounded-full"
      initial={false}
      animate={{ width: isActive ? '100%' : '0%' }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{ originX: 0 }}
    />
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop All', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-rose-900/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter text-rose-950 flex items-center gap-2 group">
            <motion.span 
              className="w-3 h-3 rounded-full bg-rose-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              GlowUp
            </motion.span>
          </Link>

          {/* Desktop Navigation with animated underlines */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                href={link.href}
                name={link.name}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          {/* Icons with hover animations */}
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.15, rotate: 15 }} whileTap={{ scale: 0.9 }}>
              <Link href="/products" className="p-2 text-stone-600 hover:text-rose-600 transition-colors block">
                <FiSearch size={20} />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
              <Link href="/cart" className="relative p-2 text-stone-600 hover:text-rose-600 transition-colors block group">
                <FiShoppingBag size={20} />
                <AnimatePresence mode="wait">
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      key={cartCount}
                      className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>

            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, height: 'auto', backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-white/90 border-t border-white/40 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link 
                    href={link.href}
                    className={`block text-lg font-medium py-3 px-4 rounded-xl transition-all ${
                      pathname === link.href ? 'text-rose-600 bg-rose-50' : 'text-stone-600 hover:bg-rose-50/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
