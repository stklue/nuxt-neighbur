export interface RequestMeal {
  requestVal: number;
  request: string;
  accepted: boolean;
  counter: number;
}
export interface UserRequest {
  id: string | number;
  meal: RequestMeal;
  limit: number;
}

export interface User {
  id: number | string;
  email?: string;
  name: string;
  location: string;
  make?: UserRequest;
  online: boolean;
  subscription: string;
  requests?: UserRequest[];
}

export interface Short {
  s: string;
}
interface Food {}

export type ProductType = Short | Food;
export type FoodType = "left overs" | "fresh";
export type Plate = 0.25 | 0.5 | 1 | 2 | 3;
export type Confirmed = "confirmed" | "rejected" | "processing";
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
  available: number | null;
  created_at?: string | null;
  description: string | null;
  expire_at?: string | null;
  id: number;
  image: string | null;
  pname: string | null;
  plate: number | null;
  price: number | null;
  recurring: boolean | null;
  type: string | null;
  user_product?: string | null;
}

export const emptyUser = {
  id: "-1",
  avatar: "",
  location: "",
  email: "",
  password: "",
  subscription: "",
  name: "",
  online: false,
};

export const emptyProduct: Product = {
  id: -1,
  price: 0.0,
  description: "",
  recurring: false,
  type: "fresh",
  plate: 1,
  available: 0,
  image: "",
  pname: "",
};

export interface Cart {
  products: OrderItem[];
  total: number;
}

export interface OrderItem {
  id: number;
  uid: string;
  quantity: number;
  total: number;
  rating: number;
  confirmed: string;
  reason: string;
  order_user: string | null;
  order_product: number | null;
}

export const emptyCart: Cart = {
  products: [],
  total: 0,
};
export const emptyOrderItem: OrderItem = {
  id: -1,
  uid: "",
  quantity: 0,
  total: 0,
  rating: 0,
  confirmed: "",
  reason: "",
  order_user: "",
  order_product: -1,
};
export default function createRandId() {
  return Math.floor(Math.random() * 100_000_000);
}
