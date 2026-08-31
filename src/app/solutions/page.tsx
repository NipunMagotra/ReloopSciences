import type { Metadata } from "next";
import { SolutionsContent } from "@/components/solutions/SolutionsContent";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Approach & Solutions",
  description:
    "Discover ReLoop Sciences' traceable collection programmes, sustainability assessments, waste stream mapping, and material recovery solutions for circular laboratory plastics.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Our Approach & Solutions — ReLoop Sciences",
    description:
      "Building a traceable circular economy ecosystem for non-hazardous laboratory plastics connecting laboratories, recyclers, and manufacturers.",
    url: "https://reloopsciences.com/solutions",
    images: [
      {
        url: "/images/hero-visual.png",
        width: 1200,
        height: 630,
        alt: "Our Approach & Solutions — ReLoop Sciences Circular Lifecycle",
      },
    ],
  },
  twitter: {
    title: "Our Approach & Solutions — ReLoop Sciences",
    description:
      "Traceable collection, sustainability assessments, and material recovery for circular laboratory plastics.",
    images: ["/images/hero-visual.png"],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Our Approach & Solutions — ReLoop Sciences",
          description:
            "Discover ReLoop Sciences' traceable collection programmes, sustainability assessments, waste stream mapping, and material recovery solutions for circular laboratory plastics.",
          url: "https://reloopsciences.com/solutions",
        })}
      />
      <div>
        <SolutionsContent />
      </div>
    </>
  );
}
