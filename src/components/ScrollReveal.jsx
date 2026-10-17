"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";

const emptySubscribe = () => () => {};
const getMountedSnapshot = () => true;
const getMountedServerSnapshot = () => false;

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.45,
  y = 24,
}) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
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
