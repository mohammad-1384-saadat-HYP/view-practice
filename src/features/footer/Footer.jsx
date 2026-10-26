import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { DesktopFooterRoutes, MobileFooterRoutes } from "./data/FooterRoutes";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "فیس‌بوک", icon: FaFacebookF, href: "https://facebook.com" },
    { name: "واتس‌اپ", icon: FaWhatsapp, href: "https://whatsapp.com" },
    { name: "اینستاگرام", icon: FaInstagram, href: "https://instagram.com" },
    { name: "توییتر", icon: FaTwitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="flex flex-col items-center gap-6.5 py-10 text-xs text-gold-700 transition-colors dark:text-gold-400 md:text-[15px] lg:py-12 lg:text-[17px] bg-white dark:bg-black">
      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center justify-center gap-6">
        {DesktopFooterRoutes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="rounded-lg px-2.5 py-1 transition-colors hover:bg-gold-500/10 hover:text-gold-600 dark:hover:bg-gold-500/10 dark:hover:text-gold-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
          >
            {route.title}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Links */}
      <div className="flex flex-col items-center justify-center gap-3 lg:hidden">
        {MobileFooterRoutes.map((item) => (
          <div key={item.id} className="flex gap-4">
            {item.routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="rounded-lg px-2 py-1 transition-colors hover:bg-gold-500/10 hover:text-gold-600 dark:hover:bg-gold-500/10 dark:hover:text-gold-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
              >
                {route.title}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Social Action Buttons */}
      <div className="my-2 flex items-center justify-center gap-3 sm:gap-4">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex size-10 sm:size-11 items-center justify-center rounded-xl border border-gold-500/35 bg-gold-500/10 text-gold-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:bg-gold-500 hover:text-black hover:shadow-md hover:shadow-gold-500/20 active:translate-y-0 active:scale-95 dark:border-gold-500/30 dark:bg-night-900/80 dark:text-gold-400 dark:hover:bg-gold-400 dark:hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
            >
              <Icon aria-hidden="true" className="size-4 sm:size-4.5" />
            </a>
          );
        })}
      </div>

      <div className="lg:text-[15px]">موقعیت: بازار طلا و جواهر</div>

      <div
        className="h-px w-2/3 opacity-70 md:w-1/2 lg:w-1/4"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, currentColor 0px, currentColor 6px, transparent 6px, transparent 9px)",
        }}
      />

      <div className="flex items-center justify-center gap-1.5 px-4 text-center lg:text-[15px]">
        <span>ارتباط و پشتیبانی:</span>
        <a
          href="https://github.com/mohammad-1384-saadat-HYP?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded px-1.5 py-0.5 font-medium transition-colors hover:text-gold-500 hover:underline dark:hover:text-gold-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
        >
          <span dir="ltr">github.com/mohammad-1384-saadat-HYP</span>
        </a>
      </div>

      <span className="block h-px w-2/3 bg-gold-500/50 dark:bg-gold-400/50 md:w-1/2 lg:w-4/5" />

      {/* Primary Developer Profile / Repository Button */}
      <a
        href="https://github.com/mohammad-1384-saadat-HYP?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex max-w-[90vw] items-center justify-center gap-2.5 rounded-xl border border-gold-500/35 bg-gold-500/5 px-5 py-2.5 text-xs font-semibold text-gold-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-gold-500 hover:text-black hover:shadow-md hover:shadow-gold-500/20 active:translate-y-0 active:scale-95 dark:border-gold-500/30 dark:bg-night-900/60 dark:text-gold-400 dark:hover:bg-gold-400 dark:hover:text-black sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
      >
        <FaGithub aria-hidden="true" className="size-4 shrink-0" />
        <span dir="ltr" className="truncate">github.com/mohammad-1384-saadat-HYP</span>
      </a>
    </footer>
  );
}

