"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import { flushSync } from "react-dom";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  const saved = localStorage.getItem("theme");
  return saved === "dark" || saved === "light" ? saved : "light";
}

function getServerSnapshot() {
  return "light";
}

function subscribeMounted() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getMountedServerSnapshot() {
  return false;
}

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(
    subscribeMounted,
    getMountedSnapshot,
    getMountedServerSnapshot
  );
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = async (coords) => {
    // Prevent overlapping transitions from rapid repeated clicks
    if (isTransitioningRef.current) return;

    const nextTheme = theme === "light" ? "dark" : "light";

    const applyThemeChange = () => {
      localStorage.setItem("theme", nextTheme);
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      window.dispatchEvent(new Event("storage"));
    };

    // Fallback: If View Transitions is not supported, coords missing, or user prefers reduced motion
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
        Math.max(y, window.innerHeight - y)
      );

      // Inject dynamic circular keyframes directly for ::view-transition-new(root)
      let styleTag = document.getElementById("theme-circular-transition");
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "theme-circular-transition";
        document.head.appendChild(styleTag);
      }
      styleTag.textContent = `
        @keyframes theme-circle-expand {
          from {
            clip-path: circle(0px at ${x}px ${y}px);
          }
          to {
            clip-path: circle(${endRadius}px at ${x}px ${y}px);
          }
        }
        ::view-transition-new(root) {
          animation: theme-circle-expand 450ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `;

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          applyThemeChange();
        });
      });

      try {
        await transition.finished;
      } finally {
        if (styleTag && styleTag.parentNode) {
          styleTag.parentNode.removeChild(styleTag);
        }
      }
    } catch {
      // Safe fallback if animation is interrupted or cancelled
    } finally {
      isTransitioningRef.current = false;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
