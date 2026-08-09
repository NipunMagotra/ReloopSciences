"use client";

import { motion } from "motion/react";
import { ContactAudience } from "@/components/contact/ContactAudience";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

export function ContactPageContent() {
  return (
    <section className="relative bg-[#071d12] text-white pt-28 md:pt-36 pb-20 overflow-hidden min-h-screen">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2da021]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#f88a0d]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ─── Hero ───────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-16 md:mb-20 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-[#f88a0d] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#2da021] animate-pulse" />
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mb-6 text-white"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Let&rsquo;s Start a <span className="text-[#2da021]">Conversation.</span>
        </motion.h1>

        <motion.p
          className="text-emerald-100/70 text-base md:text-lg max-w-xl leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          We&rsquo;d like to hear from laboratories, recyclers, manufacturers,
          incubators and others interested in building a more circular approach
          to laboratory plastics.
        </motion.p>
      </div>

      {/* ─── Two-column: Audience + Form ────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Audience */}
          <div className="lg:col-span-5">
            <ContactAudience />
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* ─── Contact info ───────────────────────────────── */}
      <div className="relative z-10">
        <ContactInfo />
      </div>
    </section>
  );
}
