import type { Metadata } from "next";
import { PilotHero } from "@/components/pilot/PilotHero";
import { PilotMethodologySection } from "@/components/pilot/PilotMethodologySection";
import { PilotImpactSection } from "@/components/pilot/PilotImpactSection";
import { PilotCtaSection } from "@/components/pilot/PilotCtaSection";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pilot Programme",
  description:
    "Join the ReLoop Sciences Pilot Programme. Real-world testing of our circular laboratory plastic recovery model with participating research institutions and laboratories.",
  alternates: {
    canonical: "/pilot",
  },
  openGraph: {
    title: "Pilot Programme — ReLoop Sciences",
    description:
      "Join the ReLoop Sciences Pilot Programme to explore sustainable approaches to laboratory plastic recovery and circular economy solutions.",
    url: "https://reloopsciences.com/pilot",
    images: [
      {
        url: "/images/pilot-hero.png",
        width: 1200,
        height: 630,
        alt: "ReLoop Sciences Pilot Programme — 6-Stage Methodology and Expected Impact",
      },
    ],
  },
  twitter: {
    title: "Pilot Programme — ReLoop Sciences",
    description:
      "Join the ReLoop Sciences Pilot Programme to explore sustainable approaches to laboratory plastic recovery.",
    images: ["/images/pilot-hero.png"],
  },
};

export default function PilotPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Pilot Programme — ReLoop Sciences",
          description:
            "Join the ReLoop Sciences Pilot Programme. Real-world testing of our circular laboratory plastic recovery model with participating research institutions and laboratories.",
          url: "https://reloopsciences.com/pilot",
        })}
      />
      <div className="min-h-screen">
        <PilotHero />
        <PilotMethodologySection />
        <PilotImpactSection />
        <PilotCtaSection />
      </div>
    </>
  );
}
