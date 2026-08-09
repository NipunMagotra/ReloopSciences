"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCtaSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white p-10 md:p-16 rounded-3xl border border-emerald-800/60 shadow-2xl relative overflow-hidden text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-[#f88a0d] text-xs font-semibold uppercase tracking-widest relative z-10">
            Join the Movement
          </div>

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto leading-tight relative z-10">
            Let’s build India’s first circular lab‑plastic ecosystem.
          </h2>

          <div className="pt-4 relative z-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#f88a0d] hover:bg-[#d87609] text-white font-bold text-base rounded-full transition-all duration-300 shadow-xl shadow-orange-950/40 hover:-translate-y-0.5 group"
            >
              Partner With Us
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
