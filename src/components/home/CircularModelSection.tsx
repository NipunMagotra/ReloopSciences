"use client";

import { TwoCircularLoop } from "./TwoCircularLoop";

export function CircularModelSection() {
  return (
    <section
      id="circular-model"
      className="py-20 md:py-28 lg:py-32 px-6 sm:px-8 lg:px-10 xl:px-12 bg-offwhite relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#2da021]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10 space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="eyebrow block">The Circular Loop</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134c2c] tracking-tight">
            Our 4‑Step Circular Model
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#2da021] bg-[#2da021]/10 border border-[#2da021]/20 py-2 px-5 rounded-full inline-block">
            Plastic becomes products again. Waste becomes value.
          </p>
        </div>

        {/* 2D Interactive Model */}
        <TwoCircularLoop />

        {/* Visual Summary Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white border border-[#2da021]/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f88a0d]">
              Closed-Loop Ecosystem
            </span>
            <h4 className="text-base sm:text-lg font-bold">
              Fully Traceable & Compliant Laboratory Polymer Recycling
            </h4>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#f88a0d]" />
            <span className="w-3 h-3 rounded-full bg-[#0284c7]" />
            <span className="w-3 h-3 rounded-full bg-[#2da021]" />
            <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
          </div>
        </div>
      </div>
    </section>
  );
}

