"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  AlertTriangle,
  Flame,
  Trash2,
  TrendingUp,
  RotateCcw,
  Sparkles,
  ZoomIn,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import { ImageLightbox } from "../common/ImageLightbox";

const challengeSteps = [
  {
    step: "01",
    title: "Massive Single-Use Plastic Volume",
    subtitle: "5.5M+ metric tonnes of lab plastic waste globally per year",
    desc: "Laboratories rely heavily on single-use pipette tips, falcon tubes, cell plates, and deep-well containers to preserve experiment sterility and sample purity.",
    type: "crisis",
    icon: Trash2,
  },
  {
    step: "02",
    title: "Over-Classification of Waste",
    subtitle: "Up to 80% of lab plastics are non-hazardous",
    desc: "Due to lack of segregated streams, clean non-hazardous consumables are routinely mixed into high-temperature incineration or clinical biohazard waste.",
    type: "crisis",
    icon: AlertTriangle,
  },
  {
    step: "03",
    title: "High-Temperature Incineration",
    subtitle: "Massive CO2 emissions & permanent resource destruction",
    desc: "Medical incineration burns high-grade virgin polymer resins, destroying valuable materials and driving heavy Scope 3 carbon footprints for scientific institutions.",
    type: "crisis",
    icon: Flame,
  },
  {
    step: "04",
    title: "Virgin Medical Polymers Lost",
    subtitle: "Premium ultra-clean PP and HDPE discarded after single use",
    desc: "Lab consumables are made from the world's highest-purity medical-grade polymers, yet they have one of the shortest operational lifespans of any plastic.",
    type: "crisis",
    icon: ShieldAlert,
  },
  {
    step: "05",
    title: "The Reloop Solution: Closed Loop",
    subtitle: "Safe segregation, decontamination & high-purity remanufacture",
    desc: "By establishing dedicated non-hazardous sorting, validated decontamination, and secondary compounding, these polymers return to life sciences.",
    type: "solution",
    icon: RotateCcw,
  },
];

