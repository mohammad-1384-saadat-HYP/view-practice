import { HeaderRoutes } from "./data/headerRoutes";
import DesktopRouteItem from "./components/DesktopRouteItem";
import MobileNavigation from "./components/MobileNavigation";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

function DesktopRouteList({ routes }) {
  return (
    <ul className="flex flex-wrap items-center justify-center text-ink text-sm dark:text-paper [&>li:first-child]:rounded-r-sm [&>li:last-child]:rounded-l-sm">
      {routes.map((route) => (
        <DesktopRouteItem key={route.path} route={route} isRoot />
      ))}
    </ul>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-night-200/50 px-4 py-3.75 shadow-md shadow-night-950/5 transition-all dark:border-night-800/60 dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.7)] lg:border-none lg:shadow-none lg:px-20 lg:py-5">
      <MobileNavigation />
      <div className="hidden lg:flex items-center gap-3.5">
        <div>
          <ThemeToggle />
        </div>
        <Link href="/">
          <Image
            src="/next.svg"
            alt="لوگوی سایت"
            width={135}
            height={50}
            priority
            className="transition-transform hover:scale-105 dark:invert lg:h-[50px] lg:w-[135px]"
          />
        </Link>
      </div>
      <Link href="/" className="lg:hidden">
        <Image
          src="/next.svg"
          alt="لوگوی سایت"
          width={115}
          height={40}
          priority
          className="h-[30px] w-[100px] transition-transform hover:scale-105 dark:invert sm:h-[40px] sm:w-[115px]"
        />
      </Link>
      <div className="lg:hidden">
        <ThemeToggle />
      </div>
      <nav aria-label="منوی ناوبری اصلی" className="hidden lg:flex">
        <DesktopRouteList routes={HeaderRoutes} />
      </nav>
    </header>
  );
}
