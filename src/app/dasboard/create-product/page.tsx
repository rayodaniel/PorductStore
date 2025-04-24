/**
 * This is the main page component for creating a product in the dashboard.
 * 
 * @component
 * @returns {JSX.Element} A section containing the `Create` component wrapped in a styled container.
 * 
 * @remarks
 * - The layout includes a full-screen section with a centered container for the `Create` component.
 * - The container has a white background, shadow, rounded corners, and padding for styling.
 * 
 * @see {@link Create} for the implementation of the product creation form.
 */
'use client';

import Create from '@/app/templates/create-product/create-product';

export default function CreateProduct() {
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <Create />
            </div>
        </section>
    );
}
