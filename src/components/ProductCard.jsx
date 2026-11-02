import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductCard({
  title,
  category = "طلا ۱۸ عیار",
  weight = "حدود ۴.۲ گرم",
  wage = "کمترین اجرت بازار",
  karat = "۱۸ عیار (۷۵۰)",
  image = "/light-theme-first.jpg",
  delay = 0,
}) {
  return (
    <ScrollReveal delay={delay} y={24} className="h-full">
      <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gold-500/40 bg-white/80 p-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_10px_20px_-3px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/80 hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.1),0_20px_35px_-4px_rgba(212,175,55,0.22)] dark:bg-night-900/80 dark:border-gold-500/30 dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_10px_20px_-3px_rgba(212,175,55,0.08)] dark:hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.7),0_20px_35px_-4px_rgba(212,175,55,0.18)]">
        <span
          aria-hidden="true"
          className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"
        />

        <div>
          <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl border border-gold-500/20 bg-night-950/10 dark:bg-black/40">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"
            />
            <span className="absolute top-3 right-3 rounded-full border border-gold-400/80 bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-gold-300 backdrop-blur-sm">
              {karat}
            </span>
            <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 drop-shadow">
              {category}
            </span>
          </div>

          <h3 className="text-base font-bold text-ink transition-colors group-hover:text-gold-600 dark:text-paper dark:group-hover:text-gold-400 lg:text-lg">
            {title}
          </h3>

          <div className="mt-3 space-y-1.5 border-t border-night-200/60 pt-3 text-xs text-ink/75 dark:border-night-800/60 dark:text-paper/75 sm:text-sm">
            <div className="flex items-center justify-between">
              <span>وزن تقریبی:</span>
              <span className="font-semibold text-ink dark:text-paper">{weight}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>اجرت ساخت:</span>
              <span className="font-semibold text-gold-600 dark:text-gold-400">{wage}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-night-200/50 dark:border-night-800/50">
          <Link
            href="/contact-us"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gold-500/60 bg-gold-500/10 py-2.5 text-xs font-bold text-ink transition-all hover:bg-gold-500 hover:text-black dark:text-paper dark:hover:text-black sm:text-sm"
          >
            <span>استعلام قیمت و سفارش</span>
            <FaAngleRight aria-hidden="true" className="size-3.5 -scale-x-100 text-gold-500 group-hover:text-black" />
          </Link>
        </div>
      </article>
    </ScrollReveal>
  );
}
