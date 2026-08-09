import { Metadata } from "next";
import { FoundersSection } from "@/components/about/FoundersSection";

export const metadata: Metadata = {
  title: "About Us — Reloop Sciences",
  description:
    "Learn about Reloop Sciences, our mission, vision, and the founders pioneering circular economy solutions for laboratory plastic waste.",
};

export default function AboutPage() {
  return (
    <main className="pt-8">
      <FoundersSection />
    </main>
  );
}
