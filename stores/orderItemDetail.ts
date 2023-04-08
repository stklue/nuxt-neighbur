import { defineStore } from "pinia";

export interface User {
  avatar: string;
  name: string;
}

export interface Short {
  s: string;
}
interface Food {}

export type ProductType = Short | Food;
export type FoodType = "left overs" | "fresh" 
export type Portion = 0.5 | 1 | 2 ;

export interface Product {
  id: number;
  owner: User;
  price: number;
  type: ProductType;
  rating: number;
  description: string;
  recurring?: boolean;
  foodType: FoodType;
  portion: Portion;
  available: number
}

export const useProductsStore = defineStore("products", () => {
  const products: Ref<Product[]> = ref([]);
  const getProducts = () => products;
  
  const setProducts = (p: Product[]) => {
    if (products.value.length === 0) {
      p.forEach((x) => products.value.push(x));
    }
  };

  return { products, setProducts, getProducts };
});
