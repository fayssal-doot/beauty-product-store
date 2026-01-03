"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-full bg-white/50 backdrop-blur-md border border-white/40 focus:bg-white/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-200 outline-none transition-all shadow-lg text-rose-950 placeholder-rose-900/50"
      />
      <FiSearch 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" 
        size={20} 
      />
    </form>
  );
};

export default SearchBar;
