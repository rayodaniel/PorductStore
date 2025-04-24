import { AxiosError } from "axios";

import { useProductsApi } from "@/core/apis";
import { useProductsObservable } from "@/core/state/products/useProductsState";
import { handleAxiosApi } from "@/shared/handle-axios/handle-axiosApi";
import { Product } from "@/shared/models/products/products";
import { adapterAllCategories } from "@/shared/providers/categories";


/**
 * A custom hook that provides a repository for managing products.
 * It includes methods for listing, retrieving, creating, updating, and managing product-related filters.
 *
 * @returns {Object} An object containing the following methods:
 * 
 * - `listProduct`: Fetches and lists all products. Updates the observable with the fetched products and categories.
 * - `getProductById`: Fetches a product by its ID and updates the observable with the retrieved product.
 * - `deleteFilterCategory`: Deletes a filter category by its name and updates the observable.
 * - `addFilterCategory`: Adds a filter category by its name and updates the observable.
 * - `create`: Creates a new product and updates the observable with the created product.
 * - `update`: Updates an existing product by its ID and updates the observable with the updated product.
 * - `getProductsObservable`: Retrieves the current state of the products observable.
 */
export const useProductsRepository = () => {
  const todoApi = useProductsApi();
  const todoObservable = useProductsObservable();

  /**
   * Fetches the list of products from the API and updates the observable state.
   * @async
   * @throws {AxiosError} If the API call fails.
   */
  const listProduct = async () => {
    try {
      todoObservable.listing(true);
      const product = await handleAxiosApi<Product[]>(todoApi.listProduct());
      
      todoObservable.categories(adapterAllCategories(product));
      todoObservable.listProduct(product);
      
    } catch (error: AxiosError ) {
      todoObservable.error(error.message as string);
    } finally {
      todoObservable.listing(false);
    }
  }
  /**
   * Fetches a product by its ID from the API and updates the observable state.
   * @async
   * @param {number} id - The ID of the product to fetch.
   * @throws {AxiosError} If the API call fails.
   */
  const getProductById = async (id:number) => {
    try {
      todoObservable.load(true);
      const product = await handleAxiosApi<Product>(todoApi.getProductById(id));

      todoObservable.productById(product);
      
    } catch (error: AxiosError ) {
      todoObservable.load(false);
      todoObservable.error(error.message as string);
    } finally {
      todoObservable.load(false);
    }
  }

  /**
   * Deletes a filter category by its name and updates the observable state.
   * @async
   * @param {string} name - The name of the category to delete.
   * @throws {AxiosError} If the operation fails.
   */
  const deleteFilterCategory = async (name:string) => {
    try {
      todoObservable.listing(true);
      await todoObservable.deleteFilterCategories(name);
    } catch (error: AxiosError ) {
      todoObservable.error(error.message as string);
    } finally {
      todoObservable.listing(false);
    }
  }

  /**
   * Adds a filter category by its name and updates the observable state.
   * @async
   * @param {string} name - The name of the category to add.
   * @throws {AxiosError} If the operation fails.
   */
  const addFilterCategory = async (name:string) => {
    try {
      todoObservable.listing(true);
      await todoObservable.addFilterCategories(name);
    } catch (error: AxiosError ) {
      todoObservable.error(error.message as string);
    } finally {
      todoObservable.listing(false);
    }
  }

  /**
   * Creates a new product and updates the observable state.
   * @async
   * @param {Product} product - The product to create.
   * @throws {AxiosError} If the API call fails.
   */
  const create = async (product: Product) => {
    try {
      todoObservable.creating(true);
      const createdTodo = await handleAxiosApi<Product>(todoApi.create(product));
      todoObservable.create(createdTodo);
    } catch (error: AxiosError) {
      todoObservable.error(error.message as string);
    } finally {
      todoObservable.creating(false);
    }
  }
  /**
   * Updates an existing product by its ID and updates the observable state.
   * @async
   * @param {number} id - The ID of the product to update.
   * @param {Product} product - The updated product data.
   * @throws {AxiosError} If the API call fails.
   */
  const update = async (id: number, product: Product) => {
    try {
      todoObservable.updating(true);
      const updatedProduct = await handleAxiosApi<Product>(todoApi.update(id, product));
      todoObservable.update(id, updatedProduct);
    } catch (error: AxiosError) {
      todoObservable.error(error.message as string);
    } finally {
      todoObservable.updating(false);
    }
  }
  /**
   * Retrieves the observable state for products.
   * @returns {Observable} The observable state for products.
   */
  const getProductsObservable = () => todoObservable.getObservable();

  return {
    listProduct,
    getProductById,
    deleteFilterCategory,
    addFilterCategory,
    create,
    update,
    getProductsObservable
  }
}