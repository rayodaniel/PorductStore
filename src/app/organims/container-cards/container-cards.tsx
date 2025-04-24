import React, { useEffect, useState } from 'react';

import ProductCard from '@/app/organims/product-card/product-card';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { Product } from '@/shared/models/products/products';
import { adapterProductByCategory } from '@/shared/providers/filterProducts';

export default function ContainerCards() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const subscription = useProductsRepository()
            .getProductsObservable()
            .subscribe((value) => {
                setProducts(adapterProductByCategory(value.product, value.filterCategories));
            });

        return () => subscription.unsubscribe();
    }, []);


    return (
        <section className="w-full h-auto grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6">
            {products.map((product) => (
                <ProductCard {...product} key={product.id} />
            ))}
        </section>
    );
}
