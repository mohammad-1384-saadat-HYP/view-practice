import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";

export const metadata = {
  title: "سرویس طلا زرد و سفید ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع سرویس‌های طلا دورنگ زرد و سفید با طراحی مدرن ایتالیایی و ترکیب طلای مات و براق با فاکتور رسمی معتبر.",
};

export default function YellowWhiteSetsPage() {
  const products = [
    {
      title: "سرویس دورنگ مات و براق طرح روبرتو کوین",
      category: "سرویس دورنگ",
      weight: "۲۲.۴۰۰ گرم",
      wage: "شرکتی درجه یک",
      image: "/light-theme-first.jpg",
    },
    {
      title: "نیم‌ست هندسی زرد و سفید تراش‌دار",
      category: "سرویس دورنگ",
      weight: "۱۴.۱۵۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "سرویس زرد و سفید توری فیلیگرانی",
      category: "سرویس دورنگ",
      weight: "۱۹.۸۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "نیم‌ست زرد و رزگلد پولکی مدرن",
      category: "سرویس دورنگ",
      weight: "۱۰.۶۰۰ گرم",
      wage: "سبک و اقتصادی",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="هارمونی مدرن"
      titleHighlight="سرویس طلا زرد و سفید"
      subtitle="تلفیق استادانه طلای زرد خورشیدی و طلای سفید متالیک؛ هماهنگی فوق‌العاده با انواع ساعت، زیورآلات و پوشش‌های مجلسی و اداری."
      badge="سرویس‌های ترکیبی"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "سرویس و نیم‌ست", href: "/sets" },
        { title: "سرویس طلا زرد و سفید", href: "/sets/yellow-white" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              ویژگی طلاهای دورنگ:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              رنگ سفید در این مصنوعات حاصل آلیاژ طلا با فلزات سفید مانند پالادیوم و آبکاری استاندارد رودیوم است که درخشش و ثبات رنگ آن را برای سال‌ها تضمین می‌کند.
            </p>
          </div>
        </ScrollReveal>
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
