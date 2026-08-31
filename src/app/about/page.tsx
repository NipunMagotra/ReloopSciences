import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { WhyUsSection } from "@/components/about/WhyUsSection";
import { FoundersSection } from "@/components/about/FoundersSection";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ReLoop Sciences, our mission, vision, and how we are pioneering circular pathways for non-hazardous laboratory plastics in India's life sciences ecosystem.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us — ReLoop Sciences",
    description:
      "Learn about ReLoop Sciences, our mission, vision, and how we are pioneering circular pathways for non-hazardous laboratory plastics.",
    url: "https://reloopsciences.com/about",
    images: [
      {
        url: "/images/about-us-infographic.png",
        width: 1200,
        height: 675,
        alt: "About ReLoop Sciences — Mission, Vision and Circular Life Sciences",
      },
    ],
  },
  twitter: {
    title: "About Us — ReLoop Sciences",
    description:
      "Learn about ReLoop Sciences, our mission, vision, and circular economy initiatives for laboratory plastics.",
    images: ["/images/about-us-infographic.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "About Us — ReLoop Sciences",
          description:
            "Learn about ReLoop Sciences, our mission, vision, and how we are pioneering circular pathways for non-hazardous laboratory plastics in India's life sciences ecosystem.",
          url: "https://reloopsciences.com/about",
          type: "AboutPage",
        })}
      />
      <div className="min-h-screen">
        <AboutHero />
        <MissionVisionSection />
        <WhyUsSection />
        <FoundersSection />
      </div>
    </>
  );
}
