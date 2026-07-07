"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch() {
    if (!query.trim()) return;

    router.push(`/products?q=${encodeURIComponent(query)}`);
  }

  return (
    <div className="-mt-10 flex justify-center px-6">
      <div className="flex w-full max-w-3xl items-center gap-3 rounded-2xl border bg-white p-3 shadow-lg">

        <SearchIcon className="text-gray-500" />

        <Input
          placeholder="Search iPhone, Laptop, AC..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="border-0 shadow-none focus-visible:ring-0"
        />

        <Button onClick={handleSearch}>
          Search
        </Button>

      </div>
    </div>
  );
}