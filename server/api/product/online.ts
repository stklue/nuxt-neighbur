import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const serverUser = await serverSupabaseUser(event);

  const { data: userData } = await client
    .from("User")
    .select("*")
    .eq("id", serverUser?.id)
    .single();
  const { data: onlineNearMe } = await client
    .from("User")
    .select("*")
    .eq("location", userData?.location)
    .eq("online", true)
    .neq("id", userData?.id);

  const ids = onlineNearMe?.map((o) => o.id);

  const { data: products } = await client
    .from("Product")
    .select("*")
    .in("user_product", ids!);

  const prodIds = products?.map((o) => o.user_product);

  const { data: users } = await client
    .from("User")
    .select("*")
    .in("id", prodIds!);

  return { u: users, p: products };
});
