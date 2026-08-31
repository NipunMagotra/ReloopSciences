import type { Metadata } from "next";
import { ChallengesHero } from "@/components/challenges/ChallengesHero";
import { OverlookedChallengeSection } from "@/components/challenges/OverlookedChallengeSection";
import { SustainabilityExpectationsSection } from "@/components/challenges/SustainabilityExpectationsSection";
import { WhyPlasticsAreDifferentSection } from "@/components/challenges/WhyPlasticsAreDifferentSection";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "The Challenges",
  description:
    "Explore the environmental challenges of single-use laboratory plastic waste, sustainability pressures in research, and the need for specialized non-hazardous recovery pathways.",
  alternates: {
    canonical: "/challenges",
  },
  openGraph: {
    title: "The Challenges — ReLoop Sciences",
    description:
      "Explore the environmental challenges of single-use laboratory plastic waste, sustainability pressures in research, and the need for specialized non-hazardous recovery pathways.",
    url: "https://reloopsciences.com/challenges",
    images: [
      {
        url: "/images/challenges-infographic.png",
        width: 1200,
        height: 675,
        alt: "The Challenges of Laboratory Plastic Waste — ReLoop Sciences",
      },
    ],
  },
  twitter: {
    title: "The Challenges — ReLoop Sciences",
    description:
      "Explore the environmental challenges of single-use laboratory plastic waste and specialized recovery pathways.",
    images: ["/images/challenges-infographic.png"],
  },
};

export default function ChallengesPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "The Challenges — ReLoop Sciences",
          description:
            "Explore the environmental challenges of single-use laboratory plastic waste, sustainability pressures in research, and the need for specialized non-hazardous recovery pathways.",
          url: "https://reloopsciences.com/challenges",
        })}
      />
      <div className="min-h-screen">
        <ChallengesHero />
        <OverlookedChallengeSection />
        <SustainabilityExpectationsSection />
        <WhyPlasticsAreDifferentSection />
      </div>
    </>
  );
}
