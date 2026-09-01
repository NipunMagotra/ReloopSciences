"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FlaskConical,
  Trash2,
  Factory,
  Globe,
  ArrowRight,
  ArrowDown,
  Leaf,
} from "lucide-react";

export interface ChallengeStepItem {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  iconColor: string;
  ringColor: string;
  badgeBg: string;
}

const CHALLENGE_STEPS: ChallengeStepItem[] = [
  {
    number: "01",
    title: "LAB PLASTIC WASTE",
    description: "Single-use plastics used every day in laboratories.",
    image: "/images/challenge-step-01.jpg",
    alt: "Single-use laboratory plastics such as pipette tips, tubes, and multiwell plates",
    icon: FlaskConical,
    iconColor: "#2da021",
    ringColor: "border-[#2da021]/35 hover:border-[#2da021]",
    badgeBg: "bg-[#2da021]",
  },
  {
    number: "02",
    title: "LINEAR DISPOSAL",
    description: "Most lab plastics are discarded after a single use.",
    image: "/images/challenge-step-02.jpg",
    alt: "Bag and bin containing discarded single-use laboratory plastics",
    icon: Trash2,
    iconColor: "#0284c7",
    ringColor: "border-[#0284c7]/35 hover:border-[#0284c7]",
    badgeBg: "bg-[#0284c7]",
  },
  {
    number: "03",
    title: "HARMFUL IMPACT",
    description: "Incineration and improper disposal lead to pollution and resource loss.",
    image: "/images/challenge-step-03.jpg",
    alt: "Industrial pollution, emissions and waste incineration from discarded plastics",
    icon: Factory,
    iconColor: "#ea580c",
    ringColor: "border-[#ea580c]/35 hover:border-[#ea580c]",
    badgeBg: "bg-[#ea580c]",
  },
  {
    number: "04",
    title: "LOST OPPORTUNITY",
    description: "Valuable resources are wasted instead of being recycled and reused.",
    image: "/images/challenge-step-04.jpg",
    alt: "Plastic pollution and discarded materials in the natural environment",
    icon: Globe,
    iconColor: "#134c2c",
    ringColor: "border-[#134c2c]/35 hover:border-[#134c2c]",
    badgeBg: "bg-[#134c2c]",
  },
];

/* ─── 1. Individual Challenge Step Component ─────────────────────────── */
export function ChallengeStep({
  step,
  index,
  isLast,
}: {
  step: ChallengeStepItem;
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="flex-1 flex flex-col items-center relative group min-w-0">
      {/* ── Circular Visual Composition ────────────────────────── */}
      <div className="relative mb-5 sm:mb-6">
        {/* Dominant Circular Image Container */}
        <div
          className={`relative w-[190px] h-[190px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[225px] lg:h-[225px] xl:w-[248px] xl:h-[248px] rounded-full overflow-hidden border-[3px] ${step.ringColor} shadow-[0_8px_25px_rgba(0,0,0,0.06)] bg-slate-100 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]`}
        >
          <Image
            src={step.image}
            alt={step.alt}
            fill
            sizes="(max-width: 640px) 190px, (max-width: 1024px) 220px, 250px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 2}
          />
          {/* Subtle Ambient Vignette Overlay */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5 pointer-events-none" />
        </div>

        {/* Top-Center Overlapping Icon Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Icon size={20} style={{ color: step.iconColor }} strokeWidth={2.2} />
          </div>
        </div>

        {/* Floating Numbered Step Badge at Top-Left */}
        <div className="absolute top-1 left-1 z-20">
          <span
            className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${step.badgeBg} text-white text-[11px] sm:text-xs font-black shadow-md border-2 border-white`}
          >
            {step.number}
          </span>
        </div>
      </div>

      {/* ── Content Underneath Image ─────────────────────────── */}
      <div className="text-center px-2 max-w-[280px]">
        {/* Stage Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#134c2c] tracking-tight uppercase mb-2">
          {step.title}
        </h3>

        {/* Stage Description */}
        <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
          {step.description}
        </p>
      </div>

      {/* ── Desktop Horizontal Connecting Arrow ──────────────── */}
      {!isLast && (
        <div
          className="hidden lg:flex absolute -right-5 xl:-right-6 top-[95px] sm:top-[100px] md:top-[110px] lg:top-[112px] xl:top-[124px] -translate-y-1/2 z-30 pointer-events-none items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full bg-white/95 border border-emerald-100 shadow-sm flex items-center justify-center text-[#2da021]">
            <ArrowRight size={15} strokeWidth={2.5} />
          </div>
        </div>
      )}

      {/* ── Mobile & Tablet Downward Connecting Arrow ───────── */}
      {!isLast && (
        <div
          className="lg:hidden flex my-6 text-[#2da021] items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-emerald-100 shadow-xs flex items-center justify-center">
            <ArrowDown size={16} strokeWidth={2.5} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── 2. Challenge Message & Brand Strip Component ───────────────────── */
export function ChallengeMessage() {
  return (
    <div className="mt-12 sm:mt-14 lg:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white via-[#f4f9f4] to-white border border-[#2da021]/25 p-5 sm:p-7 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
      {/* Left: ReLoop Sciences Logo */}
      <div className="flex items-center shrink-0">
        <Link href="/" className="inline-block transition-opacity hover:opacity-90">
          <Image
            src="/logo.png"
            alt="ReLoop Sciences Logo"
            width={280}
            height={68}
            unoptimized
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Middle Vertical Divider (Desktop) */}
      <div className="hidden md:block w-px h-10 bg-[#2da021]/25 shrink-0" />

      {/* Center: Core Message */}
      <div className="text-center md:text-left flex-1 px-2">
        <p className="text-base sm:text-lg md:text-[1.125rem] text-[#134c2c] font-semibold leading-snug">
          The challenge is clear:{" "}
          <span className="text-[#2da021] font-bold block sm:inline">
            we need a traceable, circular solution.
          </span>
        </p>
      </div>

      {/* Right: Primary Deep Green CTA Button */}
      <div className="shrink-0 w-full md:w-auto">
        <Link
          href="/solutions"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#134c2c] hover:bg-[#0c2a19] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg group"
        >
          <span>Need For Circular Solutions</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1 text-[#2da021]"
          />
        </Link>
      </div>
    </div>
  );
}


/* ─── 4. Main Challenge Journey Container Section ─────────────────────── */
export function ChallengeJourney() {
  return (
    <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-5 sm:px-8 lg:px-12 bg-offwhite relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Rounded Stage Container */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border border-gray-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.03)] p-6 sm:p-9 md:p-11 lg:p-14 relative overflow-hidden">
          {/* Top Decorative Leaf Emblem & Lead Headline */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2da021]/10 text-[#2da021] mb-3">
              <Leaf size={16} strokeWidth={2.5} />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#134c2c] tracking-tight">
              Laboratory plastic waste threatens our environment and the future.
            </h2>
          </div>

          {/* 4-Step Challenge Progression (Desktop 4-col, Tablet 2x2 or responsive flex, Mobile 1-col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 items-start justify-between relative">
            {CHALLENGE_STEPS.map((step, idx) => (
              <ChallengeStep
                key={step.number}
                step={step}
                index={idx}
                isLast={idx === CHALLENGE_STEPS.length - 1}
              />
            ))}
          </div>

          {/* Challenge Message / Brand Strip */}
          <ChallengeMessage />
        </div>
      </div>
    </section>
  );
}
