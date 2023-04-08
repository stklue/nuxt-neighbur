import { defineStore } from "pinia";
import { Product, ProductType, User } from "./orderItemDetail";

export const useSelectedProductStore = defineStore("selected-product", () => {
  const emptyProduct: Product = {
    id: -1,
    description: "",
    owner: { avatar: "", name: "" } as User,
    price: 0,
    rating: 0,
    type: {} as ProductType,
    recurring: false,
  };
  const selectedProduct: Ref<Product> = ref(emptyProduct);

  const changeProduct = (p: Product) => {
    selectedProduct.value = p
    console.log("Selected product changed: ", selectedProduct.value.id);
    
  };

  const getProduct = () => selectedProduct;
  return { selectedProduct, changeProduct, getProduct };
});
