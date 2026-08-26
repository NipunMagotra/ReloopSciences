"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trash2,
  Sparkles,
  RefreshCw,
  PackageCheck,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
} from "lucide-react";

interface StepDetail {
  id: number;
  stepNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badgeBg: string;
  color: string;
  cssColor: string;
  lightBg: string;
  borderColor: string;
  icon: React.ElementType;
  highlights: string[];
  metric: string;
  metricLabel: string;
}

const STEPS: StepDetail[] = [
  {
    id: 0,
    stepNumber: "01",
    title: "ReLoop Sciences Bins",
    shortDesc: "Segregated collection of non‑hazardous PP",
    fullDesc:
      "Dedicated, color-coded collection bins installed directly in partner laboratories. Researchers segregate uncontaminated polypropylene (pipette tips, racks, tubes, plates) at the source.",
    badgeBg: "bg-[#f88a0d]",
    color: "orange",
    cssColor: "#f88a0d",
    lightBg: "bg-amber-500/10",
    borderColor: "border-[#f88a0d]/40",
    icon: Trash2,
    highlights: [
      "Custom segregated lab bins provided on-site",
      "Strict non-hazardous PP classification protocol",
      "QR-tagged batch identification at lab origin",
    ],
    metric: "100%",
    metricLabel: "Source Segregated Clean PP",
  },
  {
    id: 1,
    stepNumber: "02",
    title: "Collection & Washing",
    shortDesc: "Clean, compliant material preparation",
    fullDesc:
      "Scheduled pickup by Reloop logistics followed by specialized, eco-friendly chemical washing and de-labeling processes to ensure pure polymer feedstock.",
    badgeBg: "bg-[#0284c7]",
    color: "blue",
    cssColor: "#0284c7",
    lightBg: "bg-sky-500/10",
    borderColor: "border-[#0284c7]/40",
    icon: Sparkles,
    highlights: [
      "Eco-efficient sanitization & label removal",
      "Chain-of-custody digital manifests",
      "Zero chemical residue verification",
    ],
    metric: "99.8%",
    metricLabel: "Polymer Purity Grade",
  },
  {
    id: 2,
    stepNumber: "03",
    title: "Recycling",
    shortDesc: "High‑quality PP pellets",
    fullDesc:
      "Advanced shredding, compounding, and extrusion into laboratory-grade recycled polypropylene (rPP) pellets with verified melt-flow index and mechanical integrity.",
    badgeBg: "bg-[#2da021]",
    color: "green",
    cssColor: "#2da021",
    lightBg: "bg-emerald-500/10",
    borderColor: "border-[#2da021]/40",
    icon: RefreshCw,
    highlights: [
      "Precision extrusion into high-spec rPP pellets",
      "Thermal and mechanical tensile stress testing",
      "Certified batch tracking for circular reuse",
    ],
    metric: "-70%",
    metricLabel: "Carbon Footprint Reduction",
  },
  {
    id: 3,
    stepNumber: "04",
    title: "Manufacturing",
    shortDesc: "New lab products made from recycled PP",
    fullDesc:
      "Recycled pellets are molded into brand-new laboratory essentials—such as pipette tip boxes, storage racks, and tube organizers—re-entering the scientific supply chain.",
    badgeBg: "bg-[#8b5cf6]",
    color: "purple",
    cssColor: "#8b5cf6",
    lightBg: "bg-purple-500/10",
    borderColor: "border-[#8b5cf6]/40",
    icon: PackageCheck,
    highlights: [
      "Precision injection molding of lab equipment",
      "Fully certified for durability and chemical resistance",
      "Delivered right back to research institutes",
    ],
    metric: "100%",
    metricLabel: "Closed-Loop Circularity",
  },
];

