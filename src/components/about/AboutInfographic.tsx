"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Recycle,
  BarChart3,
  Users,
  ZoomIn,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { ImageLightbox } from "../common/ImageLightbox";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    tagline: "Closing the loop on scientific plastics",
    description:
      "To pioneer practical, compliant, and scalable circular recovery pathways for high-grade laboratory polymers, transforming single-use scientific waste into high-value secondary resources.",
    color: "#2da021",
    bgGradient: "from-emerald-950/60 to-[#0c2a19]",
    border: "border-[#2da021]/30",
    badge: "Mission Focus",
  },
  {
    icon: Eye,
    title: "Our Vision",
    tagline: "Zero-waste life sciences ecosystem",
    description:
      "A global scientific research community where essential single-use plastics are sustainably recovered, remanufactured, and looped indefinitely without compromising safety or data integrity.",
    color: "#f88a0d",
    bgGradient: "from-orange-950/60 to-[#0c2a19]",
    border: "border-[#f88a0d]/30",
    badge: "Vision 2030",
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Scientific Integrity & Safety",
    desc: "Rigorous decontamination validation, risk protocols, and uncompromising biological safety standards.",
    badge: "Safety First",
  },
  {
    icon: Recycle,
    title: "True Closed-Loop Circularity",
    desc: "High-grade polymer sorting and compounding into lab-grade resins rather than low-value downcycling.",
    badge: "Circular Tech",
  },
  {
    icon: BarChart3,
    title: "Verified Traceability & ESG",
    desc: "Complete audit trails and independently verified Scope 3 GHG reduction data for research institutes.",
    badge: "Audit Ready",
  },
  {
    icon: Users,
    title: "Collaborative Partnerships",
    desc: "Uniting research laboratories, sustainability managers, recyclers, and manufacturers nationwide.",
    badge: "Ecosystem",
  },
];

const keyStats = [
  { value: "Up to 70%", label: "CO2e Reduction vs Virgin Plastic", icon: "🌱" },
  { value: "100%", label: "Traceable Batch Chain-of-Custody", icon: "🔍" },
  { value: "PP & HDPE", label: "Specialised High-Purity Polymer Streams", icon: "♳" },
  { value: "ISO Aligned", label: "Clean Decontamination Protocols", icon: "🛡️" },
];

export function AboutInfographic() {
  const [activeTab, setActiveTab] = useState<"interactive" | "image">("interactive");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      {/* Outer Card Container */}
      <div className="rounded-3xl overflow-hidden border border-emerald-950/20 shadow-2xl bg-white">
        {/* Top Control Bar with Mode Switcher */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-emerald-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#f88a0d]/20 border border-[#f88a0d]/40 flex items-center justify-center text-[#f88a0d]">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-wide">
                About Reloop Sciences: Strategic Overview
              </h3>
              <p className="text-[11px] text-emerald-200/70 hidden sm:block">
                Purpose, Mission, Vision, Values & Measurable Impact
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-black/30 p-1 rounded-full border border-emerald-800/60">
              <button
                onClick={() => setActiveTab("interactive")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeTab === "interactive"
                    ? "bg-[#2da021] text-white shadow-sm"
                    : "text-emerald-200/80 hover:text-white"
                }`}
              >
                Interactive
              </button>
              <button
                onClick={() => setActiveTab("image")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeTab === "image"
                    ? "bg-[#f88a0d] text-white shadow-sm"
                    : "text-emerald-200/80 hover:text-white"
                }`}
              >
                Original Infographic
              </button>
            </div>

            {/* Lightbox Zoom Trigger */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white transition-colors"
              title="Inspect Full Resolution"
            >
              <ZoomIn size={13} />
              <span className="hidden md:inline">Full 4K</span>
            </button>
          </div>
        </div>

        {/* View Mode Content */}
        <AnimatePresence mode="wait">
          {activeTab === "interactive" ? (
            <motion.div
              key="interactive-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 md:p-10 bg-gradient-to-b from-stone-50 via-white to-stone-50 text-[#134c2c]"
            >
              {/* Mission & Vision Twin Hero Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${item.bgGradient} text-white border ${item.border} shadow-lg overflow-hidden flex flex-col justify-between`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20 bg-white" />
                      
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                            style={{ backgroundColor: item.color }}
                          >
                            <Icon size={20} className="text-white" />
                          </div>
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 border border-white/20"
                            style={{ color: item.color === "#2da021" ? "#4ade80" : "#fb923c" }}
                          >
                            {item.badge}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold tracking-tight mb-1 text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs font-semibold text-emerald-200/90 mb-3">
                          {item.tagline}
                        </p>
                        <p className="text-sm text-emerald-100/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-bold text-white/90">
                        <CheckCircle2 size={14} className="text-[#2da021]" />
                        <span>Core Reloop Commitment</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* 4 Core Pillars Grid */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={16} className="text-[#2da021]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#134c2c]">
                    Our 4 Core Operating Principles
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {coreValues.map((val) => {
                    const ValIcon = val.icon;
                    return (
                      <div
                        key={val.title}
                        className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-[#2da021]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-950/5 border border-emerald-800/10 text-[#2da021] flex items-center justify-center">
                              <ValIcon size={16} />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                              {val.badge}
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-[#134c2c] mb-1.5 leading-snug">
                            {val.title}
                          </h5>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {val.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Impact Stat Badges */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c2a19] text-white border border-emerald-800/40 grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyStats.map((st) => (
                  <div key={st.label} className="text-center p-2">
                    <span className="text-xl sm:text-2xl mb-1 block">{st.icon}</span>
                    <div className="text-lg sm:text-xl font-black text-[#2da021] tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-[11px] text-emerald-200/70 font-medium leading-tight mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="image-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[16/9] w-full bg-white group cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src="/images/about-us-infographic.png"
                alt="About Reloop Sciences - Building a Circular Future for Laboratories"
                fill
                unoptimized
                priority
                className="object-contain bg-white transition-transform duration-500 group-hover:scale-[1.01]"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              
              {/* Click to Zoom Overlay Hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/20 shadow-xl">
                  <ZoomIn size={16} className="text-[#f88a0d]" />
                  <span>Click to Zoom & Inspect in 4K</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Sub-Banner */}
        <div className="px-6 py-3 bg-stone-100/90 border-t border-gray-200/70 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-2">
          <span className="font-semibold text-[#134c2c]">
            Reloop Sciences • Circular Economy for Life Sciences
          </span>
          <span className="text-[11px] text-gray-500">
            Validated methodology for laboratory plastic diversion
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        src="/images/about-us-infographic.png"
        alt="About Reloop Sciences Infographic"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="About Reloop Sciences: Mission, Vision, Values & Architecture"
        badge="Strategic Blueprint"
      />
    </div>
  );
}
