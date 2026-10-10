import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { DesktopFooterRoutes, MobileFooterRoutes } from "./data/FooterRoutes";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center gap-6.5 border-t border-black/10 py-10 text-xs text-gold-700 transition-colors dark:border-paper/10 dark:text-gold-400 md:text-[15px] lg:py-12 lg:text-[17px]">
      <div className="hidden lg:flex items-center justify-center gap-4">
        {DesktopFooterRoutes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="transition-colors hover:text-gold-500 dark:hover:text-gold-200"
          >
            {route.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-3 lg:hidden">
        {MobileFooterRoutes.map((item) => (
          <div key={item.id} className="flex gap-4">
            {item.routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="transition-colors hover:text-gold-500 dark:hover:text-gold-200"
              >
                {route.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="my-6.5 flex items-center justify-center gap-4">
        <div
          aria-label="Facebook"
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-transform hover:scale-110 dark:bg-gold-400 dark:text-black md:size-8 lg:size-9.5"
        >
          <FaFacebookF className="size-2/3" />
        </div>
        <div
          aria-label="WhatsApp"
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-transform hover:scale-110 dark:bg-gold-400 dark:text-black md:size-8 lg:size-9.5"
        >
          <FaWhatsapp className="size-2/3" />
        </div>
        <div
          aria-label="Instagram"
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-transform hover:scale-110 dark:bg-gold-400 dark:text-black md:size-8 lg:size-9.5"
        >
          <FaInstagram className="size-2/3" />
        </div>
        <div
          aria-label="Twitter"
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-transform hover:scale-110 dark:bg-gold-400 dark:text-black md:size-8 lg:size-9.5"
        >
          <FaTwitter className="size-2/3" />
        </div>
      </div>
      <div className="lg:text-[15px]">Location : Vancouver Island</div>
      <div
        className="h-px w-2/3 opacity-70 md:w-1/2 lg:w-1/4"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, currentColor 0px, currentColor 6px, transparent 6px, transparent 9px)",
        }}
      ></div>
      <div className="flex items-center justify-center gap-1 lg:text-[15px]">
        <span>Email:</span>
        <a
          href="https://github.com/mohammad-1384-saadat-HYP?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gold-500 hover:underline dark:hover:text-gold-200"
        >
          github.com/mohammad-1384-saadat-HYP
        </a>
      </div>
      <span className="block h-px w-2/3 bg-gold-500/60 dark:bg-gold-500/70 md:w-1/2 lg:w-4/5"></span>
      <a
        href="https://github.com/mohammad-1384-saadat-HYP?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6.5 text-base font-medium transition-colors hover:text-gold-500 hover:underline dark:hover:text-gold-200 md:text-lg lg:text-[20px]"
      >
        github.com/mohammad-1384-saadat-HYP
      </a>
    </footer>
  );
}
