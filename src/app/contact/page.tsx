import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Reloop Sciences",
  description:
    "Get in touch with Reloop Sciences. We'd like to hear from laboratories, recyclers, manufacturers, incubators and others interested in circular laboratory plastics.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
