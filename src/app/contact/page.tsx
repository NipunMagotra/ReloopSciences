import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Reloop Sciences. Connect with us to explore partnerships in circular laboratory plastic recovery, sustainability assessments, and pilot programmes in India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us — Reloop Sciences",
    description:
      "Get in touch with Reloop Sciences to explore partnerships in circular laboratory plastic recovery and sustainable life sciences solutions.",
    url: "https://reloopsciences.com/contact",
    images: [
      {
        url: "/images/hero-visual.png",
        width: 1200,
        height: 630,
        alt: "Contact Reloop Sciences",
      },
    ],
  },
  twitter: {
    title: "Contact Us — Reloop Sciences",
    description:
      "Connect with Reloop Sciences for circular laboratory plastic recovery and sustainability partnerships.",
    images: ["/images/hero-visual.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Contact Us — Reloop Sciences",
          description:
            "Get in touch with Reloop Sciences. Connect with us to explore partnerships in circular laboratory plastic recovery, sustainability assessments, and pilot programmes in India.",
          url: "https://reloopsciences.com/contact",
          type: "ContactPage",
        })}
      />
      <ContactPageContent />
    </>
  );
}
