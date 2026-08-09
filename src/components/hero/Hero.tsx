"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { CircularJourney } from "./CircularJourney";

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

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
      id="hero"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─── Left: Copy ────────────────────────────────── */}
          <div className="max-w-xl lg:max-w-none">
            <motion.p
              className="eyebrow mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Reloop Sciences
            </motion.p>

            <motion.h1
              className="heading-xl text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.2rem] mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Closing the Loop
              <br />
              on Lab Plastics.
            </motion.h1>

            <motion.p
              className="body-lg max-w-lg mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Reloop Sciences is working to transform the way laboratories
              manage plastic waste by enabling more circular, measurable and
              sustainable pathways.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              {/* Primary CTA */}
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-charcoal text-white text-sm font-medium tracking-wide rounded-md hover:bg-charcoal-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-charcoal/10"
              >
                Discover Our Solutions
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-charcoal text-sm font-medium tracking-wide rounded-md border border-border hover:border-green hover:text-green transition-all duration-300 hover:-translate-y-0.5"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </div>

          {/* ─── Right: Visualization ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <CircularJourney />
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ──────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground">
          Scroll
        </span>
        <ChevronDown size={16} className="scroll-indicator text-muted-foreground" />
      </div>
    </section>
  );
}
