"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

export function RegisterInterestSection() {
  return (
    <section id="register" className="py-20 md:py-28 px-6 bg-offwhite relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0c2a19] text-white p-10 md:p-16 rounded-3xl border border-emerald-800/60 shadow-2xl relative overflow-hidden text-center space-y-8"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#f88a0d] relative z-10">
            Get Started
          </span>

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight relative z-10">
            Register Interest
          </h2>

          <p className="text-emerald-100/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed relative z-10">
            If your organisation would like to explore future pilot opportunities, we would be pleased to start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <Link
              href="/contact"
              data-umami-event="pilot-register-click"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-orange-950/40 group"
            >
              Contact Us & Register
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="mailto:hello@reloopsciences.com"
              data-umami-event="pilot-email-click"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-100 font-semibold text-sm hover:bg-emerald-900 transition-colors"
            >
              <Mail size={18} className="text-[#2da021]" />
              hello@reloopsciences.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
