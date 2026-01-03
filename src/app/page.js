import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/common/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import Testimonials from '@/components/common/Testimonials';
import Newsletter from '@/components/common/Newsletter';
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
      <section className="py-20 glass mx-4 md:mx-6 rounded-3xl my-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Skincare Routine" 
              className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-950">Clean Beauty, <br/>No Compromises</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              We believe that skincare should be simple, effective, and safe. That's why we formulate our products with high-quality organic ingredients that are free from parabens, sulfates, and artificial fragrances.
            </p>
            <ul className="space-y-4">
              {[
                "Cruelty-free and vegan",
                "Dermatologist tested",
                "Sustainably sourced ingredients",
                "Recyclable packaging"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
