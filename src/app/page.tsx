import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Search from "@/components/home/Search";
import ProductCard from "@/components/product/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/layout/Footer";
import TrustBar from "@/components/home/TrustBar";
import AISuggestions from "@/components/home/AISuggestions";

import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustBar />

      <Search />

      <AISuggestions />

      {/* Trending Searches */}
      <section className="mx-auto mt-10 max-w-5xl px-6">
        <div className="flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            📱 iPhone 16
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            💻 Laptop
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            ❄️ AC
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            🎧 Headphones
          </span>
        </div>
      </section>

      {/* Trending Products */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <h2 className="mb-10 text-4xl font-bold">
          🔥 Trending Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={`₹${product.price.toLocaleString("en-IN")}`}
              slug={product.slug}
              rating={product.rating}
            />
          ))}
          
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <h2 className="mb-10 text-4xl font-bold">
          Browse Categories
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CategoryCard title="📱 Mobiles" />
          <CategoryCard title="💻 Laptops" />
          <CategoryCard title="🎧 Audio" />
          <CategoryCard title="⌚ Smart Watches" />
          <CategoryCard title="🎮 Gaming" />
          <CategoryCard title="🍳 Kitchen" />
          <CategoryCard title="🏠 Home" />
          <CategoryCard title="🚗 Car Accessories" />
        </div>
      </section>

      {/* Why PickIQ */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Why PickIQ?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold">
              🤖 AI Recommendations
            </h3>

            <p className="text-gray-600">
              Get personalized product recommendations based on your budget
              and requirements.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold">
              ⚖️ Smart Comparison
            </h3>

            <p className="text-gray-600">
              Compare products side by side with detailed specifications and
              features.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold">
              💰 Best Deals
            </h3>

            <p className="text-gray-600">
              Discover the latest discounts and best prices from trusted online
              stores.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}