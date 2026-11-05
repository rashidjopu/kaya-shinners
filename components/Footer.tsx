"use client";

import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white/60">
      <div className="max-w-content mx-auto px-4 sm:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white tracking-[0.1em] mb-4">
              Kaya Shinners
            </h3>
            <p className="text-sm leading-relaxed">
              Tour &amp; Safaris — your gateway to extraordinary adventures
              along Kenya&apos;s stunning coastline.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-5 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Experiences", "Gallery", "About", "Contact"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-5 font-medium">
              Experiences
            </h4>
            <ul className="space-y-3">
              {[
                "Tsavo East & West",
                "Shimba Hills",
                "Kaya Kinondo",
                "Jetski Riding",
                "Funzi Island",
                "Wasini Island",
                "Watamu",
                "Mombasa City Tour",
              ].map((name) => (
                <li key={name} className="text-sm">{name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-5 font-medium">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone size={14} className="mt-0.5 shrink-0" />
                +254 768 811 535
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={14} className="mt-0.5 shrink-0" />
                rashidkjopu@gmail.com
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Diani Beach, South Coast, Kenya
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Kaya Shinners Tour &amp; Safaris.
            All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Crafted on the Kenyan Coast
          </p>
        </div>
      </div>
    </footer>
  );
}
