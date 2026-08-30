import type { Metadata } from "next";
import { PilotHero } from "@/components/pilot/PilotHero";
import { WhyJoinSection } from "@/components/pilot/WhyJoinSection";
import { WhoCanParticipateSection } from "@/components/pilot/WhoCanParticipateSection";
import { WhatWeWillExploreSection } from "@/components/pilot/WhatWeWillExploreSection";
import { WhyWeAreRunningPilotsSection } from "@/components/pilot/WhyWeAreRunningPilotsSection";
import { RegisterInterestSection } from "@/components/pilot/RegisterInterestSection";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pilot Programme",
  description:
    "Join the Reloop Sciences Pilot Programme. Register interest for research laboratories, recyclers, and manufacturers to pilot sustainable non-hazardous laboratory plastic recovery.",
  alternates: {
    canonical: "/pilot",
  },
  openGraph: {
    title: "Pilot Programme — Reloop Sciences",
    description:
      "Join the Reloop Sciences Pilot Programme to explore sustainable approaches to laboratory plastic recovery and circular economy solutions.",
    url: "https://reloopsciences.com/pilot",
    images: [
      {
        url: "/images/pilot-programme-infographic.png",
        width: 1200,
        height: 675,
        alt: "Pilot Programme — Reloop Sciences 6-Step Methodology",
      },
    ],
  },
  twitter: {
    title: "Pilot Programme — Reloop Sciences",
    description:
      "Join the Reloop Sciences Pilot Programme to explore sustainable approaches to laboratory plastic recovery.",
    images: ["/images/pilot-programme-infographic.png"],
  },
};

export default function PilotPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Pilot Programme — Reloop Sciences",
          description:
            "Join the Reloop Sciences Pilot Programme. Register interest for research laboratories, recyclers, and manufacturers to pilot sustainable non-hazardous laboratory plastic recovery.",
          url: "https://reloopsciences.com/pilot",
        })}
      />
      <div className="min-h-screen">
        <PilotHero />
        <WhyJoinSection />
        <WhoCanParticipateSection />
        <WhatWeWillExploreSection />
        <WhyWeAreRunningPilotsSection />
        <RegisterInterestSection />
      </div>
    </>
  );
}
