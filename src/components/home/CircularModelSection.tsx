"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ThreeCircularLoop } from "./ThreeCircularLoop";
import { Sparkles } from "lucide-react";

export function CircularModelSection() {
  return (
    <section id="circular-model" className="py-16 md:py-24 px-6 bg-offwhite relative overflow-hidden space-y-16">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section 1: Infographic Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-emerald-950/15 shadow-2xl bg-white"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/circular-model-infographic.jpg"
              alt="Closing the Loop - Reloop Sciences Circular Model"
              fill
              priority
              unoptimized
              style={{ imageRendering: "-webkit-optimize-contrast" }}
              className="object-contain bg-[#f8f7f4]"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] to-[#134c2c] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#f88a0d]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Reloop Closed-Loop Recovery Architecture
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2da021] bg-white/10 px-3 py-1 rounded-full">
              Transparent • Traceable • Circular
            </span>
          </div>
        </motion.div>

        {/* Section 2: 4-Step 3D Interactive Model */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="eyebrow block">The Circular Loop</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Our 4‑Step Circular Model
          </h2>
          <p className="text-sm md:text-base font-bold text-[#2da021] bg-emerald-950/5 border border-emerald-800/10 py-2 px-5 rounded-full inline-block">
            Plastic becomes products again. Waste becomes value.
          </p>
        </div>

        {/* 3D Interactive Model */}
        <div className="mb-16">
          <ThreeCircularLoop />
        </div>

        {/* Visual Summary Banner */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white border border-emerald-800/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#f88a0d]">
              Closed-Loop Ecosystem
            </span>
            <h4 className="text-base md:text-lg font-bold">
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
