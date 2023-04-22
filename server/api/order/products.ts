import productsJson from "~~/data/products.json" 
import { Product } from "~~/data/types";
export default defineEventHandler(() => {
  const products: Product[] = productsJson;
  return products;
});
