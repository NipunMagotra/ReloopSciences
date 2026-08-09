"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  organization: z.string().max(200).optional(),
  email: z.string().email("Please enter a valid email address"),
  stakeholderType: z.string().min(1, "Please select a stakeholder type"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  honeypot: z.string().max(0, "Spam detected"), // honeypot field
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") as string,
    organization: formData.get("organization") as string,
    email: formData.get("email") as string,
    stakeholderType: formData.get("stakeholderType") as string,
    message: formData.get("message") as string,
    honeypot: (formData.get("honeypot") as string) || "",
  };

  // Validate
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors as Record<string, string[]>,
    };
  }

  // Spam check (honeypot)
  if (parsed.data.honeypot) {
    // Silently reject but return success to not inform the bot
    return {
      success: true,
      message: "Thank you! We'll be in touch soon.",
    };
  }

  try {
    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Reloop Contact Form <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "hello@reloopsciences.com",
        replyTo: parsed.data.email,
        subject: `New Contact: ${parsed.data.name} — ${parsed.data.stakeholderType}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${parsed.data.name}</p>
          <p><strong>Organization:</strong> ${parsed.data.organization || "—"}</p>
          <p><strong>Email:</strong> ${parsed.data.email}</p>
          <p><strong>Type:</strong> ${parsed.data.stakeholderType}</p>
          <hr />
          <p>${parsed.data.message.replace(/\n/g, "<br />")}</p>
        `,
      });
    } else {
      // No API key — log to console in development
      console.log("─── Contact Form Submission ───");
      console.log(JSON.stringify(parsed.data, null, 2));
      console.log("─── (No RESEND_API_KEY set — email not sent) ───");
    }

    return {
      success: true,
      message: "Thank you! We'll be in touch soon.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
