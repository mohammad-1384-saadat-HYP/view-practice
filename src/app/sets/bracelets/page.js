import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { GiCutDiamond } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "دستبند و النگو طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "مجموعه النگوهای نمادار، دستبندهای کارتیه، النگو البرنادو و تک‌پوش‌های لوکس طلا ۱۸ عیار با ضمانت عیار ۷۵۰.",
};

export default function BraceletsPage() {
  const subcategories = [
    { title: "النگو البرنادو", href: "/sets/bracelets/albernado", desc: "گوی‌های تراش‌خورده درخشان با قابلیت انعطاف و استحکام بالا" },
    { title: "دستبند کارتیه", href: "/sets/bracelets/cartier", desc: "طراحی کلاسیک جاودانه، قفل‌های پیچی و زنجیرهای کوبایی" },
  ];

  const products = [
    {
      title: "دستبند کارتیه لاو پیچی ۱۸ عیار",
      category: "دستبند کارتیه",
      weight: "۱۲.۸۰۰ گرم",
      wage: "طرح پرفروش",
      image: "/light-theme-first.jpg",
    },
    {
      title: "ست ۴ عددی النگو البرنادو دورنگ",
      category: "النگو البرنادو",
      weight: "۲۱.۵۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "تک‌پوش پهن فیوژن طرح اماراتی",
      category: "تک‌پوش مجلسی",
      weight: "۱۸.۲۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "دستبند تنیسی سنگ‌های زیرکنیا",
      category: "دستبند نگین‌دار",
      weight: "۹.۴۰۰ گرم",
      wage: "شرکتی استاندارد",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="مجموعه شیک"
      titleHighlight="دستبند و النگو طلا"
      subtitle="تنوع کاملی از النگوهای تراش، النگوهای بدون نگین، تک‌پوش‌های مجلسی و دستبندهای زنجیری و النگویی با سایزبندی استاندارد."
      badge="النگو و دستبند"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "سرویس و نیم‌ست", href: "/sets" },
        { title: "دستبند و النگو", href: "/sets/bracelets" },
      ]}
      bgClass="bg-theme-first"
    >
      <section>
        <ScrollReveal>
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              کالکشن‌های اختصاصی النگو و دستبند
            </h2>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
          {subcategories.map((sub, i) => (
            <li key={sub.href}>
              <ScrollReveal delay={i * 0.1}>
                <Link
                  href={sub.href}
                  className="group flex flex-col justify-between rounded-2xl border border-gold-500/40 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg dark:bg-night-900/70"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-ink transition-colors group-hover:text-gold-600 dark:text-paper dark:group-hover:text-gold-400">
                      {sub.title}
                    </span>
                    <FaAngleRight aria-hidden="true" className="size-4 -scale-x-100 text-gold-500 transition-transform group-hover:-translate-x-1" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                    {sub.desc}
                  </p>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </section>

      <section>
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
