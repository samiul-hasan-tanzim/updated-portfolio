"use server";

import { connectDB } from "@/lib/db";
import { Contact } from "@/lib/models/contact";

type ActionResult = { error: string } | { success: boolean } | null;

export async function submitContact(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const callsign = formData.get("callsign") as string;
  const frequency = formData.get("frequency") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!callsign || !frequency || !subject || !message) {
    return { error: "All fields are required." };
  }

  try {
    await connectDB();
    await Contact.create({ callsign, frequency, subject, message });
    return { success: true };
  } catch (err) {
    console.error("Failed to save contact:", err);
    return { error: "Failed to send transmission. Try again." };
  }
}
