"use server";

import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200, "Name is too long"),
  organization: z.string().trim().max(200, "Organisation name is too long").optional(),
  email: z.string().trim().email("Please enter a valid email address").max(254, "Email is too long"),
  stakeholderType: z.string().trim().min(1, "Please select an organisation type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must not exceed 5000 characters"),
  honeypot: z.string().max(0, "Spam detected"), // honeypot field (hidden from legitimate users)
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: (formData.get("name") as string) || "",
    organization: (formData.get("organization") as string) || "",
    email: (formData.get("email") as string) || "",
    stakeholderType: (formData.get("stakeholderType") as string) || "",
    message: (formData.get("message") as string) || "",
    honeypot: (formData.get("honeypot") as string) || "",
  };

  // 1. Zod Validation (Server-side)
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please fix the errors in the form below.",
      errors: fieldErrors as Record<string, string[]>,
    };
  }

  // 2. Honeypot check (Automated Bot Trap)
  if (parsed.data.honeypot) {
    // Silently return success to not alert automated spam bots
    return {
      success: true,
      message: "Thank you! We'll be in touch soon.",
    };
  }

  // 3. Lightweight IP Rate Limiting (5 submissions / 15 minutes)
  const clientIp = await getClientIp();
  const rateLimit = checkRateLimit(clientIp, 5, 15 * 60 * 1000);

  if (!rateLimit.success) {
    return {
      success: false,
      message:
        "Too many submissions received from your connection. Please wait a few minutes before trying again or email us directly.",
    };
  }

  // 4. Dispatch Email via Resend
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    // Escaped variables for safe HTML email rendering
    const safeName = escapeHtml(parsed.data.name);
    const safeOrg = parsed.data.organization ? escapeHtml(parsed.data.organization) : "Not specified";
    const safeEmail = escapeHtml(parsed.data.email);
    const safeType = escapeHtml(parsed.data.stakeholderType);
    const safeMessage = escapeHtml(parsed.data.message).replace(/\n/g, "<br />");

    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      const recipient = process.env.CONTACT_EMAIL || "hello@reloopsciences.com";
      const sender = process.env.RESEND_FROM_EMAIL || "ReLoop Contact <onboarding@resend.dev>";

      await resend.emails.send({
        from: sender,
        to: recipient,
        replyTo: parsed.data.email,
        subject: `New Inquiry: ${parsed.data.name} (${parsed.data.stakeholderType})`,
        text: `New contact form submission\n\nName: ${parsed.data.name}\nOrganisation: ${parsed.data.organization || "—"}\nEmail: ${parsed.data.email}\nStakeholder Type: ${parsed.data.stakeholderType}\n\nMessage:\n${parsed.data.message}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #134c2c; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
            <h2 style="color: #134c2c; border-bottom: 2px solid #2da021; padding-bottom: 8px;">New Contact Submission</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Organisation:</strong> ${safeOrg}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Stakeholder Type:</strong> ${safeType}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="white-space: pre-wrap; background: #f8f7f4; padding: 15px; border-radius: 8px;">${safeMessage}</p>
          </div>
        `,
      });
    } else {
      // In development when no key is set, log safe diagnostic
      console.log("─── [Dev Mode] Contact Form Submission Received ───");
      console.log(`From: ${parsed.data.name} (${parsed.data.email}) | Type: ${parsed.data.stakeholderType}`);
      console.log("─── (Set RESEND_API_KEY to send production emails) ───");
    }

    return {
      success: true,
      message: "Thank you! We've received your message and will be in touch soon.",
    };
  } catch (error) {
    // Log error internally without leaking credentials or internals
    console.error("Resend delivery failed:", error instanceof Error ? error.message : "Unknown error");
    return {
      success: false,
      message:
        "Something went wrong while delivering your message. Please try again or email us directly at hello@reloopsciences.com.",
    };
  }
}
