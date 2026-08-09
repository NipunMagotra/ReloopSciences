"use client";

import { motion } from "motion/react";
import { Globe2, Flame, AlertTriangle, Leaf } from "lucide-react";

const stats = [
  {
    value: "5.5M Tonnes",
    label: "Global Lab Waste Annually",
    description: "30–50% is high-quality Polypropylene (PP) that is fully recyclable.",
    icon: Globe2,
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    value: "99%",
    label: "Current Incineration Rate",
    description: "Incinerated due to lack of segregation, traceability & dedicated pathways.",
    icon: Flame,
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    value: "150k-200k Tonnes",
    label: "India's Yearly Lab Plastics",
    description: "30–40% is clean, non-hazardous PP that can be diverted into circular streams.",
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    value: "1.5-2.0 Tonnes CO₂",
    label: "Emissions Per Tonne Incinerated",
    description: "Releases CO₂, nitrous oxides, VOCs & particulates per tonne burned.",
    icon: Leaf,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export function ImpactDataSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-offwhite relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow block">Scientific & Environmental Footprint</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Global & National Environmental Impact
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Quantifying the urgency of transitioning from single-use lab plastic disposal to circular recovery systems.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                    <Icon size={24} />
                  </div>
                  <div className={`text-2xl lg:text-3xl font-black ${item.color} mb-2`}>
                    {item.value}
                  </div>
                  <h3 className="font-bold text-[#134c2c] text-base mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comprehensive Environmental Science Insight Box */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="text-lg font-bold text-[#134c2c] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            The Preventable Climate & Atmospheric Cost
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Incineration of PP releases 1.5–2.0 tonnes of CO₂ per tonne, alongside nitrous oxides, volatile organic compounds, and micro‑particulates that contribute to atmospheric warming, air pollution, and ecological degradation. These emissions exacerbate global climate change by increasing radiative forcing, accelerating temperature rise, and intensifying extreme weather events.
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-950 text-xs md:text-sm font-bold">
            The current disposal model therefore represents a significant and preventable source of greenhouse gas emissions within the scientific sector.
          </div>
        </div>
      </div>
    </section>
  );
}
