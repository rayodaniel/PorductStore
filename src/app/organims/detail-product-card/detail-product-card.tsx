import Image from 'next/image';
import React from 'react';

import ContainerDetail from '@/app/atoms/container-detail/container-detail';
import DetailCard from '@/app/molecules/detail-product-card/detail-product-card';
import { Product } from '@/shared/models/products/products';

export default function DetailProductCard({
    product,
    onClickUpdate,
}: {
    product: Product;
    onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
    return (
        <ContainerDetail
            componentLeft={(
                <Image
                    src={product.image}
                    alt="imgProduct"
                    width={200}
                    height={200}
                    quality={100}
                    style={{ objectFit: 'cover' }}
                    className="w-auto rounded-lg"
                    priority
                />
            )}
            componentRight={(
                <DetailCard
                    onClickUpdate={(e) => onClickUpdate(e)}
                    product={product}
                />
            )}
        />
    );
}
