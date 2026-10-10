import { HeaderRoutes } from "./data/headerRoutes";
import DesktopRouteItem from "./components/DesktopRouteItem";
import MobileNavigation from "./components/MobileNavigation";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

function DesktopRouteList({ routes }) {
  return (
    <ul className="flex flex-wrap items-center justify-center text-ink dark:text-paper [&>li:first-child]:rounded-l-sm [&>li:last-child]:rounded-r-sm">
      {routes.map((route) => (
        <DesktopRouteItem key={route.path} route={route} isRoot />
      ))}
    </ul>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-black/10 px-4 py-3.75 transition-colors dark:border-paper/20 lg:border-none lg:px-[150px] lg:py-5">
      <MobileNavigation />
      <div className="hidden lg:flex items-center gap-3.5">
        <div>
          <ThemeToggle />
        </div>
        <Link href="/">
          <Image
            src="/next.svg"
            alt="Next.js logo"
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
          alt="Next.js logo"
          width={115}
          height={40}
          priority
          className="h-[30px] w-[100px] transition-transform hover:scale-105 dark:invert sm:h-[40px] sm:w-[115px]"
        />
      </Link>
      <div className="lg:hidden">
        <ThemeToggle />
      </div>
      <nav aria-label="Main navigation" className="hidden lg:flex">
        <DesktopRouteList routes={HeaderRoutes} />
      </nav>
    </header>
  );
}
