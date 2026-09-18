import { Component, debounced, inject, resource, signal } from '@angular/core';
import { ProductsService } from '../products-service';
import { ProductSearch } from '../product-search/product-search';
import { EmptyProductQuery, ProductQuery } from '../product-query-model';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductSearch, ProductCard],
  selector: 'rv-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private readonly productsService = inject(ProductsService);

  protected readonly productQuery = signal<ProductQuery>(EmptyProductQuery);

  private readonly debouncedInput = debounced(() => this.productQuery(), 300);

  protected productsResource = resource({
    params: () => this.debouncedInput.value(),
    loader: async ({ params }) => {
      const [count, products] = await Promise.all([
        this.productsService.getCount(),
        this.productsService.getProducts(params.searchQuery, params.inStockOnly),
      ]);
      return {
        count,
        products,
      };
    },
  });

  resetFilters(): void {
    this.productQuery.set(EmptyProductQuery);
  }
}
