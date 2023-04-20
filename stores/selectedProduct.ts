import { defineStore } from "pinia";
import { Product, ProductType, User } from "../data/types";

export const useSelectedProductStore = defineStore("selected-product", () => {
  const emptyProduct: Product = {
    id: -1,
    description: "",
    user: { avatar: "", name: "", online: false } as User,
    price: 0,
    rating: 0,
    type: {} as ProductType,
    recurring: false,
    available: 2,
    created: new Date().toLocaleTimeString(),
    expire: new Date().toLocaleTimeString(),
    foodType: "fresh",
    image: "",
    portion: 1,
  };
  const selectedProduct: Ref<Product> = ref(emptyProduct);

  const changeProduct = (p: Product) => {
    selectedProduct.value = p;
  };

  const getProduct = () => selectedProduct;
  return { selectedProduct, changeProduct, getProduct };
});
