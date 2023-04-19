import { products } from "~~/data/products";
import { Product, RequestMeal, UserRequest } from "~~/data/types";

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.id) as number;
  return products.find((prod) => prod.id === id);
});


