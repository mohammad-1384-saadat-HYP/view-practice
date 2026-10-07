"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";

const hoverTransition = { backgroundColor: { duration: 0.18 } };
const iconTransition = { type: "spring", stiffness: 240, damping: 20 };

const panelVariants = {
  vertical: {
    hidden: { opacity: 0, scaleY: 0, y: -5 },
    visible: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      y: -5,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  },
  horizontal: {
    hidden: { opacity: 0, scaleX: 0, x: -5 },
    visible: {
      opacity: 1,
      scaleX: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scaleX: 0,
      x: -5,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  },
};

export default function DesktopRouteItem({ route, isRoot = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubRoutes = route.subRoutes?.length > 0;
  const panelDirection = isRoot ? "vertical" : "horizontal";
  const CaretIcon = isRoot ? FaCaretDown : FaCaretLeft;
  const panelClassName = isRoot
    ? "absolute left-0 top-full z-20 origin-top"
    : "absolute left-full top-0 z-30 origin-left";
  const panelId = `desktop-subroutes-${route.path.replaceAll("/", "-")}`;

  return (
    <motion.li
      className="relative cursor-pointer"
      onHoverStart={() => hasSubRoutes && setIsExpanded(true)}
      onHoverEnd={() => hasSubRoutes && setIsExpanded(false)}
      whileHover={{ backgroundColor: "var(--color-gold-500)" }}
      transition={hoverTransition}
    >
      <Link
        href={route.path}
        className={`group flex flex-1 cursor-pointer items-center p-2 ${
          isRoot ? "gap-1" : "justify-between"
        }`}
      >
        <span className="transition-colors duration-200 group-hover:text-paper">
          {route.title}
        </span>
        {hasSubRoutes && (
          <button
            type="button"
            aria-label={`${isExpanded ? "Hide" : "Show"} ${route.title} subroutes`}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            className="flex cursor-pointer items-center justify-center p-2"
            onClick={() => setIsExpanded((open) => !open)}
          >
            <motion.span
              aria-hidden="true"
              className="inline-flex"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={iconTransition}
            >
              <CaretIcon className="transition-colors duration-200 group-hover:text-paper" />
            </motion.span>
          </button>
        )}
      </Link>
      <AnimatePresence>
        {hasSubRoutes && isExpanded && (
          <motion.div
            id={panelId}
            key={route.path}
            variants={panelVariants[panelDirection]}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={panelClassName}
          >
            <ul className="flex w-max min-w-48 flex-col border border-gold-500 bg-paper">
              {route.subRoutes.map((subRoute) => (
                <DesktopRouteItem
                  key={subRoute.path}
                  route={subRoute}
                  isRoot={false}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
