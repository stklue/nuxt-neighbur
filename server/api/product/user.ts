import productsJson from "~~/data/products.json";
import { Product } from "~~/data/types";
export default defineEventHandler((event) => {
  const q = getQuery(event);
  const products: Product[] = productsJson;

  return products.filter((p) => p.userId === Number.parseInt(q.id!.toString()));
});
