import { Routes } from '@angular/router';
import { productResolver } from './features/products/product-detail-page/product-resolver';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products-page/products-page').then((m) => m.ProductsPage),
  },
  {
    path: 'products/:productId',
    loadComponent: () =>
      import('./features/products/product-detail-page/product-detail-page').then(
        (m) => m.ProductDetailPage,
      ),
    resolve: {
      product: productResolver,
    },
  },
];
