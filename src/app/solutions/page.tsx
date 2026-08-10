import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Recycle, 
  Search, 
  Map, 
  RefreshCcw, 
  BarChart, 
  Microscope,
  FlaskConical,
  Factory,
  CheckCircle,
  ArrowDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach & Solutions — Reloop Sciences",
  description:
    "Building a traceable circular economy ecosystem that connects laboratories, recyclers, and manufacturers through transparent material recovery pathways.",
};

const ECOSYSTEM_STEPS = [
  "Research Laboratories",
  "Traceable Collection",
  "Material Tracking",
  "Recycling Partners",
  "Recovered Materials",
  "Manufacturing Partners",
  "New Products"
];

const OFFERINGS = [
  {
    title: "Traceable Collection Programmes",
    subtitle: "Our Primary Offering",
    description: "Reloop Sciences is exploring dedicated collection programmes for suitable non-hazardous laboratory plastics. Through barcode-enabled collection systems and material traceability, laboratories can gain greater visibility into their material recovery pathways.",
    features: [
      "Dedicated collection containers",
      "Barcode-enabled tracking",
      "Collection records",
      "Material traceability",
      "Recovery reporting",
      "Sustainability data"
    ],
    whyItMatters: "Traceability helps provide transparency, accountability, and confidence throughout the recovery journey.",
    icon: Recycle
  },
  {
    title: "Laboratory Sustainability Assessments",
    subtitle: "Understand Current Practices",
    description: "Understanding sustainability starts with understanding current practices. Reloop Sciences helps organisations review how laboratory materials are used and managed.",
    features: [
      "Material usage patterns",
      "Plastic consumption",
      "Sustainability initiatives",
      "Waste management practices",
      "Resource efficiency opportunities"
    ],
    deliverables: [
      "Sustainability Assessment Report",
      "Key Findings Summary",
      "Improvement Recommendations"
    ],
    icon: Search
  },
  {
    title: "Waste Stream Mapping",
    subtitle: "Create Visibility",
    description: "Many organisations do not have a clear picture of what materials enter and leave their laboratories. Waste Stream Mapping helps create that visibility.",
    features: [
      "Laboratory Plastics (Falcon tubes, Pipette tip boxes, PCR plates, Serological pipettes, Sample containers)",
      "Packaging Materials (Cardboard, Plastic wrap, Shipping materials, Protective packaging)",
      "Material Flows (Current disposal pathways, Waste volumes, Segregation practices, Recovery opportunities)"
    ],
    deliverables: [
      "Waste Stream Inventory",
      "Material Flow Analysis",
      "Recovery Opportunity Report"
    ],
    icon: Map
  },
  {
    title: "Circularity Assessments",
    subtitle: "Explore Opportunities",
    description: "Once laboratory material streams are understood, organisations can begin exploring opportunities for circularity. Circularity Assessments help identify materials that may have the potential to move beyond traditional disposal pathways.",
    features: [
      "Material recovery potential",
      "Recovery pathway identification",
      "Circular economy opportunities",
      "Resource efficiency improvements",
      "Sustainability priorities"
    ],
    deliverables: [
      "Circularity Assessment Report",
      "Recovery Opportunities Roadmap",
      "Circular Economy Recommendations"
    ],
    icon: RefreshCcw
  },
  {
    title: "Sustainability Reporting & Insights",
    subtitle: "Visibility into Environmental Performance",
    description: "Organisations increasingly require better visibility into environmental performance and sustainability initiatives. Reloop Sciences supports improved understanding of laboratory material flows through data, reporting, and sustainability insights.",
    features: [
      "Material recovery reporting",
      "Waste generation trends",
      "Sustainability metrics",
      "Circularity indicators",
      "Environmental performance insights"
    ],
    icon: BarChart
  }
];

const PARTNERS = [
  {
    title: "Research Laboratories",
    description: "Universities, research institutes, and scientific facilities.",
    icon: Microscope
  },
  {
    title: "Biotechnology Companies",
    description: "Innovation-focused organisations seeking sustainable laboratory practices.",
    icon: FlaskConical
  },
  {
    title: "Pharmaceutical R&D",
    description: "Research teams committed to improving environmental performance.",
    icon: Factory
  },
  {
    title: "Recycling Partners",
    description: "Organisations involved in material recovery and recycling.",
    icon: Recycle
  },
  {
    title: "Manufacturing Partners",
    description: "Companies interested in sustainable material solutions and circular supply chains.",
    icon: Factory
  }
];

const VISION_POINTS = [
  "Laboratories understand their material flows",
  "Valuable resources remain in circulation",
  "Recovery pathways are transparent",
  "Sustainability data is measurable",
  "Scientific innovation and environmental responsibility work together"
];

