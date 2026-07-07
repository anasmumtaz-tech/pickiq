import { Product } from "@/types/product";

export function getRecommendation(
  products: Product[],
  query: string
): Product | null {
  const q = query.toLowerCase();

  const budgetMatch = q.match(/under\s?₹?\s?(\d+)/i);
  const budget = budgetMatch ? Number(budgetMatch[1]) : Infinity;

  let filtered = products.filter((p) => p.price <= budget);

  if (q.includes("phone") || q.includes("mobile")) {
    filtered = filtered.filter((p) => p.category === "Mobiles");
  }

  if (q.includes("laptop")) {
    filtered = filtered.filter((p) => p.category === "Laptops");
  }

  if (q.includes("headphone") || q.includes("audio")) {
    filtered = filtered.filter((p) => p.category === "Audio");
  }

  if (q.includes("apple")) {
    filtered = filtered.filter((p) => p.brand === "Apple");
  }

  if (q.includes("samsung")) {
    filtered = filtered.filter((p) => p.brand === "Samsung");
  }

  if (q.includes("sony")) {
    filtered = filtered.filter((p) => p.brand === "Sony");
  }

  if (!filtered.length) return null;

  filtered.sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }

    return a.price - b.price;
  });

  return filtered[0];
}