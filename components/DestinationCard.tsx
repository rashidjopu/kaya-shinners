"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Destination } from "@/data/destinations";

interface Props {
  destination: Destination;
  index: number;
  reverse?: boolean;
}

export default function DestinationCard({ destination, index, reverse }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reverse ? "md:direction-rtl" : ""
      }`}
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${reverse ? "md:order-2" : ""}`}>
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-xs uppercase tracking-[0.2em] text-body-text/50 mb-3">
          {destination.location}
        </p>
        <h3 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">
          {destination.name}
        </h3>
        <p className="text-body-text leading-relaxed mb-6">
          {destination.description}
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const select = document.getElementById(
              "destination-select"
            ) as HTMLSelectElement | null;
            if (select) {
              select.value = destination.id;
              select.dispatchEvent(new Event("change", { bubbles: true }));
            }
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="explore-link"
        >
          Explore
        </a>
      </div>
    </motion.div>
  );
}
