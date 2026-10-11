"use client";

import { motion } from "motion/react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 80,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: "linear",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
