"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  TrendingUp,
  Trash2,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";

const objectives = [
  {
    title: "Improve sustainability performance",
    description: "Elevate eco-standards across laboratory operations and workflows.",
    icon: TrendingUp,
    color: "text-[#2da021]",
    bg: "bg-emerald-50",
  },
  {
    title: "Reduce waste",
    description: "Divert single-use plastic consumables away from landfills and incineration.",
    icon: Trash2,
    color: "text-[#f88a0d]",
    bg: "bg-orange-50",
  },
  {
    title: "Support ESG objectives",
    description: "Align research activities with global Environmental, Social & Governance frameworks.",
    icon: ShieldCheck,
    color: "text-[#2da021]",
    bg: "bg-emerald-50",
  },
  {
    title: "Understand environmental impact",
    description: "Gain clear visibility into consumption patterns and lifecycle emissions.",
    icon: BarChart3,
    color: "text-[#f88a0d]",
    bg: "bg-orange-50",
  },
  {
    title: "Participate in circular economy initiatives",
    description: "Active recovery and recycling pathways for valuable scientific polymers.",
    icon: RefreshCw,
    color: "text-[#2da021]",
    bg: "bg-emerald-50",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow block mb-3">The Challenge & Opportunity</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight mb-6">
            Why Reloop Sciences?
          </h2>
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-[#f88a0d] flex-shrink-0 mt-0.5">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#134c2c] text-base mb-1">
                Laboratories around the world face a unique challenge.
              </h4>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Single-use plastics play a critical role in scientific research, yet many materials ultimately enter disposal streams without opportunities for recovery or reuse.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-base md:text-lg font-medium">
            At the same time, research organisations are increasingly seeking ways to:
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {objectives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-offwhite border border-gray-100 hover:border-emerald-800/20 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-[#134c2c] text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0c2a19] text-white p-8 md:p-12 rounded-3xl border border-emerald-800/60 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f88a0d]">
              Collaborative Innovation
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-snug">
              Reloop Sciences was created to explore how these challenges can be addressed through collaboration, innovation, and practical implementation.
            </h3>
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
