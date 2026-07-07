import { Product } from "@/types/product";

export function getAlternatives(
  products: Product[],
  recommended: Product
): Product[] {
  return products
    .filter(
      (product) =>
        product.id !== recommended.id &&
        product.category === recommended.category
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 2);
}