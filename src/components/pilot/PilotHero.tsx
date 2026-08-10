"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

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

export function PilotHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/5 border border-[#2da021]/30 text-[#2da021] text-xs font-semibold uppercase tracking-widest"
          >
            Pilot Programme
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#134c2c] tracking-tight leading-[1.2]"
          >
            Help Shape the Future of Laboratory Sustainability
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-[#134c2c]/80 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Reloop Sciences is seeking universities, research institutes, biotech companies, pharmaceutical R&D teams, recyclers, and manufacturers interested in exploring sustainable approaches to laboratory material recovery.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-orange-950/20 group"
            >
              Register Interest
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:hello@reloopsciences.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-[#134c2c] font-medium text-sm hover:border-[#2da021] hover:text-[#2da021] transition-all duration-300 shadow-sm"
            >
              <Mail size={18} />
              hello@reloopsciences.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
