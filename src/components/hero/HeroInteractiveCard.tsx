"use client";

import { useState, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  RotateCw,
  RotateCcw,
  Sparkles,
  Trash2,
  Truck,
  Recycle,
  Factory,
  RefreshCw,
  ArrowDown,
} from "lucide-react";

/* ─── Stage data ──────────────────────────────────────────────── */

const STAGES = [
  {
    id: 0,
    num: "01",
    title: "Segregated Bins",
    desc: "Colour-coded bins in labs for clean PP waste",
    icon: Trash2,
    color: "#f88a0d",
  },
  {
    id: 1,
    num: "02",
    title: "Collection & Wash",
    desc: "Scheduled pickup, decontamination & traceability",
    icon: Truck,
    color: "#0284c7",
  },
  {
    id: 2,
    num: "03",
    title: "Recycling",
    desc: "Advanced processing into virgin-grade pellets",
    icon: Recycle,
    color: "#2da021",
  },
  {
    id: 3,
    num: "04",
    title: "New Products",
    desc: "Injection-moulded circular labware back to science",
    icon: Factory,
    color: "#8b5cf6",
  },
];

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => { };
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/* ─── Component ───────────────────────────────────────────────── */

interface HeroInteractiveCardProps {
  onFlipChange?: (isFlipped: boolean) => void;
  externalFlipped?: boolean;
}

