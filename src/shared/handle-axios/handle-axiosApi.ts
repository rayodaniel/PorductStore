import { ApiResponse } from "../client-http/client-http-config";


/**
 * Handles one or multiple Axios API promises and returns their resolved data.
 *
 * @template T - The expected type of the resolved data.
 * @param axiosPromises - A single Axios promise or an array of Axios promises.
 * @returns A promise that resolves to the data of the Axios response(s).
 *          If a single promise is provided, it resolves to the data of that promise.
 *          If an array of promises is provided, it resolves to an array of data from all promises.
 *
 * @example
 * // Handling a single Axios promise
 * const data = await handleAxiosApi<MyDataType>(axios.get('/api/resource'));
 *
 * @example
 * // Handling multiple Axios promises
 * const dataArray = await handleAxiosApi<MyDataType[]>([
 *   axios.get('/api/resource1'),
 *   axios.get('/api/resource2')
 * ]);
 */
export async function handleAxiosApi<T>(
  axiosPromises: Promise<ApiResponse<any>> | Promise<ApiResponse<any>>[]
): Promise<T> {
  axiosPromises = Array.isArray(axiosPromises) ? axiosPromises : [axiosPromises];

  if (axiosPromises.length === 1) {
    const { data } = await axiosPromises[0];
    return data;
  }

  return Promise.all(
    axiosPromises.map(async (promise) => {
      const { data } = await promise;
      return data;
    })
  ) as any;
}
