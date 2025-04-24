import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import ContainerDetail from '@/app/atoms/container-detail/container-detail';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { Product } from '@/shared/models/products/products';

import { CreateProductForm } from '../../organims/form-create-product/form-create-product';
import ROUTES from '@/shared/providers/routers';


export default function Create() {
    const [image, setImage] = useState(
        'https://images.pexels.com/photos/31557354/pexels-photo-31557354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    );
    const router = useRouter();

    const createProduct = useProductsRepository();

    const handleSubmit = (data: Product) => {
        const newProduct = {
            ...data,
            id: Math.floor(Math.random() * 900) + 100,
        };

        createProduct.create(newProduct).finally(() => {
            router.push(ROUTES.HOME);
        });
    };

    return (
        <ContainerDetail
            componentLeft={(
                <Image
                    src={image}
                    alt="imgProduct"
                    width={200}
                    height={200}
                    quality={100}
                    data-testid="image-view"
                    style={{ objectFit: 'cover' }}
                    className="w-auto rounded-lg"
                    priority
                />
            )}
            componentRight={(
                <CreateProductForm
                    onSubmit={(data) => handleSubmit(data)}
                    onChangeImg={(setImg) => {
                        setImage(setImg.target.value);
                    }}
                />
            )}
        />
    );
}
