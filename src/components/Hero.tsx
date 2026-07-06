export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          AI Shopping Assistant
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight">
          Find the Best Product
          <span className="block text-blue-600">
            in Seconds
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Compare products, discover the best deals,
          and buy with confidence.
        </p>

      </div>
    </section>
  );
}