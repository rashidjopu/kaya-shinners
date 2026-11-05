"use client";

import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-white section-padding">
      <div className="max-w-content mx-auto">
        {destinations.map((dest, i) => (
          <div key={dest.id} className="mb-20 md:mb-28 last:mb-0">
            <DestinationCard
              destination={dest}
              index={i}
              reverse={i % 2 === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
