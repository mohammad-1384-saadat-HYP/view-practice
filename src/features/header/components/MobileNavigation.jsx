"use client";

import { HeaderRoutes } from "../data/headerRoutes";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";

const iconTransition = { type: "spring", stiffness: 240, damping: 20 };
const submenuTransition = {
  height: { duration: 0.3, ease: "easeOut" },
  opacity: { duration: 0.2, ease: "easeOut" },
};

function MobileRouteItem({ route, onNavigate }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubRoutes = route.subRoutes?.length > 0;
  const submenuId = `mobile-subroutes-${route.path.replaceAll("/", "-")}`;

  return (
    <motion.li
      className="cursor-pointer"
      whileHover={{
        backgroundColor: "var(--color-gold-500)",
        color: "var(--color-ink)",
      }}
      transition={{
        backgroundColor: { duration: 0.18 },
        color: { duration: 0.18 },
      }}
    >
      {hasSubRoutes ? (
        <div
          className="flex items-center justify-between"
          onClick={() => setIsExpanded((open) => !open)}
        >
          <Link
            href={route.path}
            className="group p-3"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate();
            }}
          >
            <span className="transition-colors duration-200 group-hover:text-ink">
              {route.title}
            </span>
          </Link>
          <button
            type="button"
            aria-label={`${isExpanded ? "Hide" : "Show"} ${route.title} subroutes`}
            aria-expanded={isExpanded}
            aria-controls={submenuId}
            className="flex size-11 cursor-pointer items-center justify-center text-inherit"
          >
            <motion.span
              aria-hidden="true"
              className="inline-flex"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={iconTransition}
            >
              <FaCaretDown />
            </motion.span>
          </button>
        </div>
      ) : (
        <Link
          href={route.path}
          className="group flex min-h-12 items-center p-3"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate();
          }}
        >
          <span className="transition-colors duration-200 group-hover:text-ink">
            {route.title}
          </span>
        </Link>
      )}
      <AnimatePresence initial={false}>
        {hasSubRoutes && isExpanded && (
          <motion.ul
            id={submenuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={submenuTransition}
            className="ml-3 overflow-hidden border-l border-gold-300 pl-3"
          >
            {route.subRoutes.map((subRoute) => (
              <MobileRouteItem
                key={subRoute.path}
                route={subRoute}
                onNavigate={onNavigate}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center text-ink lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FaBars aria-hidden="true" size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              key="mobile-navigation-backdrop"
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 cursor-pointer bg-black/40 lg:hidden"
              onClick={closeMenu}
            />
            <motion.aside
              key="mobile-navigation-panel"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 flex w-[75vw] max-w-sm flex-col overflow-y-auto bg-paper p-2 text-ink shadow-2xl lg:hidden"
            >
              <div className="mb-3 flex items-center justify-between border-b border-gold-200 pb-3">
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close navigation menu"
                  className="flex size-10 cursor-pointer items-center justify-center text-ink"
                  onClick={closeMenu}
                >
                  <FaTimes aria-hidden="true" size={20} />
                </button>
              </div>
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col">
                  {HeaderRoutes.map((route) => (
                    <MobileRouteItem
                      key={route.path}
                      route={route}
                      onNavigate={closeMenu}
                    />
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
