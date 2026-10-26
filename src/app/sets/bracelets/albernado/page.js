import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";

export const metadata = {
  title: "النگو البرنادو ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع النگو و دستبندهای البرنادو با گوی‌های تراش‌خورده براق سه‌رنگ و دورنگ، بدون نگین و با ضمانت عیار ۷۵۰.",
};

export default function AlbernadoBraceletsPage() {
  const products = [
    {
      title: "النگو البرنادو سه‌رنگ سایز ۲",
      category: "النگو البرنادو",
      weight: "۵.۴۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/light-theme-first.jpg",
    },
    {
      title: "دستبند البرنادو زنجیری دورنگ زرد و سفید",
      category: "دستبند البرنادو",
      weight: "۷.۱۵۰ گرم",
      wage: "پرفروش بازار",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "النگو البرنادو دامله پهن سایز ۳",
      category: "النگو البرنادو",
      weight: "۸.۹۰۰ گرم",
      wage: "شرکتی استاندارد",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "پک ۳ عددی النگو البرنادو اسلیم",
      category: "النگو البرنادو",
      weight: "۱۴.۸۰۰ گرم",
      wage: "تخفیف ویژه پک",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="کالکشن درخشان"
      titleHighlight="النگو البرنادو"
      subtitle="گوی‌های متحرک و تراش‌خورده لیزری با انعکاس نور فوق‌العاده؛ سبک، مقاوم و ایده‌آل برای استفاده مداوم روزمره بدون نگرانی از افتادن نگین."
      badge="کالکشن البرنادو"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "سرویس و نیم‌ست", href: "/sets" },
        { title: "دستبند و النگو", href: "/sets/bracelets" },
        { title: "النگو البرنادو", href: "/sets/bracelets/albernado" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              راهنمای سایز النگو البرنادو:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              تمامی مدل‌های البرنادو در سایزهای ۱ تا ۵ موجود هستند. در صورت نیاز به راهنمایی برای تعیین دقیق سایز مچ دست، کارشناسان ما آماده پاسخگویی هستند.
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
