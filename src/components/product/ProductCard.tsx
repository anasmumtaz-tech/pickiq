import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  name: string;
  price: string;
};

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex aspect-square items-center justify-center bg-slate-100">
        <div className="h-48 w-48 rounded-xl bg-slate-200 transition group-hover:scale-105" />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-2 text-sm text-gray-500">
            4.8
          </span>
        </div>

        {/* Product Name */}
        <h3 className="line-clamp-2 text-lg font-semibold">
          {name}
        </h3>

        {/* Price */}
        <p className="text-2xl font-bold text-blue-600">
          {price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={`/products/${name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="flex-1"
          >
            <Button className="w-full">
              View Details
            </Button>
          </Link>

          <Button variant="outline">
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
}