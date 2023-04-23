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
  user_id: number;
  uid: string;
  quantity: number;
  total: number;
  rating: number;
  confirmed: string;
  reason: string;
}
export interface OrderItemData {
  id: string | number;
  user_id: number;
  uid: string;
  product: Product;
  quantity: number;
  total: number;
  rating: number;
  confirmed: string | null;
  reason: string;
}

export const toProductDatabase = (o: OrderItemData) => {
  return {
    id: o.id,
    user_id: o.user_id,
    uid: o.uid,
    total: o.total,
    rating: o.rating,
    confirmed: o.confirmed,
    reason: o.reason,
    productId: o.product.id,
    quantity: o.quantity,
  } as OrderItem;
};

export const emptyCart: Cart = {
  products: [],
  total: 0,
};
export const emptyOrderItem: OrderItem = {
  id: -1,
  user_id: -1,
  uid: "",
  quantity: 0,
  total: 0,
  rating: 0,
  confirmed: "",
  reason: "",
};
export default function createRandId() {
  return Math.floor(Math.random() * 100_000_000);
}
