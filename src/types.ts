export interface Product {
  id: number;
  name: string;
  origin: string;
  price: number;
  image: string;
  description: string;
  roast: string;
  flavor: string[];
  weight: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
