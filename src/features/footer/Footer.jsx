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
    <footer className="flex flex-col items-center gap-6.5 py-10 text-xs text-gold-700 transition-colors dark:text-gold-400 md:text-[15px] lg:py-12 lg:text-[17px] bg-black">
      <div className="hidden lg:flex items-center justify-center gap-6">
        {DesktopFooterRoutes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="transition-colors hover:text-gold-600 dark:hover:text-gold-300"
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
                className="transition-colors hover:text-gold-600 dark:hover:text-gold-300"
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
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-all hover:scale-110 hover:bg-gold-600 dark:bg-gold-400 dark:text-night-950 dark:hover:bg-gold-300 md:size-8 lg:size-9.5"
        >
          <FaFacebookF className="size-2/3" />
        </div>
        <div
          aria-label="WhatsApp"
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-all hover:scale-110 hover:bg-gold-600 dark:bg-gold-400 dark:text-night-950 dark:hover:bg-gold-300 md:size-8 lg:size-9.5"
        >
          <FaWhatsapp className="size-2/3" />
        </div>
        <div
          aria-label="Instagram"
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-all hover:scale-110 hover:bg-gold-600 dark:bg-gold-400 dark:text-night-950 dark:hover:bg-gold-300 md:size-8 lg:size-9.5"
        >
          <FaInstagram className="size-2/3" />
        </div>
        <div
          aria-label="Twitter"
          className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-ink shadow-sm transition-all hover:scale-110 hover:bg-gold-600 dark:bg-gold-400 dark:text-night-950 dark:hover:bg-gold-300 md:size-8 lg:size-9.5"
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
<<<<<<< HEAD
          className="transition-colors hover:text-gold-600 hover:underline dark:hover:text-gold-300"
=======
>>>>>>> 5a68e583cbf0d29f725ebb8240f0eff5fc11db62
        >
          github.com/mohammad-1384-saadat-HYP
        </a>
      </div>
<<<<<<< HEAD
      <span className="block h-px w-2/3 bg-gold-500/50 dark:bg-gold-400/50 md:w-1/2 lg:w-4/5"></span>
      <a
        href="https://github.com/mohammad-1384-saadat-HYP?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6.5 text-base font-medium transition-colors hover:text-gold-600 hover:underline dark:hover:text-gold-300 md:text-lg lg:text-[20px]"
      >
        github.com/mohammad-1384-saadat-HYP
      </a>
=======
      <span className="w-full h-px bg-gold-500"></span>
      <div>github.com/mohammad-1384-saadat-HYP</div>
>>>>>>> 5a68e583cbf0d29f725ebb8240f0eff5fc11db62
    </footer>
  );
}
