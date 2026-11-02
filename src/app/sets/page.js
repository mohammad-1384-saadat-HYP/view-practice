import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { GiCutDiamond } from "react-icons/gi";
import { FaAngleRight, FaGem } from "react-icons/fa";

export const metadata = {
  title: "سرویس و نیم‌ست طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع سرویس طلا عروس، نیم‌ست‌های تراش‌خورده ۱۸ عیار، سرویس‌های برلیان و جواهر با فاکتور رسمی و ضمانت اصالت.",
};

export default function SetsPage() {
  const subcategories = [
    { title: "سرویس عروس لوکس", href: "/sets/bridal", desc: "شکوه و درخشش در شب خاطره‌انگیز شما" },
    { title: "نیم‌ست تراش ۱۸ عیار", href: "/sets/carved", desc: "تراش‌های ظریف و چشم‌نواز بدون افت وزن نگین" },
    { title: "سرویس جواهر و برلیان", href: "/sets/diamond", desc: "الماس‌های شناسنامه‌دار با درخشش ابدی" },
    { title: "دستبند و النگو", href: "/sets/bracelets", desc: "انواع النگو البرنادو و دستبندهای کارتیه" },
    { title: "سرویس طلا زرد و سفید", href: "/sets/yellow-white", desc: "ترکیب دو رنگ مدرن و هماهنگ با هر استایلی" },
  ];

  const products = [
    {
      title: "سرویس لوکس عروس طرح ون‌کلیف",
      category: "سرویس عروس",
      weight: "۲۴.۵۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/light-theme-first.jpg",
    },
    {
      title: "نیم‌ست تراش خورده ۱۸ عیار فیوژن",
      category: "نیم‌ست تراش",
      weight: "۱۱.۲۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "سرویس برلیان سلطنتی اشک و مارکیز",
      category: "سرویس برلیان",
      weight: "۳۲.۸۰۰ گرم",
      wage: "جواهر شناسنامه‌دار",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "سرویس دورنگ مات و براق ایتالیایی",
      category: "طلا زرد و سفید",
      weight: "۱۸.۶۰۰ گرم",
      wage: "شرکتی استاندارد",
      image: "/light-theme-middle.jpg",
    },
    {
      title: "نیم‌ست گل رز برجسته ۱۸ عیار",
      category: "نیم‌ست مجلسی",
      weight: "۸.۴۵۰ گرم",
      wage: "کمترین اجرت",
      image: "/light-theme-first.jpg",
    },
    {
      title: "سرویس تنیسی تمام نگین اتریشی",
      category: "سرویس جواهر",
      weight: "۲۱.۱۰۰ گرم",
      wage: "گارانتی مادام‌العمر",
      image: "/dark-theme-first.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="مجموعه نفیس"
      titleHighlight="سرویس و نیم‌ست طلا"
      subtitle="مجموعه‌ای بی‌نظیر از فاخرترین سرویس‌های عروس، نیم‌ست‌های سبک و مجلسی و سرویس‌های برلیان با استاندارد رسمی عیار ۷۵۰ و فاکتور چاپی معتبر."
      badge="کالکشن سرویس و نیم‌ست"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[{ title: "سرویس و نیم‌ست", href: "/sets" }]}
      bgClass="bg-theme-first"
    >
      {/* Subcategory Quick Links */}
      <section>
        <ScrollReveal>
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              دسته‌بندی‌های سرویس و نیم‌ست
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
          {subcategories.map((sub, i) => (
            <li key={sub.href}>
              <ScrollReveal delay={i * 0.08} y={20}>
                <Link
                  href={sub.href}
                  className="group flex flex-col justify-between rounded-2xl border border-gold-500/35 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg dark:bg-night-900/70"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-ink transition-colors group-hover:text-gold-600 dark:text-paper dark:group-hover:text-gold-400">
                      {sub.title}
                    </span>
                    <FaAngleRight aria-hidden="true" className="size-4 -scale-x-100 text-gold-500 transition-transform group-hover:-translate-x-1" />
                  </div>
                  <p className="mt-2 text-xs text-ink/70 dark:text-paper/70">
                    {sub.desc}
                  </p>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Products Grid */}
      <section>
        <ScrollReveal>
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-500/10 px-4 py-1 text-xs font-semibold text-gold-600 dark:text-gold-400">
              <FaGem className="size-3" />
              <span>جدیدترین مدل‌های ویترین</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-ink dark:text-paper sm:text-2xl lg:text-3xl">
              منتخب سرویس‌ها و نیم‌ست‌های ۱۸ عیار
            </h2>
            <p className="mt-2 max-w-xl text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              محاسبه آنلاین قیمت بر مبنای نرخ لحظه‌ای طلا، کمترین اجرت ساخت و امکان ارسال امن به سراسر کشور.
            </p>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
          {products.map((item, idx) => (
            <li key={item.title}>
              <ProductCard {...item} delay={idx * 0.08} />
            </li>
          ))}
        </ul>
      </section>
    </SubPageLayout>
  );
}
