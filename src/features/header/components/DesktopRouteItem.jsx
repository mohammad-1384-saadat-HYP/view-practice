"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";

const hoverTransition = {
  backgroundColor: { duration: 0.18 },
  color: { duration: 0.18 },
};
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

function hasActiveChild(route, currentPath) {
  if (!route.subRoutes || !currentPath) return false;
  return route.subRoutes.some(
    (sub) => sub.path === currentPath || hasActiveChild(sub, currentPath)
  );
}

export default function DesktopRouteItem({ route, isRoot = false }) {
  const pathname = usePathname();
  const normalizedPathname =
    pathname?.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;
  const isActive = normalizedPathname === route.path;
  const isChildActive = hasActiveChild(route, normalizedPathname);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubRoutes = route.subRoutes?.length > 0;
  const panelDirection = isRoot ? "vertical" : "horizontal";
  const CaretIcon = isRoot ? FaCaretDown : FaCaretLeft;
  const panelClassName = isRoot
    ? "absolute right-0 top-full z-20 origin-top"
    : "absolute right-full top-0 z-30 origin-right";
  const panelId = `desktop-subroutes-${route.path.replaceAll("/", "-")}`;

  return (
    <motion.li
      className={`group/item relative cursor-pointer ${
        !isRoot
          ? isActive
            ? "border-r-4 border-gold-400 bg-gold-500/15"
            : "border-r-4 border-transparent"
          : ""
      }`}
      onHoverStart={() => hasSubRoutes && setIsExpanded(true)}
      onHoverEnd={() => hasSubRoutes && setIsExpanded(false)}
      whileHover={{
        backgroundColor: "var(--color-gold-500)",
        color: "var(--color-ink)",
      }}
      transition={hoverTransition}
    >
      <Link
        href={route.path}
        aria-current={isActive ? "page" : undefined}
        className={`group flex flex-1 cursor-pointer items-center py-2 px-3 ${
          isRoot ? "gap-1" : "gap-2 justify-between"
        } ${
          isActive
            ? "font-semibold text-gold-700 dark:text-gold-400"
            : isChildActive
              ? "text-gold-700 dark:text-gold-400"
              : "text-ink dark:text-paper"
        }`}
      >
        <span className="flex items-center gap-2 transition-colors duration-200 group-hover:text-ink">
          {!isRoot && isActive && (
            <span
              className="size-1.5 shrink-0 rounded-full bg-gold-400 shadow-[0_0_6px_var(--color-gold-400)] transition-colors group-hover:bg-ink group-hover:shadow-none"
              aria-hidden="true"
            />
          )}
          {route.title}
        </span>
        {hasSubRoutes && (
          <button
            type="button"
            aria-label={isExpanded ? `پنهان‌سازی زیرمنوهای ${route.title}` : `نمایش زیرمنوهای ${route.title}`}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            className="flex cursor-pointer items-center justify-center"
            onClick={() => setIsExpanded((open) => !open)}
          >
            <motion.span
              aria-hidden="true"
              className="inline-flex"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={iconTransition}
            >
              <CaretIcon
                className={`transition-colors duration-200 group-hover:text-ink ${
                  isActive || isChildActive
                    ? "text-gold-700 dark:text-gold-400"
                    : ""
                }`}
              />
            </motion.span>
          </button>
        )}
      </Link>
      {isRoot && (isActive || isChildActive) && (
        <span
          className="absolute bottom-0 inset-x-1.5 h-0.5 rounded-full bg-gold-500 shadow-[0_0_6px_var(--color-gold-400)] transition-opacity group-hover/item:opacity-0 dark:bg-gold-400"
          aria-hidden="true"
        />
      )}
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
            <ul className="flex w-max min-w-48 flex-col border border-gold-500/30 bg-paper text-ink shadow-xl dark:border-gold-500/30 dark:bg-night-950 dark:text-paper">
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
