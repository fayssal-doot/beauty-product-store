"use client";
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, title }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <h2 className="text-3xl font-bold text-rose-950 mb-8 text-center">{title}</h2>
        )}
        
        {products.length === 0 ? (
          <div className="text-center py-12 text-stone-500">
            No products found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
