import { Component, effect, output, signal } from '@angular/core';
import { EmptyProductQuery, ProductQuery } from '../product-query-model';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'rv-product-search',
  styleUrl: './product-search.css',
  templateUrl: './product-search.html',
})
export class ProductSearch {
  private productQueryModel = signal<ProductQuery>(EmptyProductQuery);
  protected productQueryForm = form(this.productQueryModel);
  public productQuerey = output<ProductQuery>();

  constructor() {
    effect(() => {
      const productQuery = this.productQueryModel();
      this.productQuerey.emit(productQuery);
    });
  }
}
