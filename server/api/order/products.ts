import { products } from "~~/data/products";
import { Product, RequestMeal, UserRequest } from "~~/data/types";

export default defineEventHandler(() => {
  return products;
});
