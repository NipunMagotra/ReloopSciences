import { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { MediaVideoSection } from "@/components/home/MediaVideoSection";
import { WhyThisMattersSection } from "@/components/home/WhyThisMattersSection";
import { CircularModelSection } from "@/components/home/CircularModelSection";
import { BuiltByScientistsSection } from "@/components/home/BuiltByScientistsSection";
import { ImpactDataSection } from "@/components/home/ImpactDataSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";

export const metadata: Metadata = {
  title: "Reloop Sciences — Building India's First Circular Lab-Plastic Ecosystem",
  description:
    "A traceable, closed-loop system that transforms clean lab plastics into new lab products across India.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MediaVideoSection />
      <WhyThisMattersSection />
      <CircularModelSection />
      <BuiltByScientistsSection />
      <ImpactDataSection />
      <HomeCtaSection />
    </main>
  );
}
