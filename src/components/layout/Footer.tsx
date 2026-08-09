"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight, ArrowUp, Send } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0c2a19] text-white overflow-hidden pt-16 pb-8 border-t border-emerald-900/50">
      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2da021] via-[#f88a0d] to-[#2da021]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        {/* Top Call-to-Action & Newsletter Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-emerald-900/40 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-[#f88a0d] text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#2da021] animate-pulse" />
              Circular Economy for Life Sciences
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ready to pioneer sustainability in your laboratory?
            </h3>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-orange-950/20 group"
            >
              Start a Conversation
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-full min-h-[48px] px-4 py-2 pr-12 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-white placeholder:text-emerald-300/40 text-sm focus:outline-none focus:border-[#2da021] transition-colors"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 h-9 rounded-full bg-[#2da021] hover:bg-[#236e57] text-white flex items-center justify-center transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Reloop Sciences Logo"
                width={170}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling;
                  if (sibling) sibling.classList.remove('hidden');
                }}
              />
              <span className="hidden text-lg font-bold tracking-wider uppercase text-white">
                Reloop Sciences
              </span>
            </Link>
            <p className="text-sm text-emerald-200/70 leading-relaxed max-w-sm">
              Closing the loop on laboratory plastic waste through measurable, transparent, and circular recovery pathways.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#f88a0d]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/solutions", label: "Our Approach" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/70 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#f88a0d]">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Sustainability Assessment",
                "Circular Economy Pilot",
                "Traceability & Reporting",
                "Stakeholder Engagement",
              ].map((item, idx) => (
                <li key={idx} className="text-emerald-100/70 hover:text-white transition-colors duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#f88a0d]">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@reloopsciences.com"
                className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-[#2da021] hover:border-[#2da021] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-[#2da021] hover:border-[#2da021] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              </a>
            </div>
            <p className="text-xs text-emerald-300/50 pt-2">
              Based in the UK & EU
            </p>
          </div>
        </div>

        {/* Big Bold Brand Watermark Background Text */}
        <div className="py-6 border-t border-emerald-900/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300/50">
          <p>© {new Date().getFullYear()} Reloop Sciences. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-emerald-200 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-emerald-200 cursor-pointer transition-colors">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-emerald-900/40 hover:bg-[#f88a0d] text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-300 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Display Watermark (Train Marquee) */}
        <div className="pt-8 overflow-hidden select-none pointer-events-none opacity-10 flex w-full">
          <div
            className="reloop-marquee-track"
            style={{ animation: "marquee-scroll 25s linear infinite" }}
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-5xl sm:text-7xl md:text-9xl font-black tracking-widest text-white uppercase pr-16"
              >
                RELOOP SCIENCES
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="reloop-marquee-track"
            style={{ animation: "marquee-scroll 25s linear infinite" }}
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={`dup-${i}`}
                className="text-5xl sm:text-7xl md:text-9xl font-black tracking-widest text-white uppercase pr-16"
              >
                RELOOP SCIENCES
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
