"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThreeCircularLoop } from "./ThreeCircularLoop";
import { CircularHubDiagram } from "./CircularHubDiagram";
import { Globe, GitMerge } from "lucide-react";

export function CircularModelSection() {
  const [activeView, setActiveView] = useState<"3d" | "diagram">("3d");

  return (
    <section id="circular-model" className="py-16 md:py-24 px-6 bg-offwhite relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="eyebrow block">The Circular Loop</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Our 4‑Step Circular Model
          </h2>
          <p className="text-sm md:text-base font-bold text-[#2da021] bg-emerald-950/5 border border-emerald-800/10 py-2 px-5 rounded-full inline-block">
            Plastic becomes products again. Waste becomes value.
          </p>

          {/* Clean View Mode Toggle Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveView("3d")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeView === "3d"
                  ? "bg-[#134c2c] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:text-[#134c2c]"
              }`}
            >
              <Globe size={14} />
              3D Interactive Model
            </button>
            <button
              onClick={() => setActiveView("diagram")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeView === "diagram"
                  ? "bg-[#134c2c] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:text-[#134c2c]"
              }`}
            >
              <GitMerge size={14} />
              Hub & Spoke Diagram
            </button>
          </div>
        </div>

        {/* Dynamic View Display */}
        <AnimatePresence mode="wait">
          {activeView === "3d" ? (
            <motion.div
              key="3d-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <ThreeCircularLoop />
            </motion.div>
          ) : (
            <motion.div
              key="diagram-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <CircularHubDiagram />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visual Summary Banner */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white border border-emerald-800/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#f88a0d]">
              Closed-Loop Ecosystem
            </span>
            <h4 className="text-base md:text-lg font-bold">
              100% Traceable & Compliant Laboratory Polymer Recycling
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
