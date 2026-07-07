import { Product } from "@/types/product";

export function searchProducts(products: Product[], query: string) {
  const q = query.toLowerCase().trim();

  if (!q) return products;

  // Budget detection
  const budgetMatch = q.match(/under\s?₹?\s?(\d+)/i);
  const budget = budgetMatch ? Number(budgetMatch[1]) : null;

  // Category detection
  let category = "";

  if (q.includes("phone") || q.includes("mobile")) {
    category = "Mobiles";
  } else if (q.includes("laptop")) {
    category = "Laptops";
  } else if (q.includes("audio") || q.includes("headphone")) {
    category = "Audio";
  }

  // Brand detection
  const brands = ["apple", "samsung", "sony"];

  const brand = brands.find((b) => q.includes(b));

  return products.filter((product) => {
    const matchesText =
      product.name.toLowerCase().includes(q) ||
      product.brand.toLowerCase().includes(q);

    const matchesCategory = category
      ? product.category === category
      : true;

    const matchesBrand = brand
      ? product.brand.toLowerCase() === brand
      : true;

    const matchesBudget = budget
      ? product.price <= budget
      : true;

    return (
      (matchesText || category || brand || budget) &&
      matchesCategory &&
      matchesBrand &&
      matchesBudget
    );
  });
}