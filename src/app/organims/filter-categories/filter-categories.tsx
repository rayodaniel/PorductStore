import { useEffect, useState } from 'react';

import CheckLabel from '@/app/molecules/check-label/check-label';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { useProductSubscription } from '@/shared/custom-hooks/useProduct';

export default function FilterCategories() {
    const repository = useProductsRepository();

    const currentProduct = useProductSubscription();

    const handleChange = (check: boolean, name: string) => {
        check ? repository.addFilterCategory(name) : repository.deleteFilterCategory(name);
    };
    const noData = () =>{
        return <div className="text-red-500">No se encuentran registros</div> ;
    }



    return !currentProduct.category ? noData() :
     (
        <section className=" grid  md:grid-cols-4 place-items-center justify-around gap-4 mt-10">
            {currentProduct.category.map((cat, index) => (
                <CheckLabel
                    text={cat.category}
                    id={cat.category}
                    key={index}
                    onChangecheck={(check, name) => handleChange(check, name)}
                />
            ))}
        </section>
    );
}
