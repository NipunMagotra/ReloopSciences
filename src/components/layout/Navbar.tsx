"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 md:h-18">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Reloop Sciences Logo"
            width={180}
            height={40}
            priority
            className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
            onError={(e) => {
              // Hide image and fallback to text if logo.png is not yet added
              e.currentTarget.style.display = 'none';
              const sibling = e.currentTarget.nextElementSibling;
              if (sibling) sibling.classList.remove('hidden');
            }}
          />
          <span className="hidden text-charcoal font-semibold text-sm tracking-[0.12em] uppercase hover:text-green transition-colors duration-300">
            Reloop Sciences
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium text-green hover:text-green-dark transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-offwhite/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base text-charcoal-light hover:text-charcoal transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-border">
                <Link
                  href="/contact"
                  className="block text-base font-medium text-green"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Conversation →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
