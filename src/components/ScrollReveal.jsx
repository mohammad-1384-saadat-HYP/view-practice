"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";

let isScrollRevealMounted = false;
const scrollRevealListeners = new Set();

function subscribeMounted(onStoreChange) {
  scrollRevealListeners.add(onStoreChange);
  if (!isScrollRevealMounted && typeof window !== "undefined") {
    queueMicrotask(() => {
      isScrollRevealMounted = true;
      scrollRevealListeners.forEach((listener) => listener());
    });
  }
  return () => scrollRevealListeners.delete(onStoreChange);
}

function getMountedSnapshot() {
  return isScrollRevealMounted;
}

function getMountedServerSnapshot() {
  return false;
}


export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.45,
  y = 24,
}) {
  const isMounted = useSyncExternalStore(
    subscribeMounted,
    getMountedSnapshot,
    getMountedServerSnapshot
  );
  const shouldReduceMotion = useReducedMotion();

  if (!isMounted || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
