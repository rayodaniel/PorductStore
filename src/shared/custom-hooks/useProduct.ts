import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { useEffect, useState } from 'react';
import { Categories, Product, ProductHook } from '../models/products/products';

export const useProductSubscription = () => {
  const [product, setProduct] = useState<Product[] | null>([]);
  const [category, setCategory] = useState<Categories[] | null>([]);
  const [productById, setProductById] = useState<Product | null>({} as Product);
  const [filterCategory, setFilterCategory] = useState<Categories[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const productsRepository = useProductsRepository();

  useEffect(() => {
    const subscription = productsRepository
      .getProductsObservable()
      .subscribe({
        next: (value) => {
            setProduct(value.product)
            setCategory(value.category)
            setProductById(value.productById)
            setProductById(value.productById)
            setFilterCategory(value.filterCategories)
            setIsLoading(value.load)
            setError(value.error)},
        error: (err) => console.error('Error en suscripción:', err),
        complete: () => console.log('Suscripción completada')
      });
    return () => {
      subscription.unsubscribe();
    };
  }, );

  return {product, category, productById, filterCategory, isLoading , error};
};