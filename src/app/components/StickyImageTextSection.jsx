"use client";

import Image from "next/image";

/**
 * StickyImageTextSection — Reusable component for Sections 5 and 6.
 *
 * Props:
 *  - items:       Array of { id, title, image }
 *  - badge:       ReactNode — the pill/badge element (icon + label)
 *  - heading:     string — the h2 text
 *  - description: string — paragraph text
 *  - reverse:     boolean — if true, images on left, text on right (Section 6 desktop)
 *  - bgImage:     string — section background image URL
 *
 * Requirements implemented:
 *  - Hover effect: Subtle Scale + Shadow Lift (identical across Sections 5 & 6)
 *  - Sticky behavior: Text stays in view while images scroll; bounded strictly
 *    by the images container so it never extends below the last image.
 *  - No parent overflow issues breaking position: sticky.
 *  - Full responsiveness with centered text on mobile and clean column layouts on desktop.
 */
export default function StickyImageTextSection({
  items = [],
  badge,
  heading = "",
  description = "",
  reverse = false,
  bgImage = "",
}) {
  if (!items || items.length === 0) return null;

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-3.5 py-12 lg:px-10 lg:py-20"
      style={bgImage ? { backgroundImage: `url('${bgImage}')` } : undefined}
    >
      {/* Dark overlay for section-level readability in both themes */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      {/* Mobile layout: stacked & centered */}
      <div className="relative z-10 flex w-full flex-col items-center gap-8 lg:hidden">
        {/* Text content — mobile: centered */}
        <div className="flex flex-col items-center gap-4 text-center">
          {badge}
          <h2 className="text-2xl font-bold italic leading-tight text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="max-w-lg text-center text-sm leading-relaxed text-gray-200 sm:text-base">
            {description}
          </p>
        </div>

        {/* Images — mobile */}
        <div className="flex w-full flex-col gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-black/70"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient for text readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
              <h3 className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-lg font-bold text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-102">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout: side by side with sticky text (bounded by images column) */}
      <div
        className={`relative z-10 hidden w-full gap-12 lg:flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Sticky text column — self-stretch ensures height matches the image column so sticky stops at the bottom */}
        <div className="w-1/2 self-stretch">
          <div className="sticky top-28 flex flex-col items-start gap-5 text-left">
            {badge}
            <h2 className="text-3xl font-bold italic leading-tight text-white xl:text-4xl">
              {heading}
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-gray-200 lg:text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Images column — desktop: stacked vertically */}
        <div className="flex w-1/2 flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-black/70"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="50vw"
              />
              {/* Gradient for text readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xl font-bold text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-102">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
