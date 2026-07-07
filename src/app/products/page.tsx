import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

import { searchProducts } from "@/lib/search";
import { getRecommendation } from "@/lib/recommendation";
import { generateAIReason } from "@/lib/ai";
import { getAlternatives } from "@/lib/alternatives";

type ProductsPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { q = "" } = await searchParams;

  const filteredProducts = searchProducts(products, q);

  const recommendation = q
    ? getRecommendation(products, q)
    : null;

  const aiReason =
    recommendation && q
      ? generateAIReason(recommendation, q)
      : "";

  const alternatives = recommendation
    ? getAlternatives(products, recommendation)
    : [];

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          {q ? `Results for "${q}"` : "All Products"}
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>

        {recommendation && (
          <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8 shadow-sm">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              🤖 AI Recommendation
            </span>

            <h2 className="mt-5 text-3xl font-bold">
              🏆 {recommendation.name}
            </h2>

            <p className="mt-4 text-slate-600">
              {aiReason}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 shadow">
                ⭐ {recommendation.rating}
              </span>

              <span className="rounded-full bg-white px-4 py-2 shadow">
                💰 ₹{recommendation.price.toLocaleString("en-IN")}
              </span>

              <span className="rounded-full bg-white px-4 py-2 shadow">
                🏷️ {recommendation.brand}
              </span>

              <span className="rounded-full bg-white px-4 py-2 shadow">
                📂 {recommendation.category}
              </span>
            </div>

            {alternatives.length > 0 && (
              <div className="mt-10">
                <h3 className="mb-5 text-xl font-semibold">
                  Alternative Recommendations
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {alternatives.map((product) => (
                    <div
                      key={product.id}
                      className="rounded-2xl border bg-white p-5"
                    >
                      <h4 className="text-lg font-semibold">
                        {product.name}
                      </h4>

                      <p className="mt-2 text-blue-600 font-bold">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        ⭐ {product.rating}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed p-12 text-center">
            <h2 className="text-2xl font-bold">
              No products found
            </h2>

            <p className="mt-3 text-slate-500">
              Try searching by product name, brand, category or budget.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={`₹${product.price.toLocaleString("en-IN")}`}
                slug={product.slug}
                rating={product.rating}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}