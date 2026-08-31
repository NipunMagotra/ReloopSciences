import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { MediaVideoSection } from "@/components/home/MediaVideoSection";
import { WhyThisMattersSection } from "@/components/home/WhyThisMattersSection";
import { CircularModelSection } from "@/components/home/CircularModelSection";
import { BuiltByScientistsSection } from "@/components/home/BuiltByScientistsSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "ReLoop Sciences — Circular Economy for Laboratory Plastics in India",
  description:
    "A traceable, closed-loop ecosystem transforming clean, non-hazardous laboratory plastics into high-value circular materials across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ReLoop Sciences — Circular Economy for Laboratory Plastics in India",
    description:
      "Building a traceable closed-loop ecosystem that transforms clean, non-hazardous laboratory plastics into circular materials across India.",
    url: "https://reloopsciences.com",
    images: [
      {
        url: "/images/hero-visual.png",
        width: 1200,
        height: 630,
        alt: "ReLoop Sciences — Circular Economy for Laboratory Plastics in India",
      },
    ],
  },
  twitter: {
    title: "ReLoop Sciences — Circular Economy for Laboratory Plastics in India",
    description:
      "Building a traceable closed-loop ecosystem that transforms clean, non-hazardous laboratory plastics into circular materials across India.",
    images: ["/images/hero-visual.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "ReLoop Sciences — Circular Economy for Laboratory Plastics in India",
          description:
            "A traceable, closed-loop ecosystem transforming clean, non-hazardous laboratory plastics into high-value circular materials across India.",
          url: "https://reloopsciences.com",
        })}
      />
      <div className="min-h-screen">
        <Hero />
        <CircularModelSection />
        <MediaVideoSection />
        <WhyThisMattersSection />
        <BuiltByScientistsSection />
        <HomeCtaSection />
      </div>
    </>
  );
}
