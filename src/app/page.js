import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/common/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import Testimonials from '@/components/common/Testimonials';
import Newsletter from '@/components/common/Newsletter';
import CleanBeautySection from '@/components/common/CleanBeautySection';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="featured" className="pt-8">
        <ProductGrid products={featuredProducts} title="Bestsellers" />
      </div>
      <CleanBeautySection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
