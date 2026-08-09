import { Metadata } from "next";
import { PilotHero } from "@/components/pilot/PilotHero";
import { WhyJoinSection } from "@/components/pilot/WhyJoinSection";
import { WhoCanParticipateSection } from "@/components/pilot/WhoCanParticipateSection";
import { WhatWeWillExploreSection } from "@/components/pilot/WhatWeWillExploreSection";
import { WhyWeAreRunningPilotsSection } from "@/components/pilot/WhyWeAreRunningPilotsSection";
import { RegisterInterestSection } from "@/components/pilot/RegisterInterestSection";

export const metadata: Metadata = {
  title: "Pilot Programme — Reloop Sciences",
  description:
    "Join the Reloop Sciences Pilot Programme to explore sustainable approaches to laboratory plastic recovery and circular economy solutions.",
};

export default function PilotPage() {
  return (
    <main className="min-h-screen">
      <PilotHero />
      <WhyJoinSection />
      <WhoCanParticipateSection />
      <WhatWeWillExploreSection />
      <WhyWeAreRunningPilotsSection />
      <RegisterInterestSection />
    </main>
  );
}
