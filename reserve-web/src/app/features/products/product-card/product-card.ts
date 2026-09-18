import { Component, input } from '@angular/core';
import { Product } from '../product-model';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';

@Component({
  imports: [CurrencyPipe, NgOptimizedImage],
  selector: 'rv-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  public product = input.required<Product>();
}
