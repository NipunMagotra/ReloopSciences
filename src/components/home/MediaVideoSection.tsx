"use client";

import { motion } from "motion/react";
import { Mail, ArrowUpRight, Play } from "lucide-react";

function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface MediaVideoSectionProps {
  videoId?: string;
  youtubeChannelUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export function MediaVideoSection({
  videoId = "",
  youtubeChannelUrl = "https://www.youtube.com",
  linkedinUrl = "https://www.linkedin.com/company/reloop-sciences/",
  email = "mailto:hello@reloopsciences.com",
}: MediaVideoSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 bg-offwhite border-b border-gray-200/60 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2da021]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="eyebrow block">Media & Highlights</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Watch How We&apos;re Closing the Loop
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore our vision, laboratory recovery process, and circular economy initiatives across India.
          </p>
        </div>

        {/* Video Player / Coming Soon Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border-2 border-emerald-950/20 shadow-2xl bg-gradient-to-br from-[#0a2315] via-[#134c2c] to-[#07190e] mb-10 flex flex-col items-center justify-center text-white p-6 sm:p-10 text-center group"
        >
          {/* Decorative ambient background glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2da021]/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#f88a0d]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#2da021]/15 rounded-full blur-3xl pointer-events-none" />

          {videoId ? (
            <iframe
              className="w-full h-full relative z-10"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0`}
              title="ReLoop Sciences Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative z-10 space-y-5 max-w-lg mx-auto flex flex-col items-center">
              {/* Coming Soon Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f88a0d] opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f88a0d]" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f88a0d]">
                  Coming Soon
                </span>
              </div>

              {/* Play Button Icon with Glow Halo */}
              <div className="relative my-1">
                <div className="absolute -inset-3 rounded-full bg-[#f88a0d]/25 blur-md animate-pulse pointer-events-none" />
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 flex items-center justify-center text-white shadow-2xl group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
                  <Play size={30} className="fill-white ml-1 text-white opacity-95 group-hover:fill-[#f88a0d] group-hover:text-[#f88a0d] transition-colors duration-300" />
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <YoutubeIcon size={15} className="text-[#ff4444]" />
                  Subscribe for Release
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          )}
        </motion.div>

        {/* Social Connections & Media Links Bar */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-gray-200/80 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff0000] flex items-center justify-center flex-shrink-0">
              <YoutubeIcon size={22} />
            </div>
            <div>
              <h4 className="font-bold text-[#134c2c] text-sm">
                ReLoop Sciences Official Media
              </h4>
              <p className="text-xs text-gray-500">
                Follow our official channels & direct communications
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* YouTube Channel */}
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff0000] hover:bg-[#cc0000] text-white text-xs font-semibold transition-colors duration-200 shadow-sm"
            >
              <YoutubeIcon size={15} />
              YouTube Channel
              <ArrowUpRight size={13} />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a66c2] hover:bg-[#084e96] text-white text-xs font-semibold transition-colors duration-200 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
              <ArrowUpRight size={13} />
            </a>

            {/* Email */}
            <a
              href={email}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134c2c] hover:bg-[#2da021] text-white text-xs font-semibold transition-colors duration-200 shadow-sm"
            >
              <Mail size={14} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
