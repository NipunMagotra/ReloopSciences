"use client";

import { motion } from "motion/react";
import { Layers, RefreshCw, Network, BarChart3 } from "lucide-react";

const exploreItems = [
  {
    title: "Laboratory Material Streams",
    description: "Understanding the types of plastics generated within research environments.",
    icon: Layers,
  },
  {
    title: "Recovery Opportunities",
    description: "Identifying materials that may be suitable for circular pathways.",
    icon: RefreshCw,
  },
  {
    title: "Supply Chain Requirements",
    description: "Understanding recycler and manufacturer requirements.",
    icon: Network,
  },
  {
    title: "Sustainability Metrics",
    description: "Exploring how environmental impact can be better measured and communicated.",
    icon: BarChart3,
  },
];

export function WhatWeWillExploreSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-offwhite relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="eyebrow block">Core Objectives</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            What Will We Explore?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {exploreItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#f88a0d] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#134c2c] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
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
