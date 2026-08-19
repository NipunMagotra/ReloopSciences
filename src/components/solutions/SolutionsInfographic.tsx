"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
  Factory,
  Boxes,
  ZoomIn,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  QrCode,
  LineChart,
} from "lucide-react";
import Image from "next/image";
import { ImageLightbox } from "../common/ImageLightbox";

const stages = [
  {
    num: "01",
    name: "Safe Segregation",
    icon: Boxes,
    subtitle: "At-Bench Sorting & Pre-Screening",
    desc: "Custom colour-coded bins deployed inside laboratories for non-hazardous, uninfected plastic consumables (pipette tips, racks, tubes, packaging).",
    color: "#2da021",
    tag: "Source Cleanliness",
  },
  {
    num: "02",
    name: "Decontamination",
    icon: ShieldCheck,
    subtitle: "Validated Sanitisation & Batch ID",
    desc: "Multi-stage sanitisation and validated wash protocols remove residual reagents, followed by QR-coded batch tracking for complete chain-of-custody.",
    color: "#0284c7",
    tag: "100% Bio-Safe",
  },
  {
    num: "03",
    name: "Optical Granulation",
    icon: Cpu,
    subtitle: "NIR Polymer Sorting & Flake Prep",
    desc: "Advanced Near-Infrared (NIR) spectroscopic separation isolates high-purity Polypropylene (PP) and HDPE fractions before shredding into uniform flakes.",
    color: "#8b5cf6",
    tag: "99.8% Polymer Purity",
  },
  {
    num: "04",
    name: "Purity Compounding",
    icon: RefreshCw,
    subtitle: "Melt Filtration & Pelletising",
    desc: "Extrusion with vacuum degassing and fine mesh melt filtration converts shredded flakes into high-grade secondary resin pellets matching technical specs.",
    color: "#f88a0d",
    tag: "Circular Resin",
  },
  {
    num: "05",
    name: "Circular Remanufacture",
    icon: Factory,
    subtitle: "Closed-Loop Scientific Products",
    desc: "Partner manufacturers use circular compounded pellets to produce new labware, packaging, and non-critical laboratory consumables.",
    color: "#134c2c",
    tag: "Closing the Loop",
  },
];

const enablers = [
  { icon: ShieldCheck, title: "Lab Compliance", desc: "Meets international bio-safety, autoclaving, and HSE standards." },
  { icon: QrCode, title: "Traceability Chain", desc: "Item-level lot provenance from research bench to secondary resin." },
  { icon: LineChart, title: "Scope 3 Reporting", desc: "Verified Life Cycle Assessment (LCA) environmental impact certs." },
  { icon: Factory, title: "Offtake Network", desc: "Direct integration with scientific consumable manufacturers." },
];

export function SolutionsInfographic() {
  const [activeTab, setActiveTab] = useState<"interactive" | "image">("interactive");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState(0);

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="rounded-3xl overflow-hidden border border-emerald-950/20 shadow-2xl bg-white">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-emerald-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#2da021]/20 border border-[#2da021]/40 flex items-center justify-center text-[#2da021]">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-wide">
                Our Approach & Solution: Complete 5-Stage Closed-Loop
              </h3>
              <p className="text-[11px] text-emerald-200/70 hidden sm:block">
                From Lab-Bench Recovery to Certified Circular Polymer Compounding
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
                Interactive Lifecycle
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
              {/* 5-Stage Stepper Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                {stages.map((stg, idx) => {
                  const Icon = stg.icon;
                  const isCurrent = selectedStage === idx;
                  return (
                    <button
                      key={stg.num}
                      onClick={() => setSelectedStage(idx)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                        isCurrent
                          ? "bg-[#0c2a19] text-white border-[#2da021] shadow-lg ring-2 ring-[#2da021]/40 -translate-y-1"
                          : "bg-white border-gray-200 text-[#134c2c] hover:border-emerald-300 hover:shadow-xs"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs font-black px-2 py-0.5 rounded-md ${
                              isCurrent ? "bg-[#2da021] text-white" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {stg.num}
                          </span>
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                              isCurrent ? "bg-white/10 text-white" : "bg-emerald-50 text-[#2da021]"
                            }`}
                          >
                            <Icon size={14} />
                          </div>
                        </div>
                        <h5
                          className={`text-xs font-bold leading-snug ${
                            isCurrent ? "text-white" : "text-[#134c2c]"
                          }`}
                        >
                          {stg.name}
                        </h5>
                      </div>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider mt-2.5 inline-block ${
                          isCurrent ? "text-[#2da021]" : "text-gray-400"
                        }`}
                      >
                        {stg.tag}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Hero Showcase */}
              <motion.div
                key={selectedStage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c2a19] to-[#134c2c] text-white border border-emerald-800/40 shadow-xl mb-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2da021]/15 blur-3xl pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#2da021] font-bold">
                      <span>Stage {stages[selectedStage].num} of 05</span>
                      <span>•</span>
                      <span>{stages[selectedStage].tag}</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {stages[selectedStage].name}: {stages[selectedStage].subtitle}
                    </h4>

                    <p className="text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
                      {stages[selectedStage].desc}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-2.5 p-4 rounded-2xl bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      Stage Verification Standards
                    </span>
                    <div className="flex items-center gap-2 text-xs text-emerald-100">
                      <CheckCircle2 size={14} className="text-[#2da021]" />
                      <span>Zero Hazardous Contamination</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-100">
                      <CheckCircle2 size={14} className="text-[#2da021]" />
                      <span>Validated Sterility Baseline</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-100">
                      <CheckCircle2 size={14} className="text-[#2da021]" />
                      <span>ISO Technical Resin Matching</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Core Enablers 4-Grid */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={16} className="text-[#2da021]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#134c2c]">
                    Foundational Infrastructure & Enablers
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {enablers.map((item) => {
                    const EnablerIcon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-950/5 text-[#2da021] flex items-center justify-center mb-2.5">
                          <EnablerIcon size={16} />
                        </div>
                        <h5 className="text-xs font-bold text-[#134c2c] mb-1">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
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
                src="/images/approach-solutions-infographic.png"
                alt="Our Approach & Solution - Reloop Sciences Circular Lifecycle"
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
            Reloop Sciences • 5-Stage Closed-Loop Architecture
          </span>
          <span className="text-[11px] text-gray-500">
            Certified closed-loop recovery for laboratory plastics
          </span>
        </div>
      </div>

      <ImageLightbox
        src="/images/approach-solutions-infographic.png"
        alt="Our Approach and Solution Infographic"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="5-Stage Circular Recovery Lifecycle & Infrastructure"
        badge="Approach Blueprint"
      />
    </div>
  );
}
