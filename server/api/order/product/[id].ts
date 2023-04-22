import productsJson from "~~/data/products.json" 
import { Product } from "~~/data/types";

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.id) as number;
  const products: Product[] = productsJson
  return products.find((prod) => prod.id === id);
});


