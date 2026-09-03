"use client";

import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 + i * 0.1,
    },
  }),
};

export function FoundersSection() {
  return (
    <section className="bg-gradient-to-b from-offwhite via-white to-offwhite py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2da021]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#134c2c] tracking-tight">
            Meet the Co-Founder
          </h2>
        </motion.div>

        {/* Shrunk & Compact Founder Feature Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="group max-w-[450px] mx-auto bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 md:p-8 border border-[#2da021]/60 shadow-[0_10px_35px_rgba(45,160,33,0.06)] hover:shadow-[0_16px_45px_rgba(45,160,33,0.11)] transition-all duration-500 relative"
        >
          <div className="flex flex-col items-center text-center">
            {/* Circular Avatar with Subtle Green & Orange Dual Halo */}
            <div className="relative mb-5">
              {/* Soft Ambient Halo (Subtle Green #2da021 & Orange #f88a0d) */}
              <div 
                className="absolute -inset-2.5 sm:-inset-3.5 rounded-full bg-[conic-gradient(from_0deg,rgba(45,160,33,0.35)_0%,rgba(248,138,13,0.3)_25%,rgba(45,160,33,0.35)_50%,rgba(248,138,13,0.3)_75%,rgba(45,160,33,0.35)_100%)] blur-xl opacity-15 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 pointer-events-none animate-[spin_10s_linear_infinite]" 
              />

              {/* Dual-Color Delicate Border Ring */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[2px] sm:p-[2.5px] bg-[conic-gradient(from_0deg,rgba(45,160,33,0.5)_0%,rgba(248,138,13,0.45)_25%,rgba(45,160,33,0.5)_50%,rgba(248,138,13,0.45)_75%,rgba(45,160,33,0.5)_100%)] shadow-[0_4px_16px_rgba(45,160,33,0.1)] group-hover:shadow-[0_6px_20px_rgba(248,138,13,0.15)] transition-all duration-500">
                {/* White Gap Ring */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-white p-[2px]">
                  {/* Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100">
                    <Image
                      src="/images/dr-priya-animated.jpg"
                      alt="Dr. Priya — Co-Founder of ReLoop Sciences"
                      fill
                      className="object-cover object-[center_18%] group-hover:scale-108 transition-transform duration-700 ease-out"
                      priority
                      sizes="(max-width: 640px) 144px, 160px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Name & Badge */}
            <div className="flex items-center justify-center gap-2 mb-0.5">
              <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#134c2c] tracking-tight">
                Dr. Priya
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#eaf7ee] text-[#1b7a43] border border-emerald-200/50">
                Ph.D.
              </span>
            </div>
            
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f88a0d] mb-4.5">
              CO-FOUNDER
            </p>

            {/* Quote Callout Box */}
            <div className="w-full relative bg-[#eff9f2] border-l-4 border-[#2da021] rounded-xl px-4 py-3 mb-4.5 flex items-center justify-between text-left gap-3">
              <p className="text-[13px] sm:text-[14px] font-bold text-[#0f3d23] italic leading-snug">
                “Built from science. Driven by sustainability.”
              </p>
              {/* Closing Quotation Icon (99 style) */}
              <div className="shrink-0 text-[#2da021]/45 select-none" aria-hidden="true">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="w-full space-y-3 text-left text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">Dr. Priya</strong> is a neuroscientist with a Ph.D. in Biotechnology/ Neuroscience and postdoctoral research experience at <strong className="text-slate-900 font-bold">McGill University, Canada</strong>.
              </p>
              <p>
                Her years of hands-on laboratory research inspired <strong className="text-[#134c2c] font-bold">ReLoop Sciences</strong> and its mission to develop more sustainable, traceable, and circular pathways for suitable laboratory plastics.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
