import { Metadata } from "next";
import { SolutionsContent } from "@/components/solutions/SolutionsContent";

export const metadata: Metadata = {
  title: "Our Approach & Solutions — Reloop Sciences",
  description:
    "Building a traceable circular economy ecosystem that connects laboratories, recyclers, and manufacturers through transparent material recovery pathways.",
  openGraph: {
    title: "Our Approach & Solutions — Reloop Sciences",
    description:
      "Building a traceable circular economy ecosystem for non-hazardous laboratory plastics.",
  },
};

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsContent />
    </main>
  );
}
