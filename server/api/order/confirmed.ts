import { serverSupabaseClient } from "#supabase/server";
import { OrderItem, Product as product } from "~~/data/types";
import { Database } from "~~/types/supabase";

type OrderProduct = OrderItem & {
  Product: product;
};

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);

  const q = getQuery(event);
  const id = Number.parseInt(q.id as string);

  const { data: ordersConfirmed } = await client
    .from("Order")
    .select("*, Product(*)")
    .eq("student_uid", id)
    .eq("confirmed", "confirmed")
    .order("created_at", { ascending: false });
  const orders = ordersConfirmed as unknown as OrderProduct[];

  return orders;
});
