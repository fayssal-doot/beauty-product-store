"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import SkinTypeFilter from '@/components/products/SkinTypeFilter';
import SearchBar from '@/components/common/SearchBar';
import { products } from '@/data/products';

function ProductContent() {
  const searchParams = useSearchParams();
  const [activeSkinType, setActiveSkinType] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const searchQuery = searchParams.get('search') || '';
  const categoryQuery = searchParams.get('category') || '';

  useEffect(() => {
    let result = products;

    // Filter by search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by category
    if (categoryQuery) {
      result = result.filter(p => p.category === categoryQuery);
    }

    // Filter by skin type
    if (activeSkinType !== 'All') {
      result = result.filter(p => p.skinTypes.includes(activeSkinType));
    }

    setFilteredProducts(result);
  }, [searchQuery, categoryQuery, activeSkinType]);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h1 className="text-4xl font-bold text-rose-950 mb-6">Shop All Products</h1>
        <div className="mb-8">
          <SearchBar />
        </div>
        <SkinTypeFilter activeType={activeSkinType} onSelect={setActiveSkinType} />
      </div>
      
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <ProductContent />
      </Suspense>
      <Footer />
    </main>
  );
}
