"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiArrowUpRight } from 'react-icons/fi';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SocialIcon = ({ icon: Icon, delay }) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.2, rotate: 10, y: -4 }}
    whileTap={{ scale: 0.9 }}
    className="p-2.5 bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors shadow-md"
  >
    <Icon size={18} />
  </motion.a>
);

const Footer = () => {
  return (
    <footer className="glass border-t border-white/40 pt-16 pb-8 text-rose-950/80 mt-auto overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-rose-950 flex items-center gap-2 group">
              <motion.span 
                className="w-3 h-3 rounded-full bg-rose-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              GlowUp
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium organic skincare designed to bring out your natural radiance. Clean ingredients, real results.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={FiInstagram} delay={0.2} />
              <SocialIcon icon={FiTwitter} delay={0.3} />
              <SocialIcon icon={FiFacebook} delay={0.4} />
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-rose-950 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Serums', href: '/products?category=Serums' },
                { label: 'Moisturizers', href: '/products?category=Moisturizers' },
                { label: 'Cleansers', href: '/products?category=Cleansers' },
                { label: 'Sunscreen', href: '/products?category=Sunscreen' },
                { label: 'View All', href: '/products' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-rose-500 transition-colors inline-flex items-center gap-1 group">
                    {item.label}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-rose-950 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Our Story', href: '/about' },
                { label: 'Sustainability', href: '/about' },
                { label: 'Journal', href: '/journal' },
                { label: 'Careers', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-rose-500 transition-colors inline-flex items-center gap-1 group">
                    {item.label}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-rose-950 mb-4">Stay Glowing</h3>
            <p className="text-sm mb-4">Subscribe for beauty tips and 10% off your first order.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-sm transition-all"
              />
              <motion.button 
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-rose-500 text-white p-2 rounded-lg hover:bg-rose-600 transition-colors shadow-md"
              >
                <FiMail size={18} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
        >
          <p>&copy; 2024 GlowUp Skincare. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Shipping Info'].map(item => (
              <Link key={item} href="#" className="hover:text-rose-500 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
