"use client";

import { motion } from "motion/react";
import Image from "next/image";
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

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-6 md:pt-32 md:pb-8 lg:pt-32 lg:pb-8 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-7 lg:px-8 relative z-10">
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-6 lg:mb-7">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] font-bold text-[#134c2c] tracking-tight leading-[1.2]"
          >
            Building a Circular Future for Laboratory Materials
          </motion.h1>
        </div>

        {/* 2-Column Story Section: Compact & Fitted for Laptop Viewports */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="bg-white rounded-2xl lg:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* LEFT: Text Content */}
            <div className="lg:col-span-7 p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 flex flex-col justify-center bg-white order-2 lg:order-1">
              <p className="text-base sm:text-lg lg:text-[1.05rem] xl:text-[1.125rem] text-[#134c2c] font-semibold leading-relaxed">
                <span className="text-[#134c2c]">ReLoop Sciences</span> is building traceable circular pathways for suitable non-hazardous laboratory plastics, connecting scientific organisations with recovery, recycling and manufacturing partners.
              </p>

              <p className="text-sm sm:text-base lg:text-[0.95rem] text-[#134c2c]/85 font-normal leading-relaxed mt-3.5 sm:mt-4">
                We connect research, responsibility and innovation to close the loop—protecting our environment and empowering laboratories to lead the change.
              </p>

              <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-wider text-[#f88a0d] uppercase">
                  Collaborative Circular Pathways
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f88a0d] hover:bg-[#d87609] text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-sm hover:shadow group"
                >
                  <span>Connect With Us</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT: Laboratory Image */}
            <div className="lg:col-span-5 relative w-full h-[260px] sm:h-[300px] lg:h-auto min-h-full overflow-hidden bg-emerald-950/5 order-1 lg:order-2">
              <Image
                src="/images/about-us-infographic.png"
                alt="ReLoop Sciences Laboratory Consumables and Circular Solutions"
                fill
                priority
                unoptimized
                className="object-cover object-[78%_center] sm:object-[75%_center] lg:object-[76%_center]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
