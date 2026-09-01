"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Mail, GraduationCap, Microscope, Sparkles, Quote } from "lucide-react";

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
    <section className="bg-gradient-to-b from-offwhite via-white to-offwhite py-20 sm:py-24 px-6 relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2da021]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#f88a0d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2da021]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#134c2c]">
              Leadership & Science
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134c2c] mb-3 tracking-tight">
            Meet the Founder
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Bridging scientific excellence with closed-loop sustainability for life sciences.
          </p>
        </motion.div>

        {/* Founder Feature Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(45,160,33,0.08)] transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                {/* Glowing ring animation on hover */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2da021] via-[#f88a0d] to-[#2da021] rounded-3xl opacity-20 group-hover:opacity-60 blur-md transition-all duration-500" />
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-md bg-gray-100 border-2 border-white">
                  <Image
                    src="/images/dr-priya.jpg"
                    alt="Dr. Priya — Founder of ReLoop Sciences"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 640px) 256px, 288px"
                  />
                </div>

                {/* Badge Overlay */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-emerald-100 shadow-lg px-4 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[#2da021] animate-pulse" />
                  <span className="text-xs font-bold text-[#134c2c]">Neuroscientist & Founder</span>
                </div>
              </div>

              {/* Contact Link */}
              <div className="mt-7 flex items-center gap-3">
                <a
                  href="mailto:hello@reloopsciences.com"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#2da021] bg-gray-50 hover:bg-emerald-50/80 px-4 py-2 rounded-full border border-gray-200/80 transition-all duration-200"
                  aria-label="Contact Dr. Priya via email"
                >
                  <Mail size={14} className="text-[#f88a0d]" />
                  <span>hello@reloopsciences.com</span>
                </a>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#134c2c] tracking-tight">
                    Dr. Priya
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#2da021]/10 text-[#2da021]">
                    Ph.D.
                  </span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#f88a0d] mb-5">
                  Founder & Lead Scientist
                </p>

                {/* Tagline Banner / Quote */}
                <div className="relative bg-emerald-50/70 border-l-4 border-[#2da021] rounded-r-2xl p-4 sm:p-5 mb-6">
                  <Quote className="w-6 h-6 text-[#2da021]/30 absolute top-3 right-3" />
                  <p className="text-base sm:text-lg font-bold text-[#134c2c] italic">
                    “Built from science. Driven by sustainability.”
                  </p>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-3.5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-gray-900 font-semibold">Dr. Priya</strong> is a neuroscientist with a Ph.D. in Biotechnology/Neuroscience and postdoctoral research experience at <span className="text-gray-900 font-medium">McGill University, Canada</span>.
                  </p>
                  <p>
                    Her years of hands-on laboratory research inspired <span className="text-[#134c2c] font-semibold">ReLoop Sciences</span> and its mission to develop more sustainable, traceable, and circular pathways for suitable laboratory plastics.
                  </p>
                </div>
              </div>

              {/* Scientific Highlights / Badges */}
              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50/70 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/60 flex items-center justify-center text-[#2da021] shrink-0">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-gray-800">Biotechnology & Neuroscience</div>
                    <div className="text-muted-foreground">Ph.D. Expertise</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50/70 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-100/60 flex items-center justify-center text-[#f88a0d] shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-gray-800">McGill University, Canada</div>
                    <div className="text-muted-foreground">Postdoctoral Research</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
