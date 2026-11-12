"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, MapPin, Wifi, UtensilsCrossed, Waves, Sparkles } from "lucide-react";
import { hotels } from "@/data/hotels";

const amenityIcons: Record<string, typeof Wifi> = {
  WiFi: Wifi,
  Pool: Waves,
  Restaurant: UtensilsCrossed,
  Spa: Sparkles,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={
            star <= Math.round(rating)
              ? "text-accent fill-accent"
              : "text-white/20"
          }
        />
      ))}
      <span className="text-white/50 text-xs ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Hotels() {
  return (
    <section id="hotels" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Accommodation
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Stay in Diani
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Handpicked hotels and resorts around Diani Beach for every budget
            — from boutique guesthouses to luxury oceanfront retreats.
          </p>
        </motion.div>

        {hotels.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 p-12 text-center"
          >
            <MapPin size={40} className="text-white/10 mx-auto mb-4" />
            <p className="text-white/40 text-sm mb-2">
              Hotel listings coming soon.
            </p>
            <p className="text-white/25 text-xs">
              We&apos;re curating the best stays around Diani Beach for you.
            </p>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, i) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-white/10 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 text-accent text-xs font-semibold tracking-wider">
                    {hotel.priceRange}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-lg font-bold text-white leading-tight">
                      {hotel.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-white/40 text-xs mb-3">
                    <MapPin size={12} />
                    {hotel.location}
                  </div>

                  <StarRating rating={hotel.rating} />

                  <p className="text-white/50 text-sm leading-relaxed mt-3 mb-4">
                    {hotel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {hotel.amenities.slice(0, 4).map((amenity) => {
                      const Icon = amenityIcons[amenity];
                      return (
                        <span
                          key={amenity}
                          className="flex items-center gap-1.5 text-white/30 text-xs border border-white/10 px-2 py-1"
                        >
                          {Icon && <Icon size={12} />}
                          {amenity}
                        </span>
                      );
                    })}
                  </div>

                  <a
                    href={hotel.bookingUrl || "#contact"}
                    className="block text-center bg-white text-black px-4 py-3 font-heading text-sm font-bold tracking-wide transition-colors hover:bg-white/90"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
