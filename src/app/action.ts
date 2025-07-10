"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactSubmit(data: z.infer<typeof contactSchema>) {
  const parsedData = contactSchema.safeParse(data);

  if (!parsedData.success) {
    throw new Error("Invalid form data.");
  }

  // In a real application, you would send this data to your backend,
  // save it to a database, or send an email.
  console.log("Contact form submitted:", parsedData.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // We can return a success message or object here if needed
  return { success: true, message: "Message sent successfully!" };
}
