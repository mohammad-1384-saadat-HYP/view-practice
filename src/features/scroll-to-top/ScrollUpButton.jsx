"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 flex size-11 cursor-pointer items-center justify-center rounded-full border border-gold-500/40 bg-paper/85 text-gold-700 shadow-lg shadow-gold-950/10 backdrop-blur-md transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-ink hover:shadow-gold-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 dark:border-gold-500/30 dark:bg-night-900/85 dark:text-gold-400 dark:shadow-[0_8px_25px_rgba(0,0,0,0.6)] dark:hover:text-night-950 dark:hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] dark:focus-visible:ring-offset-night-950 sm:bottom-8 sm:right-8 sm:size-12"
        >
          <FaChevronUp className="size-4 sm:size-4.5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
