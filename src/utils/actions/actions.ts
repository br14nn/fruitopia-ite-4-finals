"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function revalidateAllPaths() {
  revalidatePath("/", "layout");
}

export async function revalidateSepcificPath(url: string) {
  revalidatePath(url);
}
