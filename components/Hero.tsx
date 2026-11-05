"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const heroImages = [
  "/images/hero-new/hero-maasai.jpg",
  "/images/hero-new/hero-waterfall.jpg",
  "/images/hero-new/hero-mountain.jpg",
  "/images/hero-new/hero-sunset.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt="Kenya safari experience"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-[1]" />

      <div className="absolute top-1/3 left-0 right-0 -translate-y-1/2 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-[0.15em] mb-4">
            Kaya Shinners
          </h2>
          <p className="text-accent text-xs sm:text-sm tracking-[0.3em] uppercase mb-8">
            Safari &amp; Tour
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="max-w-content mx-auto px-4 sm:px-8 pb-12 md:pb-20">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] max-w-3xl">
            Discover the
            <br />
            <span className="font-normal">Kenyan Coast</span>
          </h1>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
