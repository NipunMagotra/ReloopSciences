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
  videoId = "", // Empty default — no unwanted default video links
  youtubeChannelUrl = "https://www.youtube.com",
  linkedinUrl = "#",
  email = "mailto:hello@reloopsciences.com",
}: MediaVideoSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 bg-offwhite border-b border-gray-200/60 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="eyebrow block">Media & Highlights</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Watch How We&apos;re Closing the Loop
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore our vision, laboratory recovery process, and circular economy initiatives across India.
          </p>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border-2 border-emerald-950/15 shadow-2xl bg-gradient-to-br from-[#0c2a19] via-[#134c2c] to-[#0c2a19] mb-10 flex flex-col items-center justify-center text-white p-8 text-center"
        >
          {videoId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0`}
              title="Reloop Sciences Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="space-y-4 max-w-md">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto text-[#f88a0d] shadow-lg">
                <Play size={28} className="fill-[#f88a0d] ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Official Video Highlights
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Reloop Sciences official video overview. Pass your video ID to embed directly.
              </p>
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
                Reloop Sciences Official Media
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
