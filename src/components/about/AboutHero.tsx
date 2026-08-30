"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        {/* Heading ONLY above the image (single line on desktop) */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.6rem] font-bold text-[#134c2c] tracking-tight leading-[1.2] whitespace-normal sm:whitespace-nowrap"
          >
            Building a Circular Future for Laboratory Materials
          </motion.h1>
        </div>

        {/* Featured About Us Infographic Showcase */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-emerald-950/15 shadow-2xl bg-white mb-12"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/about-us-infographic.png"
              alt="About Reloop Sciences - Building a Circular Future for Laboratories"
              fill
              priority
              unoptimized
              style={{ imageRendering: "-webkit-optimize-contrast" }}
              className="object-contain bg-white"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#f88a0d]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Our Purpose: Mission, Vision, Values & Commitment
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2da021] bg-white/10 px-3 py-1 rounded-full">
              Circular Life Sciences
            </span>
          </div>
        </motion.div>

        {/* Intro Paragraph below the image */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-lg md:text-xl text-[#134c2c]/80 font-medium leading-relaxed"
          >
            Reloop Sciences is a sustainability-focused company exploring innovative solutions for laboratory plastic recovery and circular economy practices within the life sciences sector.
          </motion.p>
        </div>

        {/* Content Callout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
          >
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We believe that scientific progress and environmental responsibility should advance together. While laboratories depend on plastic consumables to ensure safety, quality, and reproducibility, there is growing awareness that more sustainable pathways are needed for managing these materials at the end of their life.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="bg-[#0c2a19] text-white p-8 md:p-10 rounded-3xl border border-emerald-800/40 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#2da021]/20 rounded-full blur-2xl pointer-events-none" />
            <p className="text-emerald-100 text-base md:text-lg leading-relaxed relative z-10">
              Our goal is to help connect research organisations, recycling partners, manufacturers, and sustainability leaders to explore practical opportunities for reducing waste and supporting a more circular future for science.
            </p>
            <div className="mt-6 pt-6 border-t border-emerald-800/60 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-[#f88a0d] uppercase">
                Collaborative Circular Pathways
              </span>
              <Link
                href="/contact"
                className="w-9 h-9 rounded-full bg-[#f88a0d] text-white flex items-center justify-center hover:bg-[#d87609] transition-all duration-200 group-hover:translate-x-1"
                aria-label="Contact us"
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
