import { Component, debounced, inject, resource, signal } from '@angular/core';
import { ProductsService } from '../products-service';
import { ProductSearch } from '../product-search/product-search';
import { EmptyProductQuery, ProductQuery } from '../product-query-model';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductSearch, ProductCard],
  selector: 'rv-products-page',
  styleUrl: './products-page.css',
  templateUrl: './products-page.html',
})
export class ProductsPage {
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
