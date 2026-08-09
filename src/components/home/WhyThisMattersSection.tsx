"use client";

import { motion } from "motion/react";
import { Microscope, Recycle, Factory, Link2 } from "lucide-react";

const connectors = [
  {
    name: "Laboratories",
    description: "Generators of clean, non-hazardous PP plastic waste.",
    icon: Microscope,
    badgeColor: "bg-emerald-50 text-[#2da021] border-emerald-200",
  },
  {
    name: "Recyclers",
    description: "Material recovery specialists processing high-purity PP pellets.",
    icon: Recycle,
    badgeColor: "bg-amber-50 text-[#f88a0d] border-amber-200",
  },
  {
    name: "Manufacturers",
    description: "Creating brand new lab products from recycled polymers.",
    icon: Factory,
    badgeColor: "bg-sky-50 text-[#0284c7] border-sky-200",
  },
];

export function WhyThisMattersSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow block">Systemic Problem & Solution</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Why This Matters
          </h2>
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
            <p className="text-gray-800 text-base md:text-lg font-semibold">
              Every day, laboratories across India discard clean polypropylene that could be recycled.
            </p>
            <p className="text-[#f88a0d] text-sm md:text-base font-bold">
              Not because it’s hazardous — but because the system is broken.
            </p>
          </div>
        </div>

        {/* The Missing Link Section */}
        <div className="bg-offwhite p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2da021] flex items-center justify-center">
              <Link2 size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#134c2c]">
              We are building the missing link that finally connects:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {connectors.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.badgeColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-[#134c2c] mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-emerald-900 text-white text-center font-bold text-base md:text-lg tracking-wide shadow-md">
            ...into one unified circular ecosystem.
          </div>
        </div>
      </div>
    </section>
  );
}
