import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Student as student, Product } from "~~/data/types";
import { useUserStore } from "~~/stores/user";
import { Database } from "~~/types/supabase";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const q = getQuery(event);
  const id = Number.parseInt(q.id as string);

  type ProductStudent = Product & {
    Student: student;
  };

  const { data: products } = await client
    .from("Product")
    .select("*, Student(*)")
    .neq("creator", id)
    .eq("Student.online", true);

  const p: ProductStudent[] = products as unknown as ProductStudent[];

  return p.filter(xx => xx.Student);
});