export default function SolutionsPage() {
  return (
    <main className="bg-stone-50/50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-widest text-[#f88a0d] uppercase mb-4">
            Our Approach & Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#134c2c] tracking-tight mb-8 leading-[1.1]">
            Building a Circular Future for Laboratory Plastics.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            Laboratories rely on plastic consumables every day to support scientific research, innovation, and discovery. While these materials are essential for maintaining safety, quality, and reproducibility, many eventually enter disposal pathways with limited opportunities for recovery.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed font-medium">
            At Reloop Sciences, we believe suitable non-hazardous laboratory plastics should be viewed as valuable resources rather than waste. Our mission is to build a traceable circular economy ecosystem that connects laboratories, recyclers, and manufacturers through transparent material recovery pathways.
          </p>
        </div>
      </section>

      {/* Ecosystem Flow Section */}
      <section className="py-20 bg-white border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold text-[#134c2c] mb-6">Our Approach</h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-16 text-lg">
            Reloop Sciences is developing a collaborative ecosystem that aims to connect key stakeholders involved in laboratory material management.
          </p>

          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto space-y-2">
            {ECOSYSTEM_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div className="w-full max-w-md bg-stone-50 border border-stone-200 py-4 px-6 rounded-2xl shadow-sm text-center font-semibold text-[#134c2c]">
                  {step}
                </div>
                {index < ECOSYSTEM_STEPS.length - 1 && (
                  <div className="text-stone-300 py-2">
                    <ArrowDown size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-emerald-50/50 rounded-3xl p-8 max-w-2xl mx-auto border border-emerald-100">
            <h3 className="text-xl font-bold text-[#134c2c] mb-2">The goal is simple:</h3>
            <p className="text-stone-700">
              Keep valuable materials in productive use for longer while improving transparency throughout the recovery process.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions / Offerings */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#134c2c] mb-16 text-center">Our Solutions</h2>
        
        <div className="space-y-12">
          {OFFERINGS.map((offering, idx) => {
            const Icon = offering.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80 shadow-sm flex flex-col md:flex-row gap-8 lg:gap-12 hover:shadow-md transition-shadow">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#f88a0d]/10 text-[#f88a0d] flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>
                  <span className="text-xs font-bold text-[#f88a0d] uppercase tracking-wider mb-2 block">
                    {offering.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-[#134c2c] mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {offering.description}
                  </p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {offering.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-stone-600 text-sm flex items-start gap-2">
                          <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(offering.deliverables || offering.whyItMatters) && (
                    <div>
                      {offering.deliverables && (
                        <>
                          <h4 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#f88a0d]" />
                            Deliverables
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {offering.deliverables.map((del, dIdx) => (
                              <li key={dIdx} className="text-stone-600 text-sm flex items-start gap-2">
                                <CheckCircle size={16} className="text-[#f88a0d] mt-0.5 flex-shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      
                      {offering.whyItMatters && (
                        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                          <h4 className="font-semibold text-[#134c2c] mb-2 text-sm">Why It Matters</h4>
                          <p className="text-sm text-stone-700">{offering.whyItMatters}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-[#134c2c] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With</h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto">
              We build a connected ecosystem across the entire lifecycle of laboratory plastics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {PARTNERS.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                  <Icon size={32} className="text-[#f88a0d] mb-6" />
                  <h3 className="text-xl font-bold mb-3">{partner.title}</h3>
                  <p className="text-emerald-100/70 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Long-Term Vision */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] border border-stone-200/80 p-8 md:p-16 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f88a0d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#134c2c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="inline-block text-xs font-bold tracking-widest text-[#f88a0d] uppercase mb-4">
                Our Long-Term Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#134c2c] mb-6">
                A Transparent & Traceable Circular Economy
              </h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                We envision a future where suitable laboratory plastics move through a transparent and traceable circular economy.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#134c2c] hover:bg-[#0e3b21] text-white font-medium transition-colors shadow-lg shadow-emerald-950/20 w-fit"
              >
                Join the Ecosystem
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full bg-stone-50 rounded-3xl p-8 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-6">A future where:</h3>
              <ul className="space-y-4">
                {VISION_POINTS.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-stone-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#134c2c] mb-2">Reloop Sciences</h3>
          <p className="text-[#f88a0d] font-semibold mb-4">Reducing Waste. Recovering Resources. Enabling Circular Science.</p>
          <p className="text-stone-500 text-sm">Building a traceable circular economy ecosystem for laboratory plastics.</p>
        </div>
      </section>
    </main>
  );
}
