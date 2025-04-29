'use client';

import { use, useEffect } from "react";

import Detail from "@/app/templates/detail-product/detail-product";
import { useProductsRepository } from "@/core/repositories/products/useProductsRepository";

/**
 * DetailProduct component renders the detail view of a product based on its ID.
 *
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.id - The ID of the product to display details for.
 *
 * @returns {JSX.Element} A React component that displays the product details.
 *
 * @remarks
 * - This component uses the `useProductsRepository` hook to fetch product details.
 * - The `useEffect` hook is used to fetch the product data when the component mounts or when the `params.id` changes.
 * - The `Detail` component is used to display the product details inside a styled container.
 *
 */
export default function DetailProduct({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const initDetailProduct = useProductsRepository();

    useEffect(() => {
        initDetailProduct.getProductById(Number(id));
    }, );

    return (
        <section className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <Detail />
            </div>
        </section>
    );
}
