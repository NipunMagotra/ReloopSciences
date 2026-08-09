"use client";

import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export function BuiltByScientistsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0c2a19] text-white p-10 md:p-16 rounded-3xl border border-emerald-800/60 shadow-2xl relative overflow-hidden text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-[#f88a0d] text-xs font-semibold uppercase tracking-widest relative z-10">
            Domain Expertise
          </div>

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight relative z-10">
            Built by Scientists
          </h2>

          <p className="text-emerald-100/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed relative z-10">
            We are scientists who understand how labs operate, how waste is generated, and how circular systems can transform India’s scientific ecosystem.
          </p>

          <div className="pt-6 border-t border-emerald-800/60 max-w-xl mx-auto relative z-10 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f88a0d]">
              Our mission is simple:
            </p>
            <div className="p-6 rounded-2xl bg-emerald-950/90 border border-emerald-700/60 shadow-inner">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Make lab plastics sustainable, traceable, and circular.
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs text-emerald-200/80 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#2da021]" /> Sustainable
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#2da021]" /> Traceable
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#2da021]" /> Circular
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