export function TwoCircularLoop() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-advance every 6 seconds when not paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = STEPS[activeStep];
  const CurrentIcon = current.icon;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  // Node positions in the circular layout (Top, Right, Bottom, Left)
  const nodePositions = [
    { top: "6%", left: "50%", transform: "translate(-50%, 0)" }, // 01 Top
    { top: "50%", left: "94%", transform: "translate(-100%, -50%)" }, // 02 Right
    { top: "94%", left: "50%", transform: "translate(-50%, -100%)" }, // 03 Bottom
    { top: "50%", left: "6%", transform: "translate(0, -50%)" }, // 04 Left
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      {/* ─── Step Pills / Navigation Tabs ────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => {
                setActiveStep(idx);
                setIsAutoPlaying(false);
              }}
              className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                isActive
                  ? "bg-white text-[#134c2c] shadow-lg border-emerald-900/20 scale-105"
                  : "bg-white/60 text-gray-600 hover:text-[#134c2c] hover:bg-white border-gray-200/80"
              }`}
              style={{
                borderColor: isActive ? step.cssColor : undefined,
              }}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white ${step.badgeBg}`}
              >
                {step.stepNumber}
              </span>
              <span>{step.title}</span>
              {isActive && (
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: step.cssColor }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ─── Main 2D Interactive Workspace ────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-emerald-950/10 shadow-xl shadow-emerald-950/5">
        {/* ─── Left Col: 2D Circular Interactive Diagram ──────────────── */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div
            className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-4 select-none"
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            {/* SVG Connecting Circular Arcs */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer faint circular guide */}
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke="#e2e8f0"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Animated active circular orbit ring */}
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke={current.cssColor}
                strokeWidth="3"
                strokeDasharray="16 12"
                strokeOpacity="0.6"
                className="animate-[spin_40s_linear_infinite]"
                style={{ transformOrigin: "200px 200px" }}
              />

              {/* Directional Flow Arrows between quadrants */}
              {/* Top to Right */}
              <path
                d="M 230 70 A 140 140 0 0 1 330 170"
                stroke="#f88a0d"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={activeStep === 0 ? 1 : 0.25}
              />
              {/* Right to Bottom */}
              <path
                d="M 330 230 A 140 140 0 0 1 230 330"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={activeStep === 1 ? 1 : 0.25}
              />
              {/* Bottom to Left */}
              <path
                d="M 170 330 A 140 140 0 0 1 70 230"
                stroke="#2da021"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={activeStep === 2 ? 1 : 0.25}
              />
              {/* Left to Top */}
              <path
                d="M 70 170 A 140 140 0 0 1 170 70"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={activeStep === 3 ? 1 : 0.25}
              />
            </svg>

            {/* Central Animated Core Emblem */}
            <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-[#0c2a19] via-[#134c2c] to-[#07190e] border-4 border-white shadow-2xl flex flex-col items-center justify-center text-white text-center p-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="text-[#f88a0d] mb-1"
              >
                <RefreshCw size={24} />
              </motion.div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#2da021]">
                Reloop
              </span>
              <span className="text-[9px] font-semibold text-white/80">
                Closed Loop
              </span>
            </div>

            {/* 4 Interactive 2D Circular Stage Nodes */}
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              const Icon = step.icon;
              const pos = nodePositions[idx];

              return (
                <motion.button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    transform: pos.transform,
                  }}
                  className={`z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-xl ${
                    isActive
                      ? "bg-white border-2 scale-110 shadow-2xl"
                      : "bg-white/90 hover:bg-white border border-gray-200 opacity-80 hover:opacity-100"
                  }`}
                  style={{
                    borderColor: isActive ? step.cssColor : "rgba(226, 232, 240, 0.9)",
                    boxShadow: isActive
                      ? `0 10px 25px -5px ${step.cssColor}40`
                      : undefined,
                  }}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold mb-0.5 shadow-sm ${step.badgeBg}`}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-black text-[#134c2c]">
                    {step.stepNumber}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Autoplay & Navigation Quick Bar */}
          <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-gray-500">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <Pause size={12} /> Auto-cycling
                </>
              ) : (
                <>
                  <Play size={12} /> Play Cycle
                </>
              )}
            </button>
            <span>•</span>
            <span>Click any stage node to explore</span>
          </div>
        </div>

        {/* ─── Right Col: Active Step Detail Card ────────────────────── */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`p-6 sm:p-8 rounded-3xl border-2 bg-gradient-to-br from-white via-white to-gray-50/60 shadow-lg space-y-6 ${current.borderColor}`}
            >
              {/* Header: Step Number & Title */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl text-white flex items-center justify-center flex-shrink-0 shadow-lg ${current.badgeBg}`}
                  >
                    <CurrentIcon size={28} />
                  </div>
                  <div>
                    <span
                      className="inline-block text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full text-white mb-1 shadow-xs"
                      style={{ backgroundColor: current.cssColor }}
                    >
                      Stage {current.stepNumber} of 04
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#134c2c]">
                      {current.title}
                    </h3>
                  </div>
                </div>

                {/* Key Metric Badge */}
                <div className="text-right hidden sm:block">
                  <div
                    className="text-2xl font-black"
                    style={{ color: current.cssColor }}
                  >
                    {current.metric}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 max-w-[100px]">
                    {current.metricLabel}
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {current.fullDesc}
              </p>

              {/* Highlights & Features */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block">
                  Key Specifications:
                </span>
                {current.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: current.cssColor }}
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Footer Controls: Prev / Next & Step Indicator */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveStep(i);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeStep
                          ? "w-7"
                          : "w-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                      style={{
                        backgroundColor:
                          i === activeStep ? current.cssColor : undefined,
                      }}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      handlePrev();
                      setIsAutoPlaying(false);
                    }}
                    className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    aria-label="Previous step"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => {
                      handleNext();
                      setIsAutoPlaying(false);
                    }}
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-white text-xs font-bold transition-all duration-300 shadow-md hover:scale-105"
                    style={{ backgroundColor: current.cssColor }}
                  >
                    Next Stage
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
