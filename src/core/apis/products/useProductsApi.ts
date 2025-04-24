import axios from "axios"; // Importa desde el mismo módulo

import { ApiResponse } from "@/shared/client-http/client-http-config";
import { Product } from "@/shared/models/products/products";

const baseApi = process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com";

export const useProductsApi = () => {

  /**
   * Fetches a list of products from the API.
   * 
   * @returns {Promise<ApiResponse<Product[]>>} A promise that resolves to the API response containing an array of products.
   */
  const listProduct = (): Promise<ApiResponse<Product[]>> => {
    
    return axios.get(`${baseApi}/products`) as Promise<ApiResponse<Product[]>>;
  }

  /**
   * Fetches a single product by its ID from the API.
   * 
   * @param {number} id - The ID of the product to fetch.
   * @returns {Promise<ApiResponse<Product>>} A promise that resolves to the API response containing the product.
   */
  const getProductById = (id:number): Promise<ApiResponse<Product>> => {
    
    return axios.get(`${baseApi}/products/${id}`) as Promise<ApiResponse<Product>>;
  }
  /**
   * Creates a new product in the API.
   * 
   * @param {Product} product - The product data to create.
   * @returns {Promise<ApiResponse<Product>>} A promise that resolves to the API response containing the created product.
   */
  const create = (product: Product): Promise<ApiResponse<Product>> => {
    return axios.post(`${baseApi}/products`, product) as Promise<ApiResponse<Product>>;
  }
  /**
   * Updates an existing product in the API.
   * 
   * @param {number} id - The ID of the product to update.
   * @param {Product} product - The updated product data.
   * @returns {Promise<ApiResponse<Product>>} A promise that resolves to the API response containing the updated product.
   */
  const update = (id: number, product: Product): Promise<ApiResponse<Product>> => {
    return axios.put(`${baseApi}/products/${id}`, product) as Promise<ApiResponse<Product>>;
  }
  

  return { listProduct,getProductById, create, update }
}