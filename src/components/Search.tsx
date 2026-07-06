import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="-mt-12 flex justify-center px-6">
      <div className="flex w-full max-w-3xl items-center rounded-2xl border bg-white p-3 shadow-xl">

        <SearchIcon className="ml-2 text-gray-400" size={22} />

        <input
          placeholder="Search iPhone, Laptop, AC..."
          className="flex-1 px-4 py-2 outline-none"
        />

        <button className="rounded-xl bg-blue-600 px-8 py-3 text-white">
          Search
        </button>

      </div>
    </div>
  );
}