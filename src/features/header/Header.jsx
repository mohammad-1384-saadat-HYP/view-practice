import { HeaderRoutes } from "./data/headerRoutes";
import DesktopRouteItem from "./components/DesktopRouteItem";
import MobileNavigation from "./components/MobileNavigation";
import Image from "next/image";

function DesktopRouteList({ routes }) {
  return (
    <ul className="flex flex-wrap items-center justify-center [&>li:first-child]:rounded-l-sm [&>li:last-child]:rounded-r-sm">
      {routes.map((route) => (
        <DesktopRouteItem key={route.path} route={route} isRoot />
      ))}
    </ul>
  );
}

export default function Header() {
  return (
    <header className="relative flex flex-wrap items-center justify-center border-b border-paper py-1 lg:justify-between lg:border-none lg:px-[150px] lg:py-5">
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={135}
        height={50}
        priority
        className="w-[100px] h-[30px] sm:w-[115px] sm:h-[40px] lg:w-[135px] lg:h-[50px]"
      />
      <MobileNavigation />
      <nav aria-label="Main navigation" className="hidden lg:flex">
        <DesktopRouteList routes={HeaderRoutes} />
      </nav>
    </header>
  );
}
