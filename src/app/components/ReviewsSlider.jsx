"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiUser } from "react-icons/fi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import "swiper/css";

export default function ReviewsSlider({ items = [], className = "" }) {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative w-full max-w-7xl overflow-hidden py-4 ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="گردونه نظرات مشتریان گالری طلا"
    >
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 lg:w-36 bg-gradient-to-r from-paper via-paper/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 lg:w-36 bg-gradient-to-l from-paper via-paper/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />

      <Swiper
        dir="rtl"
        modules={[Autoplay]}
        loop={items.length > 2}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={16}
        speed={900}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 28,
          },
        }}
        className="h-full w-full !py-6 !px-2"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
            {({ isActive }) => (
              <div
                className={`flex h-full min-h-[220px] flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-500 backdrop-blur-md ${
                  isActive
                    ? "scale-100 opacity-100 border-2 border-gold-400 bg-paper/90 shadow-2xl shadow-gold-500/15 dark:bg-night-900/90"
                    : "scale-95 opacity-55 border border-gold-500/25 bg-paper/60 hover:opacity-80 dark:bg-night-900/50"
                }`}
              >
                {/* Header: User avatar + Name + Quote icon */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-500 shadow-sm">
                        <FiUser className="size-5" />
                      </div>
                      <h3 className="text-base font-bold text-ink dark:text-paper lg:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <BiSolidQuoteAltRight
                      className={`size-7 shrink-0 transition-colors ${
                        isActive ? "text-gold-500" : "text-gold-500/50"
                      }`}
                    />
                  </div>

                  {/* Decorative divider */}
                  <span className="mb-4 block h-px w-full bg-gradient-to-l from-gold-500/40 via-gold-500/10 to-transparent" />

                  {/* Review comment */}
                  <p className="text-sm leading-relaxed text-ink/80 dark:text-paper/80 sm:text-base">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
