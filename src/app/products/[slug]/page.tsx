import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-slate-100">
            <div className="h-80 w-80 rounded-2xl bg-slate-200" />
          </div>

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
              {product.brand}
            </span>

            <h1 className="mt-5 text-5xl font-bold">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-bold text-blue-600">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-8 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 flex gap-4">
              <Button>Buy Now</Button>
              <Button variant="outline">
                Compare
              </Button>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}