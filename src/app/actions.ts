"use server";

import { revalidatePath } from "next/cache";

export async function doStuff() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/");
}
