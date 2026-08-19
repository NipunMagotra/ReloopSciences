"use client";

import { motion } from "motion/react";
import { AlertCircle, FlaskConical, Sparkles } from "lucide-react";
import { ChallengesInfographic } from "./ChallengesInfographic";

const plasticTypes = [
  "Pipette tips",
  "Falcon tubes",
  "Serological pipettes",
  "PCR plates",
  "Cell culture plastics",
  "Deep-well plates",
  "Reservoirs",
  "Sample containers",
  "Laboratory packaging",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.1,
    },
  }),
};

export function ChallengesHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/5 border border-[#f88a0d]/30 text-[#f88a0d] text-xs font-semibold uppercase tracking-widest"
          >
            <AlertCircle size={14} />
            The Challenges
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#134c2c] tracking-tight leading-[1.2]"
          >
            Laboratory Sustainability in a Single-Use World
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-[#134c2c]/80 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Modern scientific research relies heavily on single-use plastic consumables to ensure safety, sterility, reproducibility, and regulatory compliance.
          </motion.p>
        </div>

        {/* Featured Challenges Infographic Showcase */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <ChallengesInfographic />
        </motion.div>

        {/* Plastic Consumables Grid */}
        <div className="mt-12 max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f88a0d] flex items-center justify-center">
              <FlaskConical size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#134c2c]">
              Every day, laboratories use a wide range of plastic materials:
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {plasticTypes.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                className="p-3.5 rounded-xl bg-offwhite border border-gray-100 flex items-center gap-2.5 text-sm font-medium text-[#134c2c] hover:border-[#f88a0d]/40 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#f88a0d]" />
                {item}
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/5 border border-emerald-800/10 text-emerald-900 text-sm font-medium text-center">
            These materials are essential to scientific progress, but they also contribute significantly to laboratory waste streams.
          </div>
        </div>
      </div>
    </section>
  );
}
