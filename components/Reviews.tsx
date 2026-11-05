"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "London, UK",
    rating: 5,
    text: "An absolutely unforgettable experience! The Tsavo safari was beyond anything I could have imagined. Our guide was incredibly knowledgeable, and we saw the famous red elephants up close. Kaya Shinners made everything seamless from airport pickup to the final goodbye.",
    trip: "Tsavo East & West Safari",
  },
  {
    name: "James & Linda K.",
    location: "Toronto, Canada",
    rating: 5,
    text: "We booked the Wasini Island day trip and it was the highlight of our honeymoon. Swimming with dolphins, snorkelling over coral reefs, and the Swahili seafood lunch was incredible. The team went above and beyond to make our day special.",
    trip: "Wasini Island Excursion",
  },
  {
    name: "Marco T.",
    location: "Milan, Italy",
    rating: 5,
    text: "The quad bike adventure through Diani was pure adrenaline! Great guides, well-maintained bikes, and the route through local villages and along the beach was stunning. Highly recommend for anyone looking for something beyond the usual tourist activities.",
    trip: "Quad Bike Diani",
  },
  {
    name: "Amina H.",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "I took my family to Shimba Hills for a weekend hike and it was magical. The Sheldrick Falls trail was breathtaking and the kids loved spotting the sable antelopes. Kaya Shinners organised everything perfectly — transport, guide, and packed lunches.",
    trip: "Shimba Hills Hiking",
  },
  {
    name: "David & Rachel P.",
    location: "Sydney, Australia",
    rating: 5,
    text: "From the Mombasa city tour to the sand dunes of Mambrui, every single day was packed with adventure. The WhatsApp support was brilliant — any question answered within minutes. We felt taken care of the entire trip. Already planning our return!",
    trip: "Coastal Explorer Package",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section className="section-padding bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real stories from travellers who explored Kenya&apos;s coast with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="border border-white/10 p-8 sm:p-12 md:p-16 text-center">
            <Quote size={40} className="text-accent/30 mx-auto mb-8" />

            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-accent fill-accent"
                />
              ))}
            </div>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="mb-2">
              <p className="text-white font-heading text-lg font-semibold">
                {review.name}
              </p>
              <p className="text-white/40 text-sm">{review.location}</p>
            </div>
            <p className="text-accent text-xs tracking-[0.2em] uppercase">
              {review.trip}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 hover:border-white flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 hover:border-white flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
