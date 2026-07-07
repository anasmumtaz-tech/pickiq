import { Product } from "@/types/product";

export function generateAIReason(product: Product, query: string): string {
  const q = query.toLowerCase();

  if (q.includes("camera")) {
    return `${product.name} is recommended because it offers an excellent camera system, high image quality and great overall performance.`;
  }

  if (q.includes("battery")) {
    return `${product.name} is a great choice because it delivers excellent battery life along with reliable day-to-day performance.`;
  }

  if (q.includes("gaming")) {
    return `${product.name} is suitable for gaming thanks to its powerful processor and smooth performance.`;
  }

  if (q.includes("coding")) {
    return `${product.name} is recommended for coding because of its performance, battery life and overall productivity experience.`;
  }

  if (q.includes("student")) {
    return `${product.name} offers a great balance of price, performance and reliability for students.`;
  }

  return `${product.name} is currently the best match based on your search, price, rating and category.`;
}