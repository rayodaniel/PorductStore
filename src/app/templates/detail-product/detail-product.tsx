'use client';

import React, { useEffect, useState } from 'react';

import Skeleton from '@/app/molecules/skeleton/skeleton';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { Product, ProductState } from '@/shared/models/products/products';

import DetailProductCard from '../../organims/detail-product-card/detail-product-card';
import UpdateProduct from '../../organims/update-product/update-product';

export default function Detail() {
    const [product, setProduct] = useState<ProductState>({} as ProductState);
    const [update, setUpdate] = useState<boolean>(false);

    const useUpdateProduct = useProductsRepository();

    useEffect(() => {
        const subscriptionProduct = useProductsRepository()
            .getProductsObservable()
            .subscribe((value) => {
                setProduct(value);
            });

        return () => subscriptionProduct.unsubscribe();
    }, []);

    const onHandleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUpdate(true);
    };

    const onUpdate = (updatedProduct: Product) => {
        useUpdateProduct.update(updatedProduct.id, updatedProduct);
        setUpdate(false);
    };

    const renderContent = () => {
        if (product.load) return <Skeleton />;
        if (product.error) return <div className="text-red-500">Error: {product.error}</div>;

        if (update) {
            return (
                <UpdateProduct
                    handleSubmit={onUpdate}
                    product={product.productById}
                />
            );
        }

        return product.productById ? (
            <DetailProductCard
                onClickUpdate={onHandleUpdate}
                product={product.productById}
            />
        ) : (
            <Skeleton />
        );
    };

    return <section>{renderContent()}</section>;
}
