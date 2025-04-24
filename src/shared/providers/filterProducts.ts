import { Categories, Product } from "../models/products/products";

/**
 * Filters a list of products based on the provided categories.
 *
 * @param productsList - The list of products to be filtered.
 * @param filterCategories - An array of categories to filter the products by.
 * @returns A filtered list of products that belong to the specified categories.
 *
 * If the `filterCategories` array is empty, the function returns the original `productsList` without any filtering.
 */
export function adapterProductByCategory(productsList: Product[], filterCategories: Categories[]): Product[] {

        if (filterCategories.length === 0) {
            return productsList;
        }
        return productsList.filter((product) =>
            filterCategories.some((category) => product.category === category.category)
        );

}
