import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BadgePill from "@/components/BadgePill";
import ScrollIndicator from "@/components/ScrollIndicator";
import Link from "next/link";
import { FaAngleRight, FaHome } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";

export default function SubPageLayout({
  title,
  titleHighlight,
  subtitle,
  badge = "گالری ویترین طلا",
  badgeIcon: BadgeIcon = GiCutDiamond,
  breadcrumbs = [],
  bgClass = "bg-theme-first",
  children,
}) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-black dark:text-paper font-sans">
      {/* Hero Section with Header */}
      <section className={`relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat ${bgClass}`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60" />
        
        <div>
          <div className="relative z-20">
            <Header />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-7 py-15 lg:p-20">
            {/* Breadcrumbs */}
            <nav aria-label="مسیر راهنما" className="mb-4 lg:mb-6 flex flex-wrap items-center gap-2 text-xs text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] sm:text-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-400"
              >
                <FaHome className="size-3.5" />
                <span>صفحه اصلی</span>
              </Link>

              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <div key={crumb.href || idx} className="flex items-center gap-2">
                    <FaAngleRight aria-hidden="true" className="size-3 -scale-x-100 text-gold-400" />
                    {isLast || !crumb.href ? (
                      <span className="font-semibold text-gold-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" aria-current="page">
                        {crumb.title}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-gold-400"
                      >
                        {crumb.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            <ScrollReveal>
              <div className="flex flex-col items-start gap-4">
                <BadgePill icon={BadgeIcon} label={badge} variant="muted" />

                <h1 className="text-2xl lg:text-3xl font-bold leading-snug lg:leading-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {title && <span>{title} </span>}
                  {titleHighlight && (
                    <span className="text-gold-400 font-bold drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                      {titleHighlight}
                    </span>
                  )}
                </h1>

                {subtitle && (
                  <p className="max-w-2xl text-[15px] lg:text-base mt-1 lg:mt-2 leading-relaxed text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {subtitle}
                  </p>
                )}

                <span
                  aria-hidden="true"
                  className="mt-3.5 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Option A: Animated Subtle Scroll Indicator */}
        <ScrollIndicator targetId="main-content" />
      </section>

      {/* Main Page Content */}
      <main id="main-content" className="flex-1 dark:bg-black py-15 px-5 sm:px-7.5 lg:px-8.5">
        <div className="mx-auto w-full max-w-7xl flex flex-col gap-16 sm:gap-20 lg:gap-24">
          {children}
        </div>
      </main>

      {/* Consultation Banner Before Footer */}
      <section className="border-t border-gold-500/20 bg-gold-500/5 py-15 px-5 sm:px-7.5 lg:px-8.5 text-center dark:bg-black">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl lg:text-3xl">
              سؤالی درباره عیار، وزن یا نحوه سفارش ساخت دارید؟
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
              کارشناسان ما به صورت تمام‌وقت آماده ارائه مشاوره رایگان و استعلام نرخ لحظه‌ای طلا هستند.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gold-400 bg-gold-500/15 px-6 py-3 text-xs sm:text-sm font-bold text-gold-600 dark:text-gold-400 shadow-lg shadow-gold-500/10 transition-all hover:bg-gold-500 hover:text-black hover:border-gold-500 active:scale-95"
              >
                <span>مشاوره و استعلام آنلاین</span>
                <FaAngleRight aria-hidden="true" className="size-4 -scale-x-100" />
              </Link>
              <Link
                href="/buying-guide"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gold-500/60 px-6 py-3 text-xs sm:text-sm font-semibold text-ink dark:text-paper transition-all hover:border-gold-400 hover:bg-gold-500/10 active:scale-95"
              >
                <span>راهنمای جامع خرید طلا</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
