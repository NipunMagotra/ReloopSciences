"use client";

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

export function ChallengesHero() {
  return (
    <section className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-[920px] mx-auto space-y-4 sm:space-y-5">
          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#134c2c] tracking-tight leading-[1.15]"
          >
            Laboratory Sustainability in a Single-Use World
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-base sm:text-lg md:text-xl text-[#334155] font-normal leading-relaxed max-w-[850px] mx-auto pt-1"
          >
            Modern scientific research relies heavily on single-use plastic consumables to ensure safety, sterility, reproducibility, and regulatory compliance.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
