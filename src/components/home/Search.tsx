import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Search() {
  return (
    <div className="-mt-10 flex justify-center px-6">
      <div className="flex w-full max-w-3xl items-center gap-3 rounded-2xl border bg-white p-3 shadow-lg">

        <SearchIcon className="text-gray-500" />

        <Input
          placeholder="Search iPhone, Laptop, AC..."
          className="border-0 shadow-none focus-visible:ring-0"
        />

        <Button>Search</Button>

      </div>
    </div>
  );
}