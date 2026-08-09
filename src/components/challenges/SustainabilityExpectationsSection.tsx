"use client";

import { motion } from "motion/react";
import {
  Building2,
  Trash2,
  Zap,
  ShieldCheck,
  Target,
  RefreshCw,
} from "lucide-react";

const focusAreas = [
  { title: "Reducing waste", icon: Trash2 },
  { title: "Improving resource efficiency", icon: Zap },
  { title: "Supporting ESG objectives", icon: ShieldCheck },
  { title: "Meeting environmental targets", icon: Target },
  { title: "Advancing circular economy initiatives", icon: RefreshCw },
];

export function SustainabilityExpectationsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow block">Industry Drivers</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Growing Sustainability Expectations
          </h2>
          <div className="p-6 rounded-2xl bg-emerald-950/5 border border-emerald-800/10 flex items-start gap-4">
            <Building2 size={24} className="text-[#2da021] flex-shrink-0 mt-1" />
            <p className="text-gray-700 text-base leading-relaxed">
              Universities, research institutes, biotechnology companies, and pharmaceutical organisations are increasingly expected to demonstrate their commitment to sustainability.
            </p>
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="space-y-4 mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#f88a0d]">
            Many organisations are now focused on:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-offwhite border border-gray-100 flex items-center gap-4 hover:border-[#2da021]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2da021] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-bold text-[#134c2c] text-sm md:text-base">
                    {area.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Concluding Box */}
        <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-950 text-sm md:text-base font-medium">
          Despite these goals, laboratories often have limited options for managing plastic materials beyond traditional disposal methods.
        </div>
      </div>
    </section>
  );
}
