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

export interface Student {
  id: number;
  user_id: string;
  email?: string;
  name: string;
  location: string;
  online: boolean;
  subscription: number;
}

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
  id?: number;
  image: string | null;
  pname: string | null;
  plate: number | null;
  price: number | null;
  recurring: boolean | null;
  type: string | null;
  creator?: number | null;
}

export const emptyUser: Student = {
  id: -1,
  user_id: "-1",
  location: "",
  subscription: -1,
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
  creator: -1,
};

export interface Cart<T> {
  products: T[];
  total: number;
}

export interface OrderItem {
  id: number;
  student_uid: number;
  quantity: number;
  total: number;
  rating: number;
  confirmed: string;
  reason: string;
  order_creator: number | null;
  order_product: number | null;
}



export const emptyOrderItem: OrderItem = {
  id: -1,
  student_uid: -1,
  quantity: 0,
  total: 0,
  rating: 0,
  confirmed: "",
  reason: "",
  order_creator: -1,
  order_product: -1,
};
export default function createRandId() {
  return Math.floor(Math.random() * 100_000_000);
}
