"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import { flushSync } from "react-dom";

const themeChangeListeners = new Set();

function subscribe(callback) {
  themeChangeListeners.add(callback);
  const handleStorage = (e) => {
    if (!e || e.key === "theme") {
      callback();
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    themeChangeListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  return saved === "dark" || saved === "light" ? saved : "light";
}

function getServerSnapshot() {
  return "light";
}

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  mounted: false,
});

const emptySubscribe = () => () => {};
const getMountedSnapshot = () => true;
const getMountedServerSnapshot = () => false;

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getMountedSnapshot,
    getMountedServerSnapshot
  );
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const isDark = theme === "dark";
    if (document.documentElement.classList.contains("dark") !== isDark) {
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [theme]);

  const toggleTheme = async (coords) => {
    if (isTransitioningRef.current) return;

    const nextTheme = theme === "light" ? "dark" : "light";

    const applyThemeChange = () => {
      localStorage.setItem("theme", nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      themeChangeListeners.forEach((listener) => listener());
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
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.style.setProperty("--theme-x", `${x}px`);
      document.documentElement.style.setProperty("--theme-y", `${y}px`);
      document.documentElement.style.setProperty("--theme-r", `${endRadius}px`);

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
          }
        );
        await animation.finished;
      } catch {
        // Fallback to waiting for view transition to complete (driven by CSS keyframes)
        await transition.finished;
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
