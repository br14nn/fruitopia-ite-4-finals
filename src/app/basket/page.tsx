import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function BasketPage() {
  const supabase = createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect("/");
  } catch (error) {
    redirect("/");
  }

  return <div>BasketPage</div>;
}
