export interface RequestMeal {
  requestVal: number;
  request: string;
  accepted: boolean;
  counter: number;
}
export interface UserRequest {
  id: number;
  meal: RequestMeal;
  limit: number;
}

export interface User {
  id: number;
  avatar: string;
  email: string;
  name: string;
  location: string;
  password: string;
  make?: UserRequest;
  online: boolean;
  requests?: UserRequest[];
}

export interface Short {
  s: string;
}
interface Food {}

export type ProductType = Short | Food;
export type FoodType = "left overs" | "fresh";
export type Plate = 0.25 | 0.5 | 1 | 2 | 3;
export type Confirmed = "confirmed" | "rejected";
export type RejectedReason =
  | "someone else was before you"
  | "order was canceled by chef";
export interface Order {
  item: OrderItem[];
  total: number;
  confirmed: Confirmed;
  reason: RejectedReason;
}

export interface Product {
  id: number;
  userId: number;
  price: number;
  rating: number;
  description: string;
  recurring?: boolean;
  foodType: FoodType | string;
  plate: Plate | number;
  available: number;
  image: string;
  created: string;
  expire: string;
}

export const emptyUser = {
  id: -1,
  avatar: "",
  location: "",
  email: "",
  password: "",
  name: "",
  online: false,
};

export const emptyProduct: Product = {
  id: -1,
  userId: emptyUser.id,
  price: 0.0,
  rating: 0,
  description: "",
  recurring: false,
  foodType: "fresh",
  plate: 1,
  available: 0,
  image: "string",
  created: new Date().toLocaleString(),
  expire: "",
};

export interface Cart {
  products: OrderItem[];
  total: number;
}

export interface OrderItem {
  id: number;
  userId: number;
  productId: number;
  chefId: number;
  quantity: number;
  total: number;
  rating: number;
  confirmed: Confirmed | string;
  reason: RejectedReason | string;
}

export const emptyCart: Cart = {
  products: [],
  total: 0,
};

export default function createRandId() {
  return Math.floor(Math.random() * 100_000_000);
}
