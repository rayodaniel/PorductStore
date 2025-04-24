import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

/**
 * Represents the structure of an API response.
 *
 * @template T - The type of the data contained in the response.
 * 
 * @property {T} data - The payload or data returned by the API.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The HTTP status text corresponding to the status code.
 * @property {any} headers - The headers included in the API response.
 */
export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
  }
export default api;