import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BadgePill from "@/components/BadgePill";
import Link from "next/link";
import { GiCutDiamond } from "react-icons/gi";
import { FaHome, FaAngleRight, FaGem } from "react-icons/fa";
import { BiPhoneCall, BiShoppingBag } from "react-icons/bi";
import { RiCoinsLine } from "react-icons/ri";

export default function NotFound() {
  const quickLinks = [
    {
      title: "سرویس و نیم‌ست",
      description: "سرویس‌های مجلسی و تراش ۱۸ عیار",
      href: "/sets",
      icon: FaGem,
    },
    {
      title: "زیورآلات و تک‌پوش",
      description: "انگشتر، النگو، دستبند و گوشواره",
      href: "/jewelry",
      icon: BiShoppingBag,
    },
    {
      title: "شمش و سکه",
      description: "طلای سرمایه‌گذاری با پلمپ امنیتی",
      href: "/bullion-coins",
      icon: RiCoinsLine,
    },
    {
      title: "مشاوره و پشتیبانی",
      description: "استعلام نرخ روز و ارتباط با کارشناسان",
      href: "/contact-us",
      icon: BiPhoneCall,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-black dark:text-paper font-sans">
      {/* Header with background */}
      <section className="relative flex flex-col bg-cover bg-center bg-no-repeat bg-theme-first">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        />

        <div className="relative z-20">
          <Header />
        </div>

        {/* 404 Central Stage */}
        <div className="relative z-10 flex min-h-[65vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:py-24">
          {/* Ambient Gold Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 sm:size-96 rounded-full bg-gold-500/15 blur-3xl"
          />

          <ScrollReveal className="relative z-10 flex flex-col items-center">
            <BadgePill
              icon={GiCutDiamond}
              label="خطای ۴۰۴ | صفحه یافت نشد"
              variant="muted"
            />

            {/* Huge 404 Heading */}
            <h1 className="mt-4 text-7xl font-black tracking-tight sm:text-8xl lg:text-9xl bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-[0_8px_32px_rgba(212,175,55,0.35)]">
              ۴۰۴
            </h1>

            <span
              aria-hidden="true"
              className="mx-auto my-3 block h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
            />

            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              گویا این برگ از درخشش ویترین در این نشانی نیست!
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-relaxed text-gray-200 sm:text-sm lg:text-base">
              صفحه‌ای که به دنبال آن هستید ممکن است منتقل شده باشد، نام آن تغییر یافته باشد
              یا در دست آماده‌سازی باشد. می‌توانید از دکمه‌های زیر برای هدایت سریع استفاده کنید.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 px-6 py-3.5 text-xs font-bold text-black shadow-lg shadow-gold-500/25 transition-all hover:scale-105 active:scale-95 sm:text-sm"
              >
                <FaHome className="size-4" />
                <span>بازگشت به صفحه اصلی</span>
              </Link>

              <Link
                href="/sets"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gold-500/80 bg-black/40 px-6 py-3.5 text-xs font-bold text-gold-300 backdrop-blur-sm transition-all hover:border-gold-400 hover:bg-gold-500/20 active:scale-95 sm:text-sm"
              >
                <FaGem className="size-3.5 text-gold-400" />
                <span>مشاهده کالکشن‌های طلا</span>
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-black/30 px-5 py-3.5 text-xs font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-gold-400/80 hover:text-gold-300 active:scale-95 sm:text-sm"
              >
                <BiPhoneCall className="size-4 text-gold-400" />
                <span>تماس با پشتیبانی</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Suggested Pages Section */}
      <section className="flex-1 dark:bg-black py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="text-lg font-bold text-ink dark:text-paper sm:text-xl">
                شاید این بخش‌ها برای شما جذاب باشد:
              </h3>
              <p className="mt-1 text-xs text-ink/70 dark:text-paper/70 sm:text-sm">
                محبوب‌ترین دسته‌بندی‌های ویترین آنلاین طلا و جواهر
              </p>
            </div>
          </ScrollReveal>

          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.href} className="h-full">
                  <ScrollReveal delay={index * 0.08} y={18} className="h-full">
                    <Link
                      href={item.href}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-gold-500/30 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-md dark:bg-night-900/70 dark:border-gold-500/25"
                    >
                      <div>
                        <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-600 dark:text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                          <Icon className="size-5" />
                        </div>
                        <h4 className="text-sm font-bold text-ink dark:text-paper group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-ink/70 dark:text-paper/70">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold-600 dark:text-gold-400">
                        <span>ورود به بخش</span>
                        <FaAngleRight aria-hidden="true" className="size-3 -scale-x-100 transition-transform group-hover:-translate-x-1" />
                      </div>
                    </Link>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
