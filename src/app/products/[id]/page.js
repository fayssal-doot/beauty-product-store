import React from 'react';
import { products } from '@/data/products';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductDetail from '@/components/products/ProductDetail';
import ProductGrid from '@/components/products/ProductGrid';

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  // Await params if using standard Next 14+ async components
  const resolvedParams = await params;
  const product = products.find(p => p.id.toString() === resolvedParams.id);
  
  // Simple suggestion logic
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen">
      <Header />
      {product ? (
        <>
          <div className="glass m-4 rounded-3xl pb-8">
            <ProductDetail product={product} />
          </div>
          {relatedProducts.length > 0 && (
             <div className="mt-8">
                <ProductGrid products={relatedProducts} title="You May Also Like" />
             </div>
          )}
        </>
      ) : (
        <div className="h-screen flex items-center justify-center text-stone-500">
          Product not found
        </div>
      )}
      <Footer />
    </main>
  );
}
