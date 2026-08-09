import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { WhyUsSection } from "@/components/about/WhyUsSection";
import { FoundersSection } from "@/components/about/FoundersSection";

export const metadata: Metadata = {
  title: "About Us — Reloop Sciences",
  description:
    "Learn about Reloop Sciences, our mission, vision, and how we build circular pathways for laboratory plastic materials.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionVisionSection />
      <WhyUsSection />
      <FoundersSection />
    </main>
  );
}
