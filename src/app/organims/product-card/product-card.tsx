'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Chip from '@/app/atoms/chip/chip';
import { Product } from '@/shared/models/products/products';
import { wordShortener } from '@/shared/providers/shorter';
import ROUTES from '@/shared/providers/routers';
import { roboto } from '@/app/layout';

export default function ProductCard({ id, image, title, category, price, description }: Product) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(ROUTES.DETAIL(String(id)));
    };

    return (
        <div
            data-testid="product-card"
            onClick={handleCardClick}
            className="flex flex-col justify-between w-[250px] h-[350px] bg-white m-[20px] rounded-lg cursor-pointer shadow-md"
        >
            <section className="Image flex justify-center items-center w-full pt-5">
                <Image
                    src={image}
                    alt="imgProduct"
                    width={50}
                    height={100}
                    quality={100}
                    data-testid="image-view"
                    style={{ objectFit: 'cover' }}
                    className="w-auto rounded-lg"
                    priority
                />
            </section>

            <div className="w-full h-auto flex flex-col gap-2 px-5 pb-7">
                <section className={`text-base ${roboto.variable} font-sans font-bold`}>
                    <div>{wordShortener(title, 20)}</div>
                </section>
                <section className="Size flex justify-between">
                    <div className="Sex text-sm">
                        <p>{category}</p>
                    </div>
                    <div className="flex gap-1 text-sm font-sans">
                        <Chip text={price.toString()} />
                    </div>
                </section>
                <section className="Price flex w-full h-[70px] my-1">
                    <p className={`text-xs ${roboto.variable} font-sans`}>{wordShortener(description, 120)}</p>
                </section>
            </div>
        </div>
    );
}


