import { Product } from "../models/products/products";

/**
 * This function takes an array of products and returns an array of unique categories.
 * @param {Product[]} products - An array of Product objects.
 * @returns {Array} - An array of unique categories.
 */

export function adapterAllCategories(products: Product[]): { category: string}[] {

    const categories = products.reduce<{ category: string }[]>((acc, product) => {
        const existingCategory = acc.find(item => item.category === product.category);
        if (!existingCategory) {
            acc.push({ category: product.category });
        }
        return acc;
      }, []);

      

      return categories;

}

