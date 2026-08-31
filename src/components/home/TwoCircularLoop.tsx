"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trash2,
  Droplets,
  Recycle,
  Factory,
  CircleCheck,
  Leaf,
  ChevronLeft,
  ArrowRight,
  Pause,
  Play,
  RotateCw,
} from "lucide-react";

interface StepDetail {
  id: number;
  stepNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
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
      "Scheduled pickup by ReLoop logistics followed by specialized, eco-friendly chemical washing and de-labeling processes to ensure pure polymer feedstock.",
    icon: Droplets,
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
    icon: Recycle,
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
    icon: Factory,
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

  // Auto-advance every 6.5s when not paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 6500);
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

  // 4 Quadrant Positions on a 500x500 square: Top, Right, Bottom, Left
  const nodePositions = [
    { top: "3%", left: "50%", transform: "translate(-50%, 0)" }, // 01 Top (Bins)
    { top: "50%", left: "97%", transform: "translate(-100%, -50%)" }, // 02 Right (Washing)
    { top: "97%", left: "50%", transform: "translate(-50%, -100%)" }, // 03 Bottom (Recycling)
    { top: "50%", left: "3%", transform: "translate(0, -50%)" }, // 04 Left (Manufacturing)
  ];

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* ─── Process Journey Navigation ────────────────────── */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep;
            const StepIcon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlaying(false);
                }}
                className={`group relative text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-white border-[#2da021] shadow-lg shadow-[#2da021]/15 ring-2 ring-[#2da021]/20 scale-[1.02]"
                    : "bg-white/60 hover:bg-white border-gray-200/80 hover:border-gray-300/90 shadow-xs"
                }`}
              >
                {/* Header row in card */}
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                      isActive
                        ? "bg-[#2da021] text-white shadow-sm"
                        : isCompleted
                        ? "bg-[#134c2c]/12 text-[#134c2c]"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step.stepNumber}
                  </span>

                  <StepIcon
                    size={18}
                    strokeWidth={2}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#2da021]"
                        : "text-[#134c2c]/50 group-hover:text-[#134c2c]"
                    }`}
                  />
                </div>

                {/* Stage Title */}
                <div
                  className={`text-xs sm:text-sm font-bold transition-colors leading-snug ${
                    isActive
                      ? "text-[#134c2c]"
                      : "text-gray-600 group-hover:text-[#134c2c]"
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Two-Column Interactive Layout ──────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-center">
        {/* ─── Left Col: Enlarged 2D Circular Interactive Diagram ──── */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div
            className="relative w-full max-w-[480px] sm:max-w-[500px] xl:max-w-[520px] aspect-square flex items-center justify-center p-3 select-none"
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            {/* SVG Circular Guide and Closed-Loop Flows */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2da021" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#134c2c" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Main Outer Circular Orbit Track */}
              <circle
                cx="250"
                cy="250"
                r="180"
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />

              {/* Animated Closed-Loop Active Path */}
              <circle
                cx="250"
                cy="250"
                r="180"
                stroke="url(#orbitGlow)"
                strokeWidth="3.5"
                strokeDasharray="24 16"
                strokeLinecap="round"
                className="animate-[spin_35s_linear_infinite]"
                style={{ transformOrigin: "250px 250px" }}
              />

              {/* 4 Clockwise Flow Arcs */}
              {/* Arc 1: Top -> Right (01 -> 02) */}
              <path
                d="M 290 85 A 180 180 0 0 1 415 210"
                stroke="#2da021"
                strokeWidth="3"
                strokeLinecap="round"
                opacity={activeStep === 0 ? 1 : 0.25}
                className="transition-opacity duration-300"
              />
              {/* Arc 2: Right -> Bottom (02 -> 03) */}
              <path
                d="M 415 290 A 180 180 0 0 1 290 415"
                stroke="#2da021"
                strokeWidth="3"
                strokeLinecap="round"
                opacity={activeStep === 1 ? 1 : 0.25}
                className="transition-opacity duration-300"
              />
              {/* Arc 3: Bottom -> Left (03 -> 04) */}
              <path
                d="M 210 415 A 180 180 0 0 1 85 290"
                stroke="#2da021"
                strokeWidth="3"
                strokeLinecap="round"
                opacity={activeStep === 2 ? 1 : 0.25}
                className="transition-opacity duration-300"
              />
              {/* Arc 4: Left -> Top (04 -> 01) */}
              <path
                d="M 85 210 A 180 180 0 0 1 210 85"
                stroke="#2da021"
                strokeWidth="3"
                strokeLinecap="round"
                opacity={activeStep === 3 ? 1 : 0.25}
                className="transition-opacity duration-300"
              />
            </svg>

            {/* Central ReLoop Closed-Loop Emblem */}
            <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#0c2a19] via-[#134c2c] to-[#07190e] border-4 border-white shadow-2xl flex flex-col items-center justify-center text-white text-center p-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-[#f88a0d] mb-1.5"
              >
                <RotateCw size={26} strokeWidth={2} />
              </motion.div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#2da021]">
                ReLoop
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/85">
                Closed Loop
              </span>
            </div>

            {/* 4 Interactive Process Nodes */}
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              const Icon = step.icon;
              const pos = nodePositions[idx];

              return (
                <div
                  key={step.id}
                  className="z-20"
                  style={{
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    transform: pos.transform,
                  }}
                >
                  <button
                    onClick={() => {
                      setActiveStep(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white border-2 border-[#2da021] scale-110 shadow-2xl shadow-[#2da021]/30"
                        : "bg-white/90 hover:bg-white border border-gray-200/90 hover:border-gray-300 opacity-85 hover:opacity-100 hover:scale-105 shadow-md shadow-[#134c2c]/5"
                    }`}
                  >
                    {/* Glowing highlight aura for active node */}
                    {isActive && (
                      <span className="absolute -inset-1.5 rounded-2xl md:rounded-3xl bg-[#2da021]/20 blur-md -z-10 animate-pulse" />
                    )}

                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-1 transition-all duration-300 ${
                        isActive
                          ? "bg-[#2da021] text-white shadow-md shadow-[#2da021]/40"
                          : "bg-[#134c2c]/8 text-[#134c2c]"
                      }`}
                    >
                      <Icon size={isActive ? 22 : 20} strokeWidth={2} />
                    </div>

                    <span
                      className={`text-xs font-black tracking-tight ${
                        isActive ? "text-[#134c2c]" : "text-gray-500"
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Autoplay & Interaction Helper */}
          <div className="mt-6 flex items-center gap-3 text-xs font-medium text-gray-500">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 hover:border-[#2da021] hover:text-[#2da021] text-gray-700 transition-colors shadow-xs"
            >
              {isAutoPlaying ? (
                <>
                  <Pause size={12} strokeWidth={2} className="text-[#2da021]" /> Auto-cycling
                </>
              ) : (
                <>
                  <Play size={12} strokeWidth={2} className="text-[#f88a0d]" /> Resume Cycle
                </>
              )}
            </button>
            <span>•</span>
            <span>Click any node to navigate</span>
          </div>
        </div>

        {/* ─── Right Col: Editorial Active Stage Panel ────────── */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-gray-200/80 shadow-xl shadow-[#134c2c]/5 space-y-7 relative"
            >
              {/* Header: Stage Badge + Main Title + Metric */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-2 border-b border-gray-100">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full text-[#2da021] bg-[#2da021]/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2da021]" />
                    Stage {current.stepNumber} of 04
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2da021]/10 text-[#2da021] flex items-center justify-center shrink-0">
                      <CurrentIcon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#134c2c] tracking-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>

                {/* Key Metric Highlight */}
                <div className="sm:text-right bg-[#f8f7f4] sm:bg-transparent p-3.5 sm:p-0 rounded-2xl shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 text-3xl sm:text-4xl font-black text-[#2da021] tracking-tight">
                    <span>{current.metric}</span>
                    <Leaf size={20} strokeWidth={2} className="text-[#2da021]/80" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#134c2c]/75 max-w-[140px]">
                    {current.metricLabel}
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-base sm:text-lg text-[#134c2c]/85 font-normal leading-relaxed">
                {current.fullDesc}
              </p>

              {/* Key Specifications */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#134c2c] block">
                  Key Specifications:
                </span>
                <div className="space-y-2.5">
                  {current.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#134c2c]/90 font-medium"
                    >
                      <CircleCheck
                        size={18}
                        strokeWidth={2}
                        className="mt-0.5 flex-shrink-0 text-[#2da021]"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Process Controls */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                {/* 4-Step Progress Dots */}
                <div className="flex items-center gap-2">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveStep(i);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === activeStep
                          ? "w-8 bg-[#2da021]"
                          : "w-2.5 bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      handlePrev();
                      setIsAutoPlaying(false);
                    }}
                    className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#134c2c] transition-colors cursor-pointer"
                    aria-label="Previous stage"
                  >
                    <ChevronLeft size={18} strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => {
                      handleNext();
                      setIsAutoPlaying(false);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#134c2c] hover:bg-[#1b623b] text-white text-xs font-bold transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Next Stage</span>
                    <ArrowRight size={16} strokeWidth={2} />
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
