"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Boxes,
  ShieldCheck,
  Recycle,
  Factory,
  ZoomIn,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import Image from "next/image";
import { ImageLightbox } from "../common/ImageLightbox";

const loopStages = [
  {
    step: "01",
    title: "Collection & Segregation",
    subtitle: "At-Bench Lab Consumable Sorting",
    desc: "Laboratories separate non-hazardous single-use plastics (pipette tips, racks, plates) into Reloop collection systems.",
    icon: Boxes,
    color: "#2da021",
    stat: "Zero Cross-Contamination",
  },
  {
    step: "02",
    title: "Decontamination & Granulation",
    subtitle: "Validated Sanitisation & Shredding",
    desc: "Rigorous biological decontamination followed by optical NIR polymer grading to isolate virgin-grade polypropylene and HDPE.",
    icon: ShieldCheck,
    color: "#0284c7",
    stat: "99.8% Purity Yield",
  },
  {
    step: "03",
    title: "Secondary Resin Compounding",
    subtitle: "Melt Filtration & Pelletisation",
    desc: "Converting recycled flakes into high-purity, uniform polymer resin pellets formulated specifically for technical labware moulding.",
    icon: Recycle,
    color: "#8b5cf6",
    stat: "Scope 3 Carbon Offset",
  },
  {
    step: "04",
    title: "Remanufacturing Labware",
    subtitle: "Closing the Scientific Loop",
    desc: "Secondary resins are moulded into new lab consumables, packaging, and equipment components, completing the circular lifecycle.",
    icon: Factory,
    color: "#f88a0d",
    stat: "True Closed Loop",
  },
];

export function CircularInfographic() {
  const [activeTab, setActiveTab] = useState<"interactive" | "image">("interactive");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div className="w-full">
      <div className="rounded-3xl overflow-hidden border border-emerald-950/20 shadow-2xl bg-white">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-emerald-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#2da021]/20 border border-[#2da021]/40 flex items-center justify-center text-[#2da021]">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-wide">
                4-Step Closed-Loop Circular Model
              </h3>
              <p className="text-[11px] text-emerald-200/70 hidden sm:block">
                Continuous Laboratory Polymer Recovery Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
              {/* 4 Loop Steps Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {loopStages.map((st, idx) => {
                  const Icon = st.icon;
                  const isSelected = selectedStep === idx;
                  return (
                    <div
                      key={st.step}
                      onClick={() => setSelectedStep(idx)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#0c2a19] text-white border-[#2da021] shadow-lg ring-2 ring-[#2da021]/30 -translate-y-1"
                          : "bg-white border-gray-200/80 text-[#134c2c] hover:border-emerald-300 hover:shadow-xs"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-xs font-black px-2 py-0.5 rounded-md ${
                              isSelected ? "bg-[#2da021] text-white" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            Step {st.step}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected ? "bg-white/10 text-white" : "bg-emerald-50 text-[#2da021]"
                            }`}
                          >
                            <Icon size={16} />
                          </div>
                        </div>

                        <h4
                          className={`text-sm font-bold leading-snug mb-1 ${
                            isSelected ? "text-white" : "text-[#134c2c]"
                          }`}
                        >
                          {st.title}
                        </h4>
                        <p
                          className={`text-[11px] font-semibold mb-2 ${
                            isSelected ? "text-[#f88a0d]" : "text-emerald-700"
                          }`}
                        >
                          {st.subtitle}
                        </p>
                        <p
                          className={`text-xs leading-relaxed ${
                            isSelected ? "text-emerald-100/80" : "text-gray-600"
                          }`}
                        >
                          {st.desc}
                        </p>
                      </div>

                      <div
                        className={`mt-4 pt-3 border-t text-[10px] font-bold uppercase tracking-wider flex items-center justify-between ${
                          isSelected ? "border-emerald-800/60 text-[#2da021]" : "border-gray-100 text-gray-500"
                        }`}
                      >
                        <span>Outcome:</span>
                        <span>{st.stat}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Loop Benefit Highlights Banner */}
              <div className="p-5 rounded-2xl bg-[#0c2a19] text-white border border-emerald-800/40 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-2 border-b md:border-b-0 md:border-r border-emerald-800/40">
                  <div className="text-xl font-black text-[#2da021]">Zero Downcycling</div>
                  <div className="text-xs text-emerald-200/70">Maintains high polymer technical grade</div>
                </div>
                <div className="p-2 border-b md:border-b-0 md:border-r border-emerald-800/40">
                  <div className="text-xl font-black text-[#f88a0d]">Up to 70% CO2e Cut</div>
                  <div className="text-xs text-emerald-200/70">Lower carbon footprint vs virgin resin</div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-black text-[#0284c7]">100% Traceable</div>
                  <div className="text-xs text-emerald-200/70">Batch-level digital verification</div>
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
                src="/images/circular-model-infographic.jpg"
                alt="Closing the Loop - Reloop Sciences Circular Model"
                fill
                unoptimized
                priority
                className="object-contain bg-[#f8f7f4] transition-transform duration-500 group-hover:scale-[1.01]"
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
            Reloop Sciences • Closed-Loop Life Sciences Model
          </span>
          <span className="text-[11px] text-gray-500">
            Recovering high-grade PP & HDPE scientific consumables
          </span>
        </div>
      </div>

      <ImageLightbox
        src="/images/circular-model-infographic.jpg"
        alt="Circular Model Infographic"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="4-Step Circular Loop & Recovery Architecture"
        badge="Circular Blueprint"
      />
    </div>
  );
}
