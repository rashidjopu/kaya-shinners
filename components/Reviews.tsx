"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Send, CheckCircle, MessageSquare } from "lucide-react";
import { destinations } from "@/data/destinations";
import { supabase } from "@/lib/supabase";

interface Review {
  id: number;
  name: string;
  location: string;
  trip: string;
  rating: number;
  text: string;
  created_at: string;
}

function StarRating({
  rating,
  onRate,
  interactive = false,
}: {
  rating: number;
  onRate?: (r: number) => void;
  interactive?: boolean;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate?.(star)}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
          className={interactive ? "cursor-pointer" : "cursor-default"}
          disabled={!interactive}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          <Star
            size={interactive ? 24 : 16}
            className={`transition-colors ${
              star <= (hover || rating)
                ? "text-accent fill-accent"
                : "text-white/20"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [trip, setTrip] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const fetchReviews = useCallback(async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);
    if (data) setReviews(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text || rating === 0) return;

    setSubmitting(true);

    const tripName = trip
      ? destinations.find((d) => d.id === trip)?.name || trip
      : "General";

    const { error } = await supabase.from("reviews").insert({
      name,
      location,
      trip: tripName,
      rating,
      text,
    });

    if (!error) {
      setSubmitted(true);
      setName("");
      setLocation("");
      setTrip("");
      setRating(0);
      setText("");
      fetchReviews();
      setTimeout(() => setSubmitted(false), 3000);
    }
    setSubmitting(false);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="reviews" className="section-padding bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Guest Feedback
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Share Your Experience
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Travelled with us? We&apos;d love to hear about your adventure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-6">
              Write a Review
            </h3>

            {submitted ? (
              <div className="border border-white/10 p-10 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-white font-heading text-xl font-semibold mb-2">
                  Thank you!
                </p>
                <p className="text-white/50 text-sm">
                  Your review has been posted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">
                      Your Name *
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">
                      Location
                    </label>
                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1.5">
                    Experience
                  </label>
                  <select
                    value={trip}
                    onChange={(e) => setTrip(e.target.value)}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="" className="bg-black">
                      Select your experience
                    </option>
                    {destinations.map((d) => (
                      <option key={d.id} value={d.id} className="bg-black">
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Rating *
                  </label>
                  <StarRating
                    rating={rating}
                    onRate={setRating}
                    interactive
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    rows={4}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-white text-black px-8 py-4 font-heading text-lg font-bold tracking-wide transition-colors hover:bg-white/90 flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-50"
                >
                  <Send size={18} />
                  {submitting ? "Posting..." : "Post Review"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-6">
              Recent Reviews
            </h3>

            {loading ? (
              <div className="border border-white/10 p-10 text-center">
                <p className="text-white/30 text-sm">Loading reviews...</p>
              </div>
            ) : reviews.length === 0 ? (
              <div className="border border-white/10 p-10 text-center">
                <MessageSquare
                  size={40}
                  className="text-white/10 mx-auto mb-4"
                />
                <p className="text-white/40 text-sm">
                  No reviews yet. Be the first to share your experience!
                </p>
              </div>
            ) : (
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-white/10 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <StarRating rating={review.rating} />
                      <span className="text-white/30 text-xs">
                        {formatDate(review.created_at)}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {review.name}
                        </p>
                        {review.location && (
                          <p className="text-white/30 text-xs">
                            {review.location}
                          </p>
                        )}
                      </div>
                      <span className="text-accent text-xs tracking-wider uppercase">
                        {review.trip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
