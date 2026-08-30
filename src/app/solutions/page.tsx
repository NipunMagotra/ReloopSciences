import type { Metadata } from "next";
import { SolutionsContent } from "@/components/solutions/SolutionsContent";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Approach & Solutions",
  description:
    "Discover Reloop Sciences' traceable collection programmes, sustainability assessments, waste stream mapping, and material recovery solutions for circular laboratory plastics.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Our Approach & Solutions — Reloop Sciences",
    description:
      "Building a traceable circular economy ecosystem for non-hazardous laboratory plastics connecting laboratories, recyclers, and manufacturers.",
    url: "https://reloopsciences.com/solutions",
    images: [
      {
        url: "/images/approach-solutions-infographic.png",
        width: 1200,
        height: 675,
        alt: "Our Approach & Solutions — Reloop Sciences Circular Lifecycle",
      },
    ],
  },
  twitter: {
    title: "Our Approach & Solutions — Reloop Sciences",
    description:
      "Traceable collection, sustainability assessments, and material recovery for circular laboratory plastics.",
    images: ["/images/approach-solutions-infographic.png"],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Our Approach & Solutions — Reloop Sciences",
          description:
            "Discover Reloop Sciences' traceable collection programmes, sustainability assessments, waste stream mapping, and material recovery solutions for circular laboratory plastics.",
          url: "https://reloopsciences.com/solutions",
        })}
      />
      <div>
        <SolutionsContent />
      </div>
    </>
  );
}
