import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { Product } from '../product-model';
import { inject } from '@angular/core';
import { ProductsService } from '../products-service';
import { HttpErrorResponse } from '@angular/common/http';

export const productResolver: ResolveFn<Product> = async (route) => {
  const productsService = inject(ProductsService);
  const router = inject(Router);

  const productId = route.paramMap.get('productId')!;

  try {
    const product = await productsService.getProduct(productId);
    console.log({ product });
    return product;
  } catch (error) {
    if (error instanceof HttpErrorResponse && error.status === 404) {
      return new RedirectCommand(router.parseUrl('/products'));
    }

    throw error;
  }
};
