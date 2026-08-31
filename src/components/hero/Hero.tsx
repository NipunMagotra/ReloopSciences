"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite"
      id="hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#2da021]/4 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-stretch">
          {/* Left Column: Compact Hero Content (~42–45%) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left w-full max-w-[650px] py-1 sm:py-2">
            <div>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-[2.15rem] xl:text-[2.55rem] 2xl:text-[2.85rem] font-bold text-[#134c2c] tracking-tight leading-[1.15] max-w-[640px]"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <span className="block">
                  <span className="block sm:whitespace-nowrap">India’s Labs Hold an</span>
                  <span className="block sm:whitespace-nowrap">Untapped Resource.</span>
                </span>
                <span className="block text-[#2da021] mt-3 sm:mt-4">
                  <span className="block sm:whitespace-nowrap">We’re Unlocking It for</span>
                  <span className="block sm:whitespace-nowrap">a Circular Economy.</span>
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-[#134c2c]/85 font-normal leading-relaxed mt-5 md:mt-6 max-w-[600px]"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                A traceable, closed-loop system that transforms clean lab plastics into new lab products across India.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 lg:mt-auto pt-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                data-umami-event="hero-partner-click"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#f88a0d] hover:bg-[#d87609] text-white text-base font-semibold tracking-wide rounded-full transition-all duration-300 shadow-xl shadow-orange-950/15 hover:-translate-y-0.5 group"
              >
                <span>Partner With Us</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#circular-model"
                data-umami-event="hero-learn-click"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[#134c2c] font-semibold text-base rounded-full bg-white border border-gray-200 hover:border-[#2da021] hover:text-[#2da021] transition-all duration-300 shadow-xs hover:-translate-y-0.5"
              >
                Learn How It Works
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Seamless Edge Fade (~55–58%) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="lg:col-span-7 w-full flex items-center justify-center lg:justify-end"
          >
            <div className="w-full relative overflow-hidden rounded-xl md:rounded-2xl hero-image-mask">
              <Image
                src="/images/hero-visual.jpg"
                alt="ReLoop Sciences Circular Laboratory Plastics Ecosystem"
                width={1024}
                height={768}
                priority
                unoptimized
                className="w-full h-auto object-contain block rounded-xl md:rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
