import { BehaviorSubject } from "rxjs"

import { Categories, Product, ProductPayload, ProductState} from "@/shared/models/products/products";


export const initialState = {
  product: [],
  productById:{} as Product,
  category:[],
  filterCategories: [],
  listing: false,
  load: false,
  creating: false,
  updating: false,
  removing: false,
  error: ""
}

const todoSubject = new BehaviorSubject<ProductState>(initialState);

/**
 * Hook to manage the state of products using an observable pattern.
 * Provides methods to manipulate and retrieve product-related state.
 */
export const useProductsObservable = () => {
  /**
   * Updates the state with a list of products.
   * @param product - Array of products to set in the state.
   */
  const listProduct = (product: Product[]) => {
    setNextState({ product, error: "" });
  }
  /**
   * Updates the state with a single product by its ID.
   * @param product - The product to set in the state.
   */
  const productById = (product: Product) => {
    setNextState({productById:product, error: "" });
  }
  /**
   * Updates the state with a list of categories.
   * @param category - Array of categories to set in the state.
   */
  const categories = (category: Categories[]) => {
    
    setNextState({ category, error: "" });
  }
  /**
   * Removes a category from the filter categories in the state.
   * @param name - The name of the category to remove.
   */
  const deleteFilterCategories = (name:string) => {
    const filterCategories = [...todoSubject.getValue().filterCategories].filter(category => category.category !== name);
    setNextState({ filterCategories, error: "" });
  }
  /**
   * Adds a category to the filter categories in the state.
   * @param name - The name of the category to add.
   */
  const addFilterCategories = (name:string) => {
    const filterCategories = [...todoSubject.getValue().filterCategories, { category: name }];
    setNextState({ filterCategories, error: "" });
  }
  /**
   * Updates the state to indicate whether products are being listed.
   * @param flag - Boolean flag indicating the listing state.
   */
  const listing = (flag: boolean) => {
    setNextState({ listing: flag });
  }
  /**
   * Updates the state to indicate whether the application is loading.
   * @param flag - Boolean flag indicating the loading state.
   */
  const load = (flag: boolean) => {
    setNextState({ load: flag });
  }

  /**
   * Adds a new product to the state.
   * @param newProduct - The new product to add.
   */
  const create = (newProduct: Product) => {
    const product = [...todoSubject.getValue().product, newProduct];
    setNextState({ product, error: "" });
  }
  /**
   * Updates the state to indicate whether a product is being created.
   * @param flag - Boolean flag indicating the creating state.
   */
  const creating = (flag: boolean) => {
    setNextState({ creating: flag });
  }
  /**
   * Updates a product in the state by its ID.
   * @param id - The ID of the product to update.
   * @param productUpdate - The updated product data.
   */
  const update = (id: number, productUpdate: Product) => {
    const product = [...todoSubject.getValue().product];
    const updateListProduct = product.map((item) => {
      if (item.id === id) {
        return {...productUpdate };
      }
      return item;
    });

    

    setNextState({ productById: productUpdate, product:updateListProduct, error: "" })

  }
  /**
   * Updates the state to indicate whether a product is being updated.
   * @param flag - Boolean flag indicating the updating state.
   */
  const updating = (flag: boolean) => {
    setNextState({ updating: flag });
  }

  /**
   * Updates the state with an error message.
   * @param message - The error message to set.
   */
  const error = (message: string) => {
    setNextState({ error: message });
  }
  /**
   * Updates the state with the provided payload.
   * @param payload - The payload to merge into the current state.
   */
  const setNextState = (payload: ProductPayload) => {
    const state = todoSubject.getValue();
    todoSubject.next({ ...state, ...payload } as ProductState);
  }
  const getObservable = () => {
    return todoSubject;
  }
  return {
    listProduct,
    load,
    productById,
    categories,
    deleteFilterCategories,
    addFilterCategories,
    listing,
    create,
    creating,
    update,
    updating,
    error,
    getObservable
  }
}
