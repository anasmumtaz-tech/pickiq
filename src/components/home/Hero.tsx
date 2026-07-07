import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Badge className="mb-6">
          ✨ AI Shopping Assistant
        </Badge>

        <h1 className="text-6xl font-extrabold tracking-tight">
          Find the Perfect Product
          <span className="block text-blue-600">
            in Seconds
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
          Compare products, discover the best deals and get AI-powered buying
          recommendations.
        </p>
      </div>
    </section>
  );
}