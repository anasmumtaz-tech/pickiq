export type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];

  inStock?: boolean;
  affiliateUrl?: string;

  specs?: {
    processor?: string;
    display?: string;
    battery?: string;
    camera?: string;
    ram?: string;
    storage?: string;
  };
};