interface ProductRating {
    rate: number;
    count: number;
  }
  
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: ProductRating;
    featured?: boolean; // Propiedad opcional
    inventory?: number; // Propiedad opcional
  }


  export interface Categories {
    category: string;
  }

export type ProductPayload =
  | { product: Product[] }
  | { product: Product }
  | { productById: Product }
  | { id: number; product: Product }
  | { category: Categories[] }
  | { filterCategories: Categories[] }
  | { id: number }
  | ErrorPayload
  | FlagPayload;

export type ProductState = {
    product: Product[];
    productById: Product;
    category: Categories[];
    filterCategories: Categories[];
} & FlagState & ErrorState;

export type ErrorState = {
    error: string;
  }

  export type FlagState = {
    creating : boolean;
    listing: boolean;
    load: boolean;
    updating: boolean;
    removing: boolean;
  }

  export type FlagPayload = { listing: boolean } |{ load: boolean }  | { creating: boolean } | { updating: boolean } | { removing: boolean }
  export type ErrorPayload = {
    error: string;
  }

  export type ProductHook =  'product' | 'category' | 'filterCategories' |'productById' ;