export default function Search() {
  return (
    <div className="mx-auto -mt-12 max-w-3xl px-6">

      <div className="flex rounded-2xl bg-white p-3 shadow-xl">

        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 p-3 outline-none"
        />

        <button className="rounded-xl bg-blue-600 px-8 text-white">
          Search
        </button>

      </div>

    </div>
  );
}