export interface ProductQuery {
  searchQuery: string;
  inStockOnly: boolean;
}

export const EmptyProductQuery: ProductQuery = {
  searchQuery: '',
  inStockOnly: false,
};
