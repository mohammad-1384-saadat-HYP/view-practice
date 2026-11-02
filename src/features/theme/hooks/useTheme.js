"use client";

import { useEffect, useRef, useSyncExternalStore, useCallback } from "react";
import { flushSync } from "react-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTheme, setTheme } from "../themeSlice";

const emptySubscribe = () => () => {};
const getMountedSnapshot = () => true;
const getMountedServerSnapshot = () => false;

export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const isTransitioningRef = useRef(false);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    getMountedSnapshot,
    getMountedServerSnapshot,
  );

  // Synchronize initial theme from localStorage upon mounting
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if ((saved === "dark" || saved === "light") && saved !== theme) {
      dispatch(setTheme(saved));
    }
  }, [dispatch, theme]);

  // Synchronize document.documentElement class with theme state
  useEffect(() => {
    const isDark = theme === "dark";
    if (document.documentElement.classList.contains("dark") !== isDark) {
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [theme]);

  // Listen to cross-tab storage changes
  useEffect(() => {
    const handleStorage = (e) => {
      if (
        e.key === "theme" &&
        (e.newValue === "dark" || e.newValue === "light")
      ) {
        dispatch(setTheme(e.newValue));
        document.documentElement.classList.toggle(
          "dark",
          e.newValue === "dark",
        );
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [dispatch]);

  const toggleTheme = useCallback(
    async (coords) => {
      if (isTransitioningRef.current) return;

      const nextTheme = theme === "light" ? "dark" : "light";

      const applyThemeChange = () => {
        dispatch(setTheme(nextTheme));
        localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
      };

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (
        !coords ||
        typeof document === "undefined" ||
        !document.startViewTransition ||
        prefersReducedMotion
      ) {
        applyThemeChange();
        return;
      }

      try {
        isTransitioningRef.current = true;
        const { x, y } = coords;
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        );

        document.documentElement.style.setProperty("--theme-x", `${x}px`);
        document.documentElement.style.setProperty("--theme-y", `${y}px`);
        document.documentElement.style.setProperty(
          "--theme-r",
          `${endRadius}px`,
        );

        const transition = document.startViewTransition(() => {
          flushSync(() => {
            applyThemeChange();
          });
        });

        try {
          await transition.ready;
          const animation = document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 450,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            },
          );
          await animation.finished;
        } catch {
          await transition.finished;
        }
      } catch {
        // Safe fallback if animation is interrupted
      } finally {
        isTransitioningRef.current = false;
      }
    },
    [dispatch, theme],
  );

  return { theme, toggleTheme, mounted };
}
