"use client";

import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider({ items = [], className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (swiperInstance) {
        swiperInstance.slideToLoop(index);
      }
    },
    [swiperInstance]
  );

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="گردونه معرفی کالکشن‌های طلا"
    >
      <div className="relative min-h-[440px] w-full lg:min-h-[520px]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={items.length > 1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className="h-full w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id} className="relative">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title1 ? `${item.title1} ${item.title2 || ""}` : "اسلاید"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  priority={index === 0}
                />
                {/* Overlay for text readability in both light & dark themes */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 lg:bg-gradient-to-l lg:from-black/95 lg:via-black/65 lg:to-black/25" />
              </div>

              {/* Slide content — left padding reserved for desktop thumbnails in RTL */}
              <div className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-6 text-white sm:p-8 lg:min-h-[520px] lg:p-12">
                <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl pl-0 lg:pl-36 xl:pl-44">
                  {item.head && (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold-400 lg:text-sm">
                      {item.head}
                    </p>
                  )}
                  <div className="mb-2">
                    <span className="inline-block h-0.5 w-16 bg-gradient-to-l from-gold-400 to-transparent" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold italic leading-tight lg:text-4xl">
                    {item.title1 && (
                      <span className="text-gold-400">{item.title1} </span>
                    )}
                    {item.title2 || ""}
                  </h2>
                  {item.description && (
                    <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-200 lg:text-base">
                      {item.description}
                    </p>
                  )}
                  {item.url && (
                    <div>
                      <Link
                        href={item.url}
                        className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
                      >
                        <span>مشاهده جزئیات</span>
                        <GoArrowUpRight className="size-4 -scale-x-100" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Desktop Vertical Image Pagination — Inside Active Slide Frame on the Left for RTL */}
        {items.length > 1 && (
          <div
            className="pointer-events-auto absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 rounded-2xl border border-white/15 bg-black/45 p-2.5 shadow-2xl backdrop-blur-md lg:flex"
            role="tablist"
            aria-label="ناوبری تصاویر بندانگشتی اسلاید"
          >
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`برو به اسلاید ${index + 1}: ${item.title1 || ""} ${item.title2 || ""}`.trim()}
                  onClick={() => goToSlide(index)}
                  className={`group relative h-18 w-26 overflow-hidden rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 xl:h-20 xl:w-28 ${
                    isActive
                      ? "scale-105 border-2 border-gold-400 opacity-100 shadow-lg shadow-gold-500/30"
                      : "border border-white/20 opacity-60 hover:scale-102 hover:border-gold-400/60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`تصویر بندانگشتی ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="120px"
                  />
                  {/* Subtle dark tint over inactive thumbnails */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/35 transition-opacity duration-300 group-hover:bg-black/10" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
