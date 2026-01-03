import React from 'react';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';

const CartEmpty = () => {
  return (
    <div className="text-center py-20">
      <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-300">
        <FiShoppingBag size={40} />
      </div>
      <h2 className="text-2xl font-bold text-rose-950 mb-4">Your bag is empty</h2>
      <p className="text-stone-600 mb-8">Looks like you haven't added any skincare goodies yet.</p>
      <Link 
        href="/products" 
        className="inline-block px-8 py-3 bg-rose-500 text-white font-semibold rounded-full hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default CartEmpty;
