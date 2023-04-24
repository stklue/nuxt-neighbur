import { defineStore } from "pinia";
import { Product, Student } from "../data/types";

export const useSelectedProductStore = defineStore("selected-product", () => {
  const emptyProduct: Product = {
    id: -1,
    description: "",
    price: 0,
    recurring: false,
    available: 2,
    type: "fresh",
    image: "",
    plate: 1,
    pname: "",
  };
  const selectedProduct: Ref<Product> = ref(emptyProduct);

  const changeProduct = (p: Product) => {
    selectedProduct.value = p;
  };

  const getProduct = () => selectedProduct;
  return { selectedProduct, changeProduct, getProduct };
});
