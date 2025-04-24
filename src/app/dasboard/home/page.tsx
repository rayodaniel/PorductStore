/**
 * Home component serves as the main dashboard page for the application.
 * It initializes the product repository and fetches the list of products
 * when the component is mounted. The page includes a filter section and
 * a container for displaying product cards.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Home component.
 *
 * @remarks
 * - This component uses the `useProductsRepository` hook to interact with the product repository.
 * - The `useEffect` hook ensures that the product list is fetched when the component is mounted.
 *
 * @dependencies
 * - `FilterCategories`: A component for filtering product categories.
 * - `ContainerCards`: A component for displaying a list of product cards.
 * - `useProductsRepository`: A custom hook for managing product-related operations.
 *
 */
'use client';

import { useEffect } from "react";

import FilterCategories from "@/app/organims/filter-categories/filter-categories";
import ContainerCards from "@/app/organims/container-cards/container-cards";
import { useProductsRepository } from "@/core/repositories/products/useProductsRepository";
import Button from "@/app/atoms/button/button";
import { useRouter } from "next/navigation";
import ROUTES from "@/shared/providers/routers";
import { ActivedManageState } from "@/shared/providers/manageState";

export default function Home() {
    const initProducts = useProductsRepository();
    const router = useRouter();


    useEffect(() => {

        if (initProducts.getProductsObservable().getValue().product.length === 0) {
            initProducts.listProduct();
        }
        
    }, []);
    const handleCardClick = () => {
        router.push(ROUTES.CREATE);
    };
    return (
        <section>
            <div className="h-full place-items-center">
                <section className="max-w-4xl mt-24">
                    <FilterCategories />
                </section>
                <section className="w-full p-5 flex justify-end">
                    <Button text="New Product" color="blue" onClickUpdate={handleCardClick}/>
                </section>
                <ContainerCards />
            </div>
        </section>
    );
}
