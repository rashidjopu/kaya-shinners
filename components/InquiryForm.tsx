"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle } from "lucide-react";
import { destinations } from "@/data/destinations";

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  dates: string;
  guests: string;
  message: string;
}

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const formValues = watch();

  const buildWhatsAppMessage = (data: FormData) => {
    const dest = destinations.find((d) => d.id === data.destination);
    const lines = [
      `Hi Kaya Shiners! I'd like to inquire about:`,
      ``,
      `Destination: ${dest?.name || data.destination || "Not specified"}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      data.dates ? `Preferred Dates: ${data.dates}` : "",
      data.guests ? `Number of Guests: ${data.guests}` : "",
      data.message ? `Message: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return encodeURIComponent(lines);
  };

  const onEmailSubmit = async (data: FormData) => {
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try WhatsApp instead.");
    }
  };

  const onWhatsAppSubmit = () => {
    const msg = buildWhatsAppMessage(formValues);
    window.open(`https://wa.me/254768811535?text=${msg}`, "_blank");
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Inquiry Sent!
            </h2>
            <p className="text-white/60">
              Thank you for your interest. We&apos;ll get back to you within 24
              hours with a custom quote for your adventure.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 text-accent hover:text-white text-sm underline transition-colors"
            >
              Send another inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Plan Your Adventure
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Tell us about your dream experience and we&apos;ll craft the perfect
            itinerary for you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onEmailSubmit)}
          className="border border-white/10 p-6 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-white/60 text-sm mb-1.5">
                Full Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors"
                placeholder="+254 768 811 535"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-1.5">
                Destination
              </label>
              <select
                id="destination-select"
                {...register("destination")}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="" className="bg-black">
                  Select a destination
                </option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.id} className="bg-black">
                    {d.name} — {d.location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-1.5">
                Preferred Dates
              </label>
              <input
                type="date"
                {...register("dates")}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-1.5">
                Number of Guests
              </label>
              <select
                {...register("guests")}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="" className="bg-black">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                  <option key={n} value={String(n)} className="bg-black">
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-white/60 text-sm mb-1.5">
              Message / Special Requests
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Tell us about your ideal adventure..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-white text-black px-8 py-4 font-heading text-lg font-bold tracking-wide transition-colors hover:bg-white/90 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send via Email
            </button>
            <button
              type="button"
              onClick={onWhatsAppSubmit}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-heading text-lg font-bold tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Send via WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
