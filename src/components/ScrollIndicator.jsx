"use client";

import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator({ targetId = "main-content" }) {
  const handleScroll = () => {
    const target = document.getElementById(targetId) || document.querySelector("main");
    if (!target) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative z-20 pb-6 sm:pb-8 flex justify-center">
      <button
        type="button"
        onClick={handleScroll}
        aria-label="اسکرول به بخش محتوای صفحه"
        className="group flex size-10 sm:size-11 items-center justify-center rounded-full border border-gold-400/40 bg-black/40 text-gold-400 shadow-lg shadow-black/40 backdrop-blur-xs transition-all duration-300 hover:border-gold-400 hover:bg-gold-500 hover:text-black hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <FaChevronDown
          aria-hidden="true"
          className="size-3.5 sm:size-4 transition-transform duration-300 animate-subtle-float"
        />
      </button>
    </div>
  );
}
