"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ClipboardList,
  Boxes,
  GraduationCap,
  Truck,
  Recycle,
  Award,
  ZoomIn,
  CheckCircle2,
  Calendar,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import { ImageLightbox } from "../common/ImageLightbox";

const pilotSteps = [
  {
    step: "01",
    name: "Lab Audit & Baseline",
    icon: ClipboardList,
    timeframe: "Week 1",
    desc: "Evaluate current lab plastic waste volumes, stream segregation workflows, and polymer types (PP, HDPE, PS).",
    deliverable: "Custom Pilot Blueprint",
    color: "#2da021",
  },
  {
    step: "02",
    name: "Bin Deployment",
    icon: Boxes,
    timeframe: "Week 2",
    desc: "Install dedicated, space-efficient, colour-coded collection receptacles and visual bench sorting guides.",
    deliverable: "Turnkey Collection Hardware",
    color: "#0284c7",
  },
  {
    step: "03",
    name: "Staff Briefing",
    icon: GraduationCap,
    timeframe: "Week 2-3",
    desc: "10-minute researcher onboarding covering non-hazardous qualification, bin usage, and safety compliance.",
    deliverable: "Lab Training Completion",
    color: "#8b5cf6",
  },
  {
    step: "04",
    name: "Traceable Collection",
    icon: Truck,
    timeframe: "Weeks 3-10",
    desc: "Scheduled, compliant collection visits with QR-coded batch tracking for complete chain-of-custody.",
    deliverable: "Digital Audit Trail",
    color: "#f88a0d",
  },
  {
    step: "05",
    name: "Circular Compounding",
    icon: Recycle,
    timeframe: "Weeks 6-11",
    desc: "Validated decontamination, optical sorting, and granulation into high-purity secondary polymer pellets.",
    deliverable: "Circular Resin Yield",
    color: "#10b981",
  },
  {
    step: "06",
    name: "Impact Certification",
    icon: Award,
    timeframe: "Week 12",
    desc: "Comprehensive sustainability certificate with verified CO2e savings and total kilograms diverted from incinerators.",
    deliverable: "Scope 3 Impact Certificate",
    color: "#134c2c",
  },
];

export function PilotInfographic() {
  const [activeTab, setActiveTab] = useState<"interactive" | "image">("interactive");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div className="mt-14 max-w-5xl mx-auto">
      <div className="rounded-3xl overflow-hidden border border-emerald-950/20 shadow-2xl bg-white">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-emerald-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#2da021]/20 border border-[#2da021]/40 flex items-center justify-center text-[#2da021]">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-wide">
                Pilot Programme: 6-Stage Implementation Roadmap
              </h3>
              <p className="text-[11px] text-emerald-200/70 hidden sm:block">
                Structured 12-Week Methodology from Lab Audit to Verified ESG Impact
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
                Interactive Timeline
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
              {/* 6 Steps Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {pilotSteps.map((st, idx) => {
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
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-black px-2 py-0.5 rounded-md ${
                                isSelected ? "bg-[#2da021] text-white" : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              Step {st.step}
                            </span>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider ${
                                isSelected ? "text-[#f88a0d]" : "text-gray-500"
                              }`}
                            >
                              {st.timeframe}
                            </span>
                          </div>
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                              isSelected ? "bg-white/10 text-white" : "bg-emerald-50 text-[#2da021]"
                            }`}
                          >
                            <Icon size={15} />
                          </div>
                        </div>

                        <h4
                          className={`text-sm font-bold leading-snug mb-1.5 ${
                            isSelected ? "text-white" : "text-[#134c2c]"
                          }`}
                        >
                          {st.name}
                        </h4>
                        <p
                          className={`text-xs leading-relaxed ${
                            isSelected ? "text-emerald-100/80" : "text-gray-600"
                          }`}
                        >
                          {st.desc}
                        </p>
                      </div>

                      <div
                        className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                          isSelected
                            ? "border-emerald-800/60 text-[#2da021]"
                            : "border-gray-100 text-gray-500"
                        }`}
                      >
                        <span>Deliverable:</span>
                        <span className="font-bold">{st.deliverable}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pilot Programme Guarantees Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0c2a19] text-white border border-emerald-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f88a0d]">
                    Zero Friction Implementation
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Designed to seamlessly integrate with your existing lab workflow
                  </h4>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-200">
                    ✓ No lab disruption
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-200">
                    ✓ Full safety compliance
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-200">
                    ✓ Scope 3 ESG data
                  </span>
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
                src="/images/pilot-programme-infographic.png"
                alt="Reloop Sciences Pilot Programme 6-Step Methodology and Expected Impact"
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
            Reloop Sciences • 12-Week Pilot Programme Framework
          </span>
          <span className="text-[11px] text-gray-500">
            Open for participation across UK & European research institutes
          </span>
        </div>
      </div>

      <ImageLightbox
        src="/images/pilot-programme-infographic.png"
        alt="Pilot Programme Infographic"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="12-Week Pilot Programme 6-Step Methodology & Measurable Impact"
        badge="Pilot Roadmap"
      />
    </div>
  );
}
