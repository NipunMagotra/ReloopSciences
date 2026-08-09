"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { CircularJourney } from "./CircularJourney";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.12 + i * 0.1,
    },
  }),
};

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-96px)] flex flex-col justify-between pt-28 md:pt-32 pb-6 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite"
      id="hero"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* ─── Left: Main Headline & Copy ────────────────── */}
          <div className="lg:col-span-7 max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/5 border border-[#2da021]/20 text-[#2da021] text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              India&apos;s Lab Plastic Ecosystem
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[54px] font-extrabold text-[#134c2c] tracking-tight leading-[1.12] mb-4 sm:mb-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              India’s Labs Are Throwing Away a Hidden Resource.
              <span className="block text-[#2da021] mt-1.5 sm:mt-2">
                We’re Turning It Into a Circular Economy.
              </span>
            </motion.h1>

            <motion.p
              className="max-w-[620px] text-base sm:text-lg text-gray-700 font-normal leading-relaxed mb-7"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              A traceable, closed-loop system that transforms clean lab plastics into new lab products.
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
                className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-[#f88a0d] hover:bg-[#d87609] text-white text-sm font-bold tracking-wide rounded-full transition-all duration-300 shadow-md hover:shadow-lg shadow-orange-950/15 hover:-translate-y-0.5 group"
              >
                Partner With Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#circular-model"
                className="inline-flex items-center justify-center h-12 px-7 text-[#134c2c] hover:text-[#2da021] font-semibold text-sm rounded-full bg-white border border-gray-300 hover:border-[#2da021] transition-all duration-300 shadow-xs hover:shadow-sm"
              >
                Learn How It Works
              </Link>
            </motion.div>
          </div>

          {/* ─── Right: Interactive Visualization ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <CircularJourney />
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ──────────────────────────────── */}
      <div className="pt-4 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400">
          Scroll Down
        </span>
        <ChevronDown size={15} className="scroll-indicator text-gray-400" />
      </div>
    </section>
  );
}
