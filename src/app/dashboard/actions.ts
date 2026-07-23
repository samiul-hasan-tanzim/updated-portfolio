"use server";

import { connectDB } from "@/lib/db";
import { Contact } from "@/lib/models/contact";
import { revalidatePath } from "next/cache";

export async function deleteMessage(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) return;

  await connectDB();
  await Contact.findByIdAndDelete(id);
  revalidatePath("/dashboard");
}
