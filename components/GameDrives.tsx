"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Binoculars, Sunrise, Bird } from "lucide-react";

export default function GameDrives() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="/images/game-drives/safari-vehicles.jpg"
              alt="Safari vehicles on a game drive in Tsavo National Park"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              Wildlife Safari
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-6 leading-tight">
              Game
              <br />
              <span className="font-normal">Drives</span>
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Tsavo National Park is Kenya&apos;s largest and most untamed
              safari destination — a haven of dramatic landscapes and rich
              biodiversity.
            </p>
            <p className="text-body leading-relaxed mb-8">
              Head out on twice-daily game drives and spot the famous red
              elephants of Tsavo, along with lions, leopards, giraffes,
              cheetahs, buffalo, and wildebeest roaming free across the vast
              wilderness. Bird lovers can marvel at over 500 bird species, making
              Tsavo a true paradise for wildlife enthusiasts and adventurers
              alike.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Binoculars size={18} className="text-accent" />
                <span className="text-sm text-heading font-medium">
                  Big Five Sightings
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sunrise size={18} className="text-accent" />
                <span className="text-sm text-heading font-medium">
                  Twice-Daily Drives
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bird size={18} className="text-accent" />
                <span className="text-sm text-heading font-medium">
                  500+ Bird Species
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="explore-link inline-block mt-8 text-sm tracking-[0.15em] uppercase text-heading hover:text-accent transition-colors"
            >
              Book a Safari
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
