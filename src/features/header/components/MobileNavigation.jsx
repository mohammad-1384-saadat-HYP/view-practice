"use client";

import { HeaderRoutes } from "../data/headerRoutes";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";

const iconTransition = { type: "spring", stiffness: 240, damping: 20 };
const submenuTransition = {
  height: { duration: 0.3, ease: "easeOut" },
  opacity: { duration: 0.2, ease: "easeOut" },
};

function hasActiveChild(route, currentPath) {
  if (!route.subRoutes || !currentPath) return false;
  return route.subRoutes.some(
    (sub) => sub.path === currentPath || hasActiveChild(sub, currentPath)
  );
}

function MobileRouteItem({ route, pathname, onNavigate }) {
  const normalizedPathname =
    pathname?.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;
  const isActive = normalizedPathname === route.path;
  const isChildActive = hasActiveChild(route, normalizedPathname);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [userExpanded, setUserExpanded] = useState(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setUserExpanded(null);
  }

  const isExpanded = userExpanded ?? isChildActive;
  const hasSubRoutes = route.subRoutes?.length > 0;
  const submenuId = `mobile-subroutes-${route.path.replaceAll("/", "-")}`;

  return (
    <motion.li
      className={`cursor-pointer border-r transition-colors duration-200 ${
        isActive
          ? "border-gold-400 bg-gold-500/15 font-semibold text-gold-700 dark:text-gold-400"
          : isChildActive
            ? "border-transparent text-gold-700/90 dark:text-gold-300/90"
            : "border-transparent text-ink dark:text-paper"
      }`}
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
          className="flex items-center justify-between px-2"
          onClick={() => setUserExpanded(!isExpanded)}
        >
          <Link
            href={route.path}
            aria-current={isActive ? "page" : undefined}
            className="group flex items-center gap-2.5 p-3"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate();
            }}
          >
            {isActive && (
              <span
                className="size-2 shrink-0 rounded-full bg-gold-400 shadow-[0_0_8px_var(--color-gold-400)] transition-colors group-hover:bg-ink group-hover:shadow-none"
                aria-hidden="true"
              />
            )}
            <span className="transition-colors duration-200 group-hover:text-ink">
              {route.title}
            </span>
          </Link>
          <button
            type="button"
            aria-label={isExpanded ? `بستن زیرمنوهای ${route.title}` : `باز کردن زیرمنوهای ${route.title}`}
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
          aria-current={isActive ? "page" : undefined}
          className="group flex min-h-12 items-center gap-2.5 py-3 px-5"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate();
          }}
        >
          {isActive && (
            <span
              className="size-2 shrink-0 rounded-full bg-gold-400 shadow-[0_0_8px_var(--color-gold-400)] transition-colors group-hover:bg-ink group-hover:shadow-none"
              aria-hidden="true"
            />
          )}
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
            className="mr-3 overflow-hidden border-r border-gold-500/30 pr-3"
          >
            {route.subRoutes.map((subRoute) => (
              <MobileRouteItem
                key={subRoute.path}
                route={subRoute}
                pathname={pathname}
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
  const pathname = usePathname();
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
        aria-label="باز کردن منوی ناوبری"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        className="flex size-8.5 cursor-pointer items-center justify-center text-ink transition-colors dark:text-paper lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FaBars aria-hidden="true" className="size-2/3" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              key="mobile-navigation-backdrop"
              type="button"
              aria-label="بستن منوی ناوبری"
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
              aria-label="ناوبری موبایل"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-50 flex w-[75vw] max-w-sm flex-col overflow-y-auto bg-paper py-2 text-ink shadow-2xl transition-colors dark:bg-night-950 dark:text-paper lg:hidden"
            >
              <div className="mb-3 flex items-center justify-between border-b border-gold-500/30 pb-3 px-2">
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="بستن منوی ناوبری"
                  className="flex size-10 cursor-pointer items-center justify-center text-ink transition-colors dark:text-paper"
                  onClick={closeMenu}
                >
                  <FaTimes aria-hidden="true" className="size-2/3" />
                </button>
              </div>
              <nav aria-label="ناوبری موبایل">
                <ul className="flex flex-col">
                  {HeaderRoutes.map((route) => (
                    <MobileRouteItem
                      key={route.path}
                      route={route}
                      pathname={pathname}
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
