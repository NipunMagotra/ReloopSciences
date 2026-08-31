"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PilotCtaSection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-10 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#063B26] rounded-[28px] sm:rounded-[32px] shadow-2xl overflow-hidden text-white relative flex flex-col lg:flex-row items-stretch min-h-[500px] lg:h-[540px] xl:h-[560px]"
        >
          {/* LEFT ZONE: ~48% Laboratory Image with pilot-cta.png */}
          <div className="relative w-full lg:w-[48%] h-[290px] sm:h-[340px] lg:h-full shrink-0 overflow-hidden bg-white">
            <Image
              src="/images/pilot-cta.png"
              alt="ReLoop Sciences Circular Laboratory Pellets in Erlenmeyer Flask"
              fill
              priority
              unoptimized
              className="object-cover object-[25%_center]"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />

            {/* Subtle Narrow 28px Center Feather (Seam between photo and green panel) */}
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#063B26] pointer-events-none hidden lg:block" />
            {/* Mobile Vertical Seam */}
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#063B26] pointer-events-none lg:hidden" />
          </div>

          {/* RIGHT ZONE: ~52% Rich ReLoop Green Content Area */}
          <div className="w-full lg:w-[52%] bg-[#063B26] p-8 sm:p-12 lg:py-14 lg:px-16 xl:py-16 xl:px-[72px] flex flex-col justify-center text-left relative z-10">
            <div className="max-w-[580px]">
              {/* Eyebrow */}
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.08em] text-[#f88a0d] uppercase block mb-3.5">
                JOIN THE PILOT PROGRAMME
              </span>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-white tracking-tight leading-[1.1] mb-0 max-w-[560px]">
                A small step today, <br />
                <span className="text-[#2da021]">a sustainable impact</span> <br />
                for tomorrow.
              </h2>

              {/* Supporting Body */}
              <p className="text-emerald-100/90 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.55] font-normal mt-6 max-w-[520px]">
                Partner with us to implement, measure, and scale circular plastic recovery within your research environment.
              </p>

              {/* Orange Button */}
              <div className="mt-7 sm:mt-8">
                <Link
                  href="/contact"
                  data-umami-event="pilot-bottom-cta-click"
                  className="inline-flex items-center justify-center gap-2.5 h-[54px] w-[230px] sm:w-[245px] bg-[#f88a0d] hover:bg-[#d87609] text-white text-sm sm:text-base font-bold tracking-wider uppercase rounded-full transition-all duration-300 shadow-xl shadow-orange-950/25 hover:-translate-y-0.5 group"
                >
                  <span>Partner With Us</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
