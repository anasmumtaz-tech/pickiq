import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          All Products
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Browse our curated collection of AI recommended products.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}