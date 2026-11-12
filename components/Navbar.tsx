"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#destinations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Hotels", href: "#hotels" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black shadow-lg"
          : "bg-black"
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-8 flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-2 -ml-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>

        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15em] text-white"
        >
          Kaya Shiners
          <span className="block text-[10px] sm:text-xs tracking-[0.2em] font-normal text-white/60 -mt-0.5">
            Tours &amp; Safari
          </span>
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 text-white"
        >
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="font-heading text-lg md:text-xl font-bold tracking-wide">
            Book
          </span>
        </a>
      </div>

      {mobileOpen && (
        <div className="bg-black border-t border-white/10">
          <div className="max-w-content mx-auto px-4 sm:px-8 py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white text-2xl font-heading py-3 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
