"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidateAllPaths();
  redirect("/");
}

export async function revalidateAllPaths() {
  revalidatePath("/", "layout");
}
