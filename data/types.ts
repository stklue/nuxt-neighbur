export interface RequestMeal {
  requestVal: number;
  request: string;
  accepted: boolean;
  counter: number;
}
export interface UserRequest {
  meal: RequestMeal;
  limit: number;
}

export interface User {
  avatar: string;
  name: string;
  make?: UserRequest;
  requests?: UserRequest[];
}

export interface Short {
  s: string;
}
interface Food {}

export type ProductType = Short | Food;
export type FoodType = "left overs" | "fresh";
export type Portion = 0.5 | 1 | 2;
export type Confirmed = "confirmed" | "rejected";
export type RejectedReason =
  | "someone else was before you"
  | "order was canceled by chef";
export interface Order {
  product: Product;
  total: number;
  confirmed: Confirmed;
  reason: RejectedReason;
}

export interface Product {
  id: number;
  user: User;
  price: number;
  type: ProductType;
  rating: number;
  description: string;
  recurring?: boolean;
  foodType: FoodType;
  portion: Portion;
  available: number;
  image: string;
  created: string;
  orders?: Order[];
  expire: string
}

export const emptyProduct: Product = {
  id: -1,
  user: {
    avatar: "",
    name: "",
  },
  price: 0.0,
  type: {},
  rating: 0,
  description: "",
  recurring: false,
  foodType: "fresh",
  portion: 1,
  available: 0,
  image: "string",
  created: new Date().toLocaleString(),
  expire: ""
};


export interface Cart {
  products: Product[];
  total: number;
} 

export const emptyCart: Cart = {
  products: [],
  total: 0
}