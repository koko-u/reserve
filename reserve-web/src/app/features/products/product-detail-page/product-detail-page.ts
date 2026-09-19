import { Component, input } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../product-model';

@Component({
  imports: [CurrencyPipe, NgOptimizedImage, RouterLink],
  selector: 'rv-product-detail-page',
  styleUrl: './product-detail-page.css',
  templateUrl: './product-detail-page.html',
})
export class ProductDetailPage {
  public readonly product = input.required<Product>();
}
