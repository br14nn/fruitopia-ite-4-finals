"use server";

import { revalidatePath } from "next/cache";

export async function revalidateAllPaths() {
  revalidatePath("/", "layout");
}

export async function revalidateSepcificPath(url: string) {
  revalidatePath(url, "page");
}
