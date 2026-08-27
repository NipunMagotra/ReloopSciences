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
      className="relative min-h-[85vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite"
      id="hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2da021]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 text-left">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-bold text-[#134c2c] tracking-tight leading-[1.14] mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              India’s Labs Hold an Untapped Resource.
              <span className="block text-[#2da021] mt-2 sm:mt-3">
                We’re Unlocking It for a Circular Economy.
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-[#134c2c]/85 font-normal leading-relaxed mb-8 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              A traceable, closed‑loop system that transforms clean lab plastics into new lab products across India.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#f88a0d] hover:bg-[#d87609] text-white text-base font-semibold tracking-wide rounded-full transition-all duration-300 shadow-xl shadow-orange-950/20 hover:-translate-y-0.5 group"
              >
                Partner With Us
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#circular-model"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[#134c2c] font-semibold text-base rounded-full bg-white border border-gray-200 hover:border-[#2da021] hover:text-[#2da021] transition-all duration-300 shadow-sm"
              >
                Learn How It Works
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Featured Circular Model Infographic */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="lg:col-span-6 w-full rounded-3xl overflow-hidden border border-emerald-950/15 shadow-2xl bg-white text-left group"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9.8] w-full">
              <Image
                src="/images/circular-model-infographic.jpg"
                alt="Closing the Loop - Reloop Sciences Circular Model"
                fill
                priority
                unoptimized
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                className="object-contain bg-[#f8f7f4]"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
            <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-[#f88a0d] shrink-0" />
                <span className="text-xs sm:text-sm font-bold tracking-wide">
                  Reloop Closed-Loop Recovery Architecture
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#2da021] bg-white/10 px-2.5 py-0.5 rounded-full shrink-0">
                Transparent • Traceable • Circular
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

