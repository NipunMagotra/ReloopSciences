"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export function PilotHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite text-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#2da021]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10">
        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#134c2c] tracking-tight leading-[1.18] mb-6"
        >
          Building the Future Through Real-World Testing.
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-base sm:text-lg md:text-xl text-[#134c2c]/85 font-normal leading-relaxed mb-9 max-w-2xl mx-auto"
        >
          Our pilot programme is a real-world test of our circular model. We partner with laboratories to implement, track and refine our solution for measurable impact.
        </motion.p>

        {/* Centered CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex items-center justify-center"
        >
          <Link
            href="/contact"
            data-umami-event="pilot-hero-partner-click"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#f88a0d] hover:bg-[#d87609] text-white text-sm sm:text-base font-bold tracking-wider uppercase rounded-full transition-all duration-300 shadow-xl shadow-orange-950/15 hover:-translate-y-0.5 group"
          >
            <span>Partner With Us</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
