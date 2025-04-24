import { useEffect, useState } from 'react';

import CheckLabel from '@/app/molecules/check-label/check-label';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { Categories } from '@/shared/models/products/products';

export default function FilterCategories() {
    const [category, setCategory] = useState<Categories[]>([]);

    useEffect(() => {
        const subscription = useProductsRepository()
            .getProductsObservable()
            .subscribe((value) => {
                setCategory(value.category);
            });

        return () => subscription.unsubscribe();
    }, []);

    const handleChange = (check: boolean, name: string) => {
        const repository = useProductsRepository();
        check ? repository.addFilterCategory(name) : repository.deleteFilterCategory(name);
    };
    if (!category) {
        return null;
        
    }

    return (
        <section className=" grid  md:grid-cols-4 place-items-center justify-around gap-4 mt-10">
            {category.map((cat, index) => (
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
