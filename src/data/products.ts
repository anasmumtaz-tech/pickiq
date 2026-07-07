import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    category: "Mobiles",
    price: 79999,
    rating: 4.8,
    image: "/products/iphone16.jpg",
    description:
      "The latest iPhone with powerful performance, excellent cameras, and long software support.",
    features: [
      "A18 Chip",
      "48MP Camera",
      "6.1-inch OLED Display",
      "5G Connectivity",
      "USB-C",
    ],
  },

  {
    id: 2,
    slug: "samsung-galaxy-s25",
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    category: "Mobiles",
    price: 74999,
    rating: 4.7,
    image: "/products/s25.jpg",
    description:
      "Flagship Samsung smartphone with AI features and stunning AMOLED display.",
    features: [
      "Snapdragon 8 Elite",
      "50MP Camera",
      "Dynamic AMOLED Display",
      "Galaxy AI",
      "120Hz Refresh Rate",
    ],
  },

  {
    id: 3,
    slug: "macbook-air-m4",
    name: "MacBook Air M4",
    brand: "Apple",
    category: "Laptops",
    price: 109999,
    rating: 4.9,
    image: "/products/macbook.jpg",
    description:
      "Lightweight laptop with Apple's M4 chip and incredible battery life.",
    features: [
      "Apple M4 Chip",
      "13.6-inch Liquid Retina Display",
      "18 Hours Battery",
      "16GB RAM",
      "256GB SSD",
    ],
  },

  {
    id: 4,
    slug: "sony-wh1000xm6",
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Audio",
    price: 29999,
    rating: 4.9,
    image: "/products/sony.jpg",
    description:
      "Premium wireless headphones with industry-leading noise cancellation.",
    features: [
      "Active Noise Cancellation",
      "40 Hours Battery",
      "Bluetooth 5.4",
      "Hi-Res Audio",
      "Fast Charging",
    ],
  },
];