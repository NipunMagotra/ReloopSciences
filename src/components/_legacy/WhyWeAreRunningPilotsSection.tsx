"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const foundationPoints = [
  "What laboratories generate",
  "What recyclers can process",
  "What manufacturers can use",
  "What sustainability metrics matter most",
];

export function WhyWeAreRunningPilotsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="eyebrow block">Our Rationale</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Why We&apos;re Running Pilots
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            Before scalable solutions can be developed, it is important to understand:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {foundationPoints.map((point, idx) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-offwhite border border-gray-100 flex items-start gap-4 hover:border-[#2da021]/30 transition-all duration-300 group"
            >
              <CheckCircle2 size={24} className="text-[#2da021] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#134c2c] text-base leading-snug">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-emerald-950/5 border border-emerald-800/10 text-center max-w-2xl mx-auto text-emerald-900 font-bold text-base md:text-lg">
          The pilot programme will help build this foundation.
        </div>
      </div>
    </section>
  );
}
