import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";

export default function ComparePage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          Compare Products
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Compare two products side by side and make the best buying decision.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">{products[0].name}</th>
                <th className="p-4 text-left">{products[1].name}</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-4 font-medium">Price</td>
                <td className="p-4">
                  ₹{products[0].price.toLocaleString("en-IN")}
                </td>
                <td className="p-4">
                  ₹{products[1].price.toLocaleString("en-IN")}
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium">Brand</td>
                <td className="p-4">{products[0].brand}</td>
                <td className="p-4">{products[1].brand}</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium">Rating</td>
                <td className="p-4">⭐ {products[0].rating}</td>
                <td className="p-4">⭐ {products[1].rating}</td>
              </tr>

              <tr className="border-t bg-blue-50">
                <td className="p-4 font-bold">AI Verdict</td>
                <td colSpan={2} className="p-4">
                  ✅ {products[0].name} is a better choice for most users because
                  it offers excellent performance and long-term value.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </>
  );
}