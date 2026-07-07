export default function TrustBar() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border bg-white p-8 shadow-sm md:grid-cols-4">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
          <p className="text-sm text-slate-600">Products</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">500+</h3>
          <p className="text-sm text-slate-600">Brands</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">50K+</h3>
          <p className="text-sm text-slate-600">Comparisons</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">4.9★</h3>
          <p className="text-sm text-slate-600">User Rating</p>
        </div>
      </div>
    </section>
  );
}