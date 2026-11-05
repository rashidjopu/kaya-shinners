"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { destinations } from "@/data/destinations";

const allImages = destinations.flatMap((d) =>
  d.images.map((src) => ({ src, destination: d.name }))
);

const uniqueNames = [...new Set(destinations.map((d) => d.name))];
const filters = ["All", ...uniqueNames.slice(0, 8)];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? allImages
      : allImages.filter((img) => img.destination === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % filtered.length : null
    );

  return (
    <section id="gallery" className="section-padding bg-warm-white">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Captured Moments
          </h2>
          <p className="text-body-text max-w-2xl mx-auto">
            Glimpses of the unforgettable adventures awaiting you on the Kenyan coast.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors border ${
                activeFilter === f
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-body-text border-warm-gray hover:border-black"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.destination}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 text-white/70 hover:text-white z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 text-white/70 hover:text-white z-10"
            >
              <ChevronRight size={40} />
            </button>
            <div
              className="relative max-w-4xl max-h-[80vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].destination}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
                sizes="90vw"
              />
              <p className="text-white/60 text-center mt-4 text-sm">
                {filtered[lightboxIndex].destination} &mdash;{" "}
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
