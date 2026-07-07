export default function AISuggestions() {
  const suggestions = [
    "Best phone under ₹30,000",
    "Best laptop for coding",
    "Best AC for 1 BHK",
    "Best headphones for gaming",
  ];

  return (
    <section className="mx-auto mt-12 max-w-5xl px-6">
      <h2 className="mb-5 text-lg font-semibold text-slate-700">
        Try asking AI
      </h2>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            className="rounded-full border border-slate-200 bg-white px-5 py-3 transition hover:bg-slate-100"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}