"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { CircularJourney } from "./CircularJourney";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
    },
  }),
};

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite"
      id="hero"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ─── Left: Main Headline & Copy ────────────────── */}
          <div className="lg:col-span-7 max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/5 border border-[#2da021]/20 text-[#2da021] text-xs font-semibold uppercase tracking-widest mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              India&apos;s Lab Plastic Ecosystem
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#134c2c] tracking-tight leading-[1.2] mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              India’s Labs Hold an Untapped Resource.
              <span className="block text-[#2da021] mt-2">
                We’re Unlocking It for a Circular Economy.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#134c2c]/80 font-medium leading-relaxed mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              A traceable, closed‑loop system that transforms clean lab plastics into new lab products.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f88a0d] hover:bg-[#d87609] text-white text-base font-semibold tracking-wide rounded-full transition-all duration-300 shadow-xl shadow-orange-950/20 hover:-translate-y-0.5 group"
              >
                Partner With Us
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#circular-model"
                className="inline-flex items-center justify-center px-8 py-4 text-[#134c2c] font-semibold text-base rounded-full bg-white border border-gray-200 hover:border-[#2da021] hover:text-[#2da021] transition-all duration-300 shadow-sm"
              >
                Learn How It Works
              </Link>
            </motion.div>
          </div>

          {/* ─── Right: Interactive Visualization ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <CircularJourney />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
