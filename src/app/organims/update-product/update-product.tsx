import Image from 'next/image';

import ContainerDetail from '@/app/atoms/container-detail/container-detail';
import { Product } from '@/shared/models/products/products';
import { UpdateProductForm } from '../form-update-product/form-update-product';


export default function UpdateProduct({
    product,
    handleSubmit,
}: {
    product: Product;
    handleSubmit: (data: Product) => void;
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
                <UpdateProductForm
                    initialData={product}
                    onSubmit={(data) => handleSubmit(data)}
                />
            )}
        />
    );
}
