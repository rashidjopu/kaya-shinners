"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plane, Train, Building, Shield } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Airport Meet & Greet",
    description: "International and domestic airports",
  },
  {
    icon: Plane,
    title: "Domestic Flights",
    description: "Flights across Kenya with local carriers",
  },
  {
    icon: Train,
    title: "Train Tickets",
    description: "Nairobi or Mombasa to Tsavo",
  },
  {
    icon: Building,
    title: "Day-Use Rooms",
    description: "In Nairobi and Mombasa for long layovers",
  },
];

export default function TravelSection() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              Seamless Travel
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-6 leading-tight">
              Your Journey,
              <br />
              <span className="font-normal">Handled</span>
            </h2>
            <p className="text-body leading-relaxed mb-8">
              Our team are on hand to make travel effortless — from the moment
              you land to the second you depart. We take care of every detail so
              you can focus on the adventure.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {services.map((service) => (
                <div key={service.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
                    <service.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-heading mb-0.5">
                      {service.title}
                    </h4>
                    <p className="text-body text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-warm-gray">
              <p className="text-body text-sm">
                <span className="font-semibold text-heading">
                  Private charters
                </span>{" "}
                available for groups and special occasions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/travel/jambo-jet.jpg"
              alt="Domestic flight ready for boarding in Kenya"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
