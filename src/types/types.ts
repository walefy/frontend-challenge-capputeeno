export type Product = {
  name: string;
  description: string;
  image_url: string;
  category: string;
  price_in_cents: number;
};

export type ProductWithId = Product & { id: string };
