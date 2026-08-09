import { Metadata } from "next";
import { ChallengesHero } from "@/components/challenges/ChallengesHero";
import { OverlookedChallengeSection } from "@/components/challenges/OverlookedChallengeSection";
import { SustainabilityExpectationsSection } from "@/components/challenges/SustainabilityExpectationsSection";
import { WhyPlasticsAreDifferentSection } from "@/components/challenges/WhyPlasticsAreDifferentSection";

export const metadata: Metadata = {
  title: "The Challenges — Reloop Sciences",
  description:
    "Explore the unique challenges of single-use laboratory plastic waste, sustainability expectations, and specialized recovery pathways.",
};

export default function ChallengesPage() {
  return (
    <main className="min-h-screen">
      <ChallengesHero />
      <OverlookedChallengeSection />
      <SustainabilityExpectationsSection />
      <WhyPlasticsAreDifferentSection />
    </main>
  );
}
