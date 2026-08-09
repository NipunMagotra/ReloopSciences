import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Recycle, ShieldCheck, BarChart3, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Reloop Sciences",
  description:
    "Explore Reloop Sciences' comprehensive solutions for laboratory plastic circular economy, sustainability assessment, and waste traceability.",
};

const SOLUTIONS = [
  {
    icon: Recycle,
    title: "Circular Economy Pilot",
    description:
      "End-to-end recovery systems tailored for high-volume single-use laboratory plastics, ensuring high-purity material collection and high-value recycling.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainability Assessment",
    description:
      "In-depth audits of your lab's plastic consumption patterns, waste streams, and environmental footprint with actionable decarbonization roadmaps.",
  },
  {
    icon: BarChart3,
    title: "Traceability & Reporting",
    description:
      "Chain-of-custody tracking and verified impact metrics to validate your laboratory's ESG reporting and compliance goals.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description:
      "Custom training modules and change-management protocols to align lab technicians, sustainability officers, and facility managers.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="py-20 bg-stone-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-[#f88a0d] uppercase mb-3">
            Our Approach
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#134c2c] tracking-tight mb-6">
            Pioneering Solutions for Circular Lab Plastics.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            We partner with research institutions, biopharma laboratories, and recyclers to divert high-purity laboratory plastics from landfills and incinerators into high-value circular supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SOLUTIONS.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#134c2c] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {sol.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#134c2c] text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to implement circular solutions in your lab?
            </h2>
            <p className="text-emerald-100/80 text-sm max-w-xl">
              Connect with our sustainability specialists to design a customized pilot program for your facility.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white font-medium text-sm transition-colors whitespace-nowrap shadow-lg shadow-orange-950/20"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