export function HeroInteractiveCard({
  onFlipChange,
  externalFlipped,
}: HeroInteractiveCardProps) {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const isFlipped = externalFlipped !== undefined ? externalFlipped : internalFlipped;
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleFlip = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const nextState = !isFlipped;
    setInternalFlipped(nextState);
    if (onFlipChange) {
      onFlipChange(nextState);
    }
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 7.5;
    const rotateY = ((x - centerX) / centerX) * 8.5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full [perspective:1200px] cursor-pointer select-none group"
      onClick={() => toggleFlip()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={
        isFlipped
          ? "Interactive 3D Card: Information Face active. Press Enter or Space to flip back to Visual Showcase."
          : "Interactive 3D Card: Visual Showcase active. Press Enter or Space to flip to Information Panel."
      }
    >
      {/* Ambient 3D Drop Glow */}
      <div
        className={`absolute -inset-1.5 rounded-[30px] bg-gradient-to-r from-[#2da021]/20 via-[#f88a0d]/15 to-[#2da021]/20 blur-xl opacity-60 transition-opacity duration-700 pointer-events-none ${isHovered || isFlipped ? "opacity-90 scale-[1.01]" : "opacity-30"
          }`}
      />

      {/* 3D Inner Card Container */}
      <div
        className="relative w-full aspect-[16/12] sm:aspect-[16/11.8] md:aspect-[16/11.5] min-h-[510px] sm:min-h-[530px] rounded-[24px] [transform-style:preserve-3d] shadow-2xl shadow-emerald-950/20 transition-all"
        style={{
          transform: prefersReducedMotion
            ? isFlipped
              ? "rotateY(180deg)"
              : "rotateY(0deg)"
            : isFlipped
              ? "rotateY(180deg)"
              : isHovered
                ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
                : "rotateX(0deg) rotateY(0deg)",
          transition: prefersReducedMotion
            ? "transform 0.3s ease"
            : isHovered && !isFlipped
              ? "transform 0.12s ease-out, box-shadow 0.3s ease"
              : "transform 0.8s cubic-bezier(0.34, 1.15, 0.64, 1), box-shadow 0.4s ease",
        }}
      >
        {/* ========================================================= */}
        {/* 1. FRONT FACE — VISUAL SHOWCASE ONLY                     */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden [backface-visibility:hidden] [transform:rotateY(0deg)] bg-[#f8f7f4] border border-emerald-900/15 shadow-inner flex flex-col justify-between">
          {/* Visual Showcase Image */}
          <div className="relative w-full h-full flex-1">
            <Image
              src="/images/hero-visual-showcase.png"
              alt="ReLoop Sciences - Closed-Loop Lab Plastics Recovery Visual Showcase"
              fill
              priority
              unoptimized
              style={{ imageRendering: "-webkit-optimize-contrast" }}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 700px"
            />

            {/* Subtle Metallic / Glass Sheen Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/20 pointer-events-none" />
          </div>

          {/* Front Bottom Bar */}
          <div className="relative z-10 p-3 sm:p-3.5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex items-center justify-between gap-3 border-t border-emerald-800/40">
            <div className="flex items-center gap-2 min-w-0">
              <Sparkles size={15} className="text-[#f88a0d] shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                ReLoop Closed-Loop Recovery Architecture
              </span>
            </div>
            <button
              type="button"
              onClick={toggleFlip}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white text-xs font-semibold shrink-0 transition-colors shadow-md shadow-orange-950/30"
            >
              <span>Explore Details</span>
              <RotateCw size={12} className="transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. BACK FACE — CLEAN CIRCULAR PROCESS OVERVIEW            */}
        {/* ========================================================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white text-[#0f172a] border border-gray-200/90 shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Header ────────────────────────────────────────── */}
          <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-3 flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#f88a0d] uppercase tracking-widest">
                The Circular Loop
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0c2a19] mt-0.5">
                Our 4‑Step Circular Model
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] mt-1 leading-relaxed">
                Plastic becomes products again. Waste becomes value.
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFlip(e);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 text-[11px] font-semibold border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer shrink-0 mt-1"
            >
              <RotateCcw size={11} className="text-[#f88a0d]" />
              <span>Back</span>
            </button>
          </div>

          {/* ── Circular Diagram + Steps (Side by Side) ──────── */}
          <div className="flex-1 grid grid-cols-12 gap-2 px-5 sm:px-7 pb-2 min-h-0">
            {/* Left: Mini Circular Diagram */}
            <div className="col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[220px] aspect-square">
                {/* SVG Ring */}
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                  {/* Background dashed ring */}
                  <circle
                    cx="100" cy="100" r="80"
                    fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 3"
                  />
                  {/* Colored arc segments */}
                  {STAGES.map((s, i) => {
                    const r = 80;
                    const circumference = 2 * Math.PI * r;
                    const segmentLength = circumference / 4;
                    const gap = 8;
                    return (
                      <circle
                        key={s.id}
                        cx="100" cy="100" r={r}
                        fill="none"
                        stroke={s.color}
                        strokeWidth="3"
                        strokeDasharray={`${segmentLength - gap} ${circumference - segmentLength + gap}`}
                        strokeDashoffset={-(i * segmentLength) + circumference / 4}
                        strokeLinecap="round"
                        opacity="0.7"
                        className="transition-opacity duration-300"
                      />
                    );
                  })}
                </svg>

                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] rounded-full bg-gradient-to-br from-[#0c3e21] to-[#134c2c] shadow-lg flex flex-col items-center justify-center text-white z-10">
                  <RefreshCw size={16} className="text-[#f88a0d] mb-0.5" />
                  <span className="text-[8px] font-bold tracking-wider uppercase leading-tight text-center text-emerald-200">
                    RELOOP
                  </span>
                </div>

                {/* 4 Nodes at clock positions */}
                {STAGES.map((s, i) => {
                  const Icon = s.icon;
                  // Positions: top, right, bottom, left
                  const positions = [
                    { top: "2%", left: "50%", transform: "translate(-50%, 0)" },
                    { top: "50%", right: "2%", transform: "translate(0, -50%)" },
                    { bottom: "2%", left: "50%", transform: "translate(-50%, 0)" },
                    { top: "50%", left: "2%", transform: "translate(0, -50%)" },
                  ];
                  return (
                    <div
                      key={s.id}
                      className="absolute z-20"
                      style={positions[i] as React.CSSProperties}
                    >
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border-2 flex items-center justify-center shadow-md"
                        style={{ borderColor: s.color }}
                      >
                        <Icon size={16} style={{ color: s.color }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: 4 Steps List */}
            <div className="col-span-7 flex flex-col justify-center gap-2.5 sm:gap-3">
              {STAGES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.id} className="flex items-start gap-3 group/step">
                    {/* Number + Icon */}
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <div
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white shadow-sm"
                        style={{ backgroundColor: s.color }}
                      >
                        <Icon size={15} />
                      </div>
                      {i < STAGES.length - 1 && (
                        <div className="w-px h-3 bg-slate-200" />
                      )}
                    </div>
                    {/* Text */}
                    <div className="min-w-0 pt-0.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-black uppercase tracking-wider"
                          style={{ color: s.color }}
                        >
                          Step {s.num}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0c2a19] leading-tight">
                        {s.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#475569] leading-snug mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Bottom Banner ──────────────────────────────────── */}
          <div className="mx-5 sm:mx-7 mb-4 sm:mb-5 p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2da021] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wide">
                100% Closed-Loop · Zero Landfill · Fully Traceable
              </span>
            </div>
            <a
              href="#circular-model"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white text-[10px] sm:text-[11px] font-semibold transition-colors shrink-0 shadow-sm"
            >
              <span>Explore Full Model</span>
              <ArrowDown size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
