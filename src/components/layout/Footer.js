"use client";
import React from 'react';
import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/40 pt-16 pb-8 text-rose-950/80 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-rose-950 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              GlowUp
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium organic skincare designed to bring out your natural radiance. Clean ingredients, real results.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors">
                <FiFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-rose-950 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=Serums" className="hover:text-rose-500 transition-colors">Serums</Link></li>
              <li><Link href="/products?category=Moisturizers" className="hover:text-rose-500 transition-colors">Moisturizers</Link></li>
              <li><Link href="/products?category=Cleansers" className="hover:text-rose-500 transition-colors">Cleansers</Link></li>
              <li><Link href="/products?category=Sunscreen" className="hover:text-rose-500 transition-colors">Sunscreen</Link></li>
              <li><Link href="/products" className="hover:text-rose-500 transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-rose-950 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-rose-500 transition-colors">Our Story</Link></li>
              <li><Link href="/about" className="hover:text-rose-500 transition-colors">Sustainability</Link></li>
              <li><Link href="/journal" className="hover:text-rose-500 transition-colors">Journal</Link></li>
              <li><Link href="#" className="hover:text-rose-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-rose-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-rose-950 mb-4">Stay Glowing</h3>
            <p className="text-sm mb-4">Subscribe for beauty tips and 10% off your first order.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-500 text-sm"
              />
              <button 
                type="button"
                className="bg-rose-500 text-white p-2 rounded-lg hover:bg-rose-600 transition-colors"
              >
                <FiMail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 GlowUp Skincare. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-rose-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-rose-500 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-rose-500 transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
