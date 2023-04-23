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
  pname:  "",
};

export interface Cart {
  products: OrderItemData[];
  total: number;
}

export interface OrderItem {
  id: string | number;
  userId: string;
  productId: number;
  quantity: number;
  total: number;
  rating: number;
  confirmed: Confirmed | string;
  reason: RejectedReason | string;
}
export interface OrderItemData {
  id: string | number;
  userId: string;
  product: Product;
  quantity: number;
  total: number;
  rating: number;
  confirmed: Confirmed | string;
  reason: RejectedReason | string;
}

export const toProductDatabase = (o: OrderItemData) => {
  return {
    id: o.id,
    userId: o.userId,
    total: o.total,
    rating: o.rating,
    confirmed: o.confirmed,
    reason: o.reason,
    productId: o.product.id,
  } as OrderItem;
};

export const emptyCart: Cart = {
  products: [],
  total: 0,
};

export default function createRandId() {
  return Math.floor(Math.random() * 100_000_000);
}
