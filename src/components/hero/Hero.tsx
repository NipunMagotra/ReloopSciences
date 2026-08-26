"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

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
      className="relative min-h-[85vh] flex flex-col items-center pt-32 pb-24 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite"
      id="hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2da021]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 w-full relative z-10 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/5 border border-[#2da021]/20 text-[#2da021] text-xs font-semibold uppercase tracking-widest mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Sparkles size={14} className="text-[#f88a0d]" />
          India&apos;s Lab Plastic Ecosystem
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#134c2c] tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          India’s Labs Hold an Untapped Resource.
          <span className="block text-[#2da021] mt-3">
            We’re Unlocking It for a Circular Economy.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#134c2c]/80 font-medium leading-relaxed mb-10 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          A traceable, closed‑loop system that transforms clean lab plastics into new lab products across India.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f88a0d] hover:bg-[#d87609] text-white text-base font-semibold tracking-wide rounded-full transition-all duration-300 shadow-xl shadow-orange-950/20 hover:-translate-y-0.5 group"
          >
            Partner With Us
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#circular-model"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[#134c2c] font-semibold text-base rounded-full bg-white border border-gray-200 hover:border-[#2da021] hover:text-[#2da021] transition-all duration-300 shadow-sm"
          >
            Learn How It Works
          </Link>
        </motion.div>

        {/* Featured Circular Model Infographic Showcase */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-emerald-950/15 shadow-2xl bg-white text-left"
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
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
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
      </div>
    </section>
  );
}

