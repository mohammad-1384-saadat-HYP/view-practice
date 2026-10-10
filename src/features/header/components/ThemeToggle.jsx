"use client";

import { useTheme } from "@/context/ThemeContext";
import { AnimatePresence, motion } from "motion/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className="size-8.5 rounded-full border border-gold-500/30 p-2 opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex size-8.5 cursor-pointer items-center justify-center rounded-full border border-gold-500/40 bg-black/5 text-gold-600 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 dark:bg-paper/10 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-ink"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <FaSun className="size-4" />
          ) : (
            <FaMoon className="size-3.5" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
