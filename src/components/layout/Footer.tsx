"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight, ArrowUp, Send } from "lucide-react";

const footerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/challenges", label: "The Challenges" },
  { href: "/pilot", label: "Pilot Programme" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0c2a19] text-white overflow-hidden pt-10 pb-4 border-t border-emerald-900/50">
      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2da021] via-[#f88a0d] to-[#2da021]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        {/* Top Call-to-Action & Newsletter Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-emerald-900/40 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-[#f88a0d] text-xs font-semibold tracking-wide">
              Circular Economy for Life Sciences
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Ready to pioneer sustainability in your laboratory?
            </h3>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-orange-950/20 group whitespace-nowrap"
            >
              Partner With Us
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-full min-h-[42px] px-4 py-2 pr-10 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-white placeholder:text-emerald-300/40 text-xs focus:outline-none focus:border-[#2da021] transition-colors"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full bg-[#2da021] hover:bg-[#236e57] text-white flex items-center justify-center transition-colors"
              >
                <Send size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Compact Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6 border-b border-emerald-900/40">
          {/* Brand Logo & Subtitle */}
          <div className="space-y-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="Reloop Sciences Logo"
                width={300}
                height={75}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling;
                  if (sibling) sibling.classList.remove('hidden');
                  if (sibling) sibling.classList.add('flex');
                }}
              />
              <div className="hidden items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#2da021] text-white flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                  </svg>
                </div>
                <span className="text-base font-black tracking-widest uppercase text-white">
                  RELOOP <span className="text-[#f88a0d]">SCIENCES</span>
                </span>
              </div>
            </Link>
            <p className="text-xs text-emerald-300/50">
              Based in India
            </p>
          </div>

          {/* Quick Page Links */}
          <ul className="flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-wider text-emerald-200/80">
            {footerNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Connect Section */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f88a0d]">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              <a
                href="mailto:hello@reloopsciences.com"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-[#2da021] hover:border-[#2da021] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300/50">
          <p>© {new Date().getFullYear()} Reloop Sciences. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-emerald-200 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-emerald-200 cursor-pointer transition-colors">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-emerald-900/40 hover:bg-[#f88a0d] text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-300 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
