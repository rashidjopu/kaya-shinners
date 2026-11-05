"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="py-4 text-center text-sm text-body-text/50 tracking-wider">
          Kaya Shinners &nbsp;·&nbsp; Tour &amp; Safaris
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
            Discover the experience
          </h2>
          <p className="font-heading text-lg md:text-xl font-semibold text-heading-text mb-6">
            Get ready to explore the indescribable wild beauty of Kenya&apos;s coast
          </p>
          <p className="text-body-text leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Nestled along the stunning Kenyan coastline, Kaya Shinners Tour and Safaris
            is your gateway to extraordinary adventures. From the dramatic plains of Tsavo
            to the pristine beaches of Watamu, from sacred forests to adrenaline-pumping
            water sports, we curate authentic experiences that reveal the soul of
            coastal Kenya. Every journey with us is designed to leave you breathless.
          </p>

          <a href="#destinations" className="explore-link mt-10 inline-flex">
            Getting there
          </a>
        </motion.div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-8 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            The Kaya Shinners Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image
                src="/images/borabora-park/giraffe-2.jpeg"
                alt="Wildlife safari experience"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Every comfort included
            </h3>
            <ul className="space-y-2 text-body-text text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Professional guides on every excursion</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Comfortable transport throughout</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />All park and entry fees included</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Customised itineraries for every group</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image
                src="/images/wasini-island/wasini-2.jpeg"
                alt="Ocean and island adventures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              So much to discover
            </h3>
            <ul className="space-y-2 text-body-text text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />16 unique experiences across the coast</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Safari, beach, adventure &amp; cultural tours</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Sacred forests and ancient ruins</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Water sports and wildlife encounters</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image
                src="/images/kongo-river/river-2.jpeg"
                alt="Journey and travel logistics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Your journey handled
            </h3>
            <ul className="space-y-2 text-body-text text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Airport meet and greets</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Hotel pickup and drop-off</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />Flexible scheduling for groups</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />WhatsApp support throughout your trip</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
