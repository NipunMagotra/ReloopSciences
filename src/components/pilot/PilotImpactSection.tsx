"use client";

import { motion } from "motion/react";
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Workflow,
} from "lucide-react";

const impactMetrics = [
  {
    title: "Waste Diversion",
    description: "Substantial reduction in clean plastic waste sent to incineration or landfills.",
    icon: Leaf,
  },
  {
    title: "Material Traceability",
    description: "Full digital chain of custody from lab collection to final recycled material.",
    icon: ShieldCheck,
  },
  {
    title: "High-Grade Circularity",
    description: "Verified polymer purity & mechanical standards for lab-grade supply reuse.",
    icon: Sparkles,
  },
  {
    title: "Emissions Reduction",
    description: "Measurable carbon footprint reduction through closed-loop recycling.",
    icon: TrendingDown,
  },
  {
    title: "Scalable Framework",
    description: "Standardized operating protocols designed for seamless institutional expansion.",
    icon: Workflow,
  },
];

export function PilotImpactSection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-10 bg-offwhite relative" id="expected-impact">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#f88a0d] uppercase block mb-2">
            MEASURABLE OUTCOMES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Expected Impact
          </h2>
        </div>

        {/* 5 Compact Cards in 1 Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          {impactMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:border-[#2da021]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  {/* Simple Green Line Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#2da021] border border-emerald-100 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#134c2c] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
