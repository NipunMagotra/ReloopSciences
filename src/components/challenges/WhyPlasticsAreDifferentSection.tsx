"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ShieldAlert,
  Award,
  CheckCircle,
  Search,
  FileCheck2,
  ArrowUpRight,
} from "lucide-react";

const requirements = [
  { label: "Safety", icon: ShieldAlert },
  { label: "Quality", icon: Award },
  { label: "Sterility", icon: CheckCircle },
  { label: "Traceability", icon: Search },
  { label: "Regulatory compliance", icon: FileCheck2 },
];

export function WhyPlasticsAreDifferentSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-offwhite relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow block">Unique Complexity</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Why Laboratory Plastics Are Different
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Laboratory environments present unique challenges compared with conventional recycling streams.
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#f88a0d] mb-6">
            Scientific materials must meet strict requirements for:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {requirements.map((req, idx) => {
              const Icon = req.icon;
              return (
                <motion.div
                  key={req.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 rounded-2xl bg-offwhite border border-gray-100 text-center flex flex-col items-center justify-center gap-3 hover:border-[#2da021]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2da021] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <span className="font-bold text-[#134c2c] text-sm">
                    {req.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Concluding & CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0c2a19] text-white p-8 md:p-12 rounded-3xl border border-emerald-800/60 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f88a0d]">
              Bridging the Gap
            </span>
            <p className="text-emerald-100/90 text-base md:text-lg leading-relaxed">
              As a result, laboratory plastics are frequently treated differently from typical commercial plastic waste. This complexity can make it difficult to identify suitable recovery and recycling pathways.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white font-medium text-sm transition-all duration-300 shadow-xl flex-shrink-0 group relative z-10"
          >
            Start a Conversation
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