export function ChallengesInfographic() {
  const [activeTab, setActiveTab] = useState<"interactive" | "image">("interactive");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="rounded-3xl overflow-hidden border border-orange-950/20 shadow-2xl bg-white">
        {/* Top Control Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#134c2c] via-[#0c2a19] to-[#134c2c] text-white flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-emerald-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#f88a0d]/20 border border-[#f88a0d]/40 flex items-center justify-center text-[#f88a0d]">
              <AlertTriangle size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-wide">
                The Linear Lab Plastic Crisis: Root Cause Analysis
              </h3>
              <p className="text-[11px] text-orange-200/70 hidden sm:block">
                From Lab Bench Waste to Missed Circular Recovery Opportunity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/30 p-1 rounded-full border border-emerald-800/60">
              <button
                onClick={() => setActiveTab("interactive")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeTab === "interactive"
                    ? "bg-[#f88a0d] text-white shadow-sm"
                    : "text-emerald-200/80 hover:text-white"
                }`}
              >
                Interactive Roadmap
              </button>
              <button
                onClick={() => setActiveTab("image")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeTab === "image"
                    ? "bg-[#2da021] text-white shadow-sm"
                    : "text-emerald-200/80 hover:text-white"
                }`}
              >
                Original Infographic
              </button>
            </div>

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
              {/* Linear vs Circular Contrast Banner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-red-950/10 border border-red-800/20 text-red-950 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <XCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-red-900 uppercase tracking-wide">
                      Traditional Linear Reality
                    </h4>
                    <p className="text-xs text-red-800/80 mt-1 leading-relaxed">
                      Take ➔ Make ➔ Use ➔ Incinerate. 100% loss of high-purity virgin polymer resins and heavy carbon penalties.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-800/30 text-[#134c2c] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#2da021] text-white flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#134c2c] uppercase tracking-wide">
                      Reloop Circular Future
                    </h4>
                    <p className="text-xs text-emerald-900/80 mt-1 leading-relaxed">
                      Segregate ➔ Decontaminate ➔ Compound ➔ Remanufacture. Continuous high-grade polymer circulation.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5-Step Crisis-to-Opportunity Progression */}
              <div className="space-y-3 mb-8">
                {challengeSteps.map((item, idx) => {
                  const Icon = item.icon;
                  const isSolution = item.type === "solution";
                  const isSelected = activeStep === idx;

                  return (
                    <motion.div
                      key={item.step}
                      onClick={() => setActiveStep(idx)}
                      whileHover={{ scale: 1.01 }}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                        isSelected
                          ? isSolution
                            ? "bg-emerald-950 text-white border-[#2da021] shadow-lg ring-2 ring-[#2da021]/30"
                            : "bg-stone-900 text-white border-[#f88a0d] shadow-lg ring-2 ring-[#f88a0d]/30"
                          : isSolution
                          ? "bg-emerald-50/70 border-emerald-200/80 text-[#134c2c] hover:border-[#2da021]"
                          : "bg-white border-gray-200 text-[#134c2c] hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-sm shadow-xs ${
                            isSelected
                              ? isSolution
                                ? "bg-[#2da021] text-white"
                                : "bg-[#f88a0d] text-white"
                              : isSolution
                              ? "bg-emerald-200/60 text-[#134c2c]"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item.step}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h5
                              className={`text-sm sm:text-base font-bold ${
                                isSelected ? "text-white" : "text-[#134c2c]"
                              }`}
                            >
                              {item.title}
                            </h5>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                isSolution
                                  ? "bg-[#2da021]/20 text-[#2da021]"
                                  : "bg-orange-500/20 text-[#f88a0d]"
                              }`}
                            >
                              {isSolution ? "The Solution" : "Linear Bottleneck"}
                            </span>
                          </div>
                          <p
                            className={`text-xs mt-0.5 font-medium ${
                              isSelected ? "text-stone-300" : "text-gray-500"
                            }`}
                          >
                            {item.subtitle}
                          </p>
                          <p
                            className={`text-xs mt-2 leading-relaxed max-w-3xl ${
                              isSelected ? "text-stone-200" : "text-gray-600"
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 self-end sm:self-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Key Metric Pills */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c2a19] text-white border border-emerald-800/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-emerald-800/40">
                  <div className="text-xl font-black text-[#f88a0d]">5.5M Tonnes</div>
                  <div className="text-xs text-emerald-200/70">Global Lab Plastic Generated Annually</div>
                </div>
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-emerald-800/40">
                  <div className="text-xl font-black text-red-400">80%+ Burned</div>
                  <div className="text-xs text-emerald-200/70">Non-Hazardous Waste Over-Incinerated</div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-black text-[#2da021]">100% Recoverable</div>
                  <div className="text-xs text-emerald-200/70">High-Purity Lab Polypropylene & HDPE</div>
                </div>
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
                src="/images/challenges-infographic.png"
                alt="The Challenge - Laboratory Plastic Waste Roadmap"
                fill
                unoptimized
                priority
                className="object-contain bg-white transition-transform duration-500 group-hover:scale-[1.01]"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/20 shadow-xl">
                  <ZoomIn size={16} className="text-[#f88a0d]" />
                  <span>Click to Zoom & Inspect in 4K</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="px-6 py-3 bg-stone-100/90 border-t border-gray-200/70 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-2">
          <span className="font-semibold text-[#134c2c]">
            Reloop Sciences • Single-Use Plastic Recovery Roadmap
          </span>
          <span className="text-[11px] text-gray-500">
            Addressing virgin polymer waste across research institutions
          </span>
        </div>
      </div>

      <ImageLightbox
        src="/images/challenges-infographic.png"
        alt="The Challenges Infographic"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="Laboratory Plastic Waste Challenges & The Circular Opportunity"
        badge="Waste Roadmap"
      />
    </div>
  );
}
