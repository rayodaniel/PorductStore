'use client';

import React, { useEffect, useState } from 'react';

import Skeleton from '@/app/molecules/skeleton/skeleton';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { Product, ProductState } from '@/shared/models/products/products';

import DetailProductCard from '../../organims/detail-product-card/detail-product-card';
import UpdateProduct from '../../organims/update-product/update-product';
import { useProductSubscription } from '@/shared/custom-hooks/useProduct';

export default function Detail() {
    const [update, setUpdate] = useState<boolean>(false);

    const useUpdateProduct = useProductsRepository();

    const currentProduct = useProductSubscription();

    const onHandleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUpdate(true);
    };

    const onUpdate = (updatedProduct: Product) => {
        useUpdateProduct.update(updatedProduct.id, updatedProduct);
        setUpdate(false);
    };

    const renderContent = () => {
        if (currentProduct.isLoading) return <Skeleton />;
        if (currentProduct.error) return <div className="text-red-500">Error: {currentProduct.error}</div>;

        if (update) {
            return (
                <UpdateProduct
                    handleSubmit={onUpdate}
                    product={currentProduct.productById!}
                />
            );
        }
        return currentProduct.productById ? (
            <DetailProductCard
                onClickUpdate={onHandleUpdate}
                product={currentProduct.productById}
            />
        ) : (
            <Skeleton />
        );
    };

    return <section>{renderContent()}</section>;
}
