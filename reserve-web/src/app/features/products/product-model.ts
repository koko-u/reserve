export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  features: string[];
  specifications: Specification[];
}

export interface Specification {
  label: string;
  value: string;
}
