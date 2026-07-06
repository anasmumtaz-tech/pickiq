export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to PickIQ
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Find the best products with AI-powered recommendations,
          smart comparisons, and honest buying guides.
        </p>

        <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700">
          Explore Products
        </button>
      </section>
    </main>
  );
}