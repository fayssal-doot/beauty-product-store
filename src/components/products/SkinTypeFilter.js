"use client";
import React from 'react';
import { skinTypes } from '@/data/products';

const SkinTypeFilter = ({ activeType, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-8">
      <div className="flex gap-3 justify-start md:justify-center min-w-max px-4">
        {skinTypes.map((type) => (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm ${
              activeType === type
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-400/50 scale-105'
                : 'bg-white/40 text-rose-950 border border-white/40 hover:bg-white/60 hover:text-rose-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkinTypeFilter;
