import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";

export const metadata = {
  title: "دستبند کارتیه طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع دستبندهای کارتیه لاو، جاستین کلو (میخ) و زنجیرهای کارتیه ۱۸ عیار با قفل‌های امن و بالاترین کیفیت پرداخت.",
};

export default function CartierBraceletsPage() {
  const products = [
    {
      title: "دستبند کارتیه لاو قفل پیچی ۱۸ عیار",
      category: "دستبند کارتیه",
      weight: "۱۶.۵۰۰ گرم",
      wage: "شرکتی درجه یک",
      image: "/light-theme-first.jpg",
    },
    {
      title: "دستبند کارتیه طرح میخ (Juste un Clou)",
      category: "دستبند کارتیه",
      weight: "۱۱.۲۰۰ گرم",
      wage: "طرح پرفروش جهانی",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "دستبند زنجیری کارتیه کوبایی پهن",
      category: "دستبند کارتیه",
      weight: "۲۴.۶۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "النگو النگویی کارتیه باریک با ۴ نگین برلیان",
      category: "دستبند کارتیه",
      weight: "۹.۸۰۰ گرم",
      wage: "جواهر شناسنامه‌دار",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="کالکشن نمادین"
      titleHighlight="دستبندهای کارتیه"
      subtitle="اصالت طراحی جاودانه و مدرن فرانسوی بازآفرینی شده با طلای ۱۸ عیار؛ مظهر وفاداری، جسارت و شکوه در استایل خانم‌ها و آقایان شیک‌پوش."
      badge="کالکشن کارتیه"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "سرویس و نیم‌ست", href: "/sets" },
        { title: "دستبند و النگو", href: "/sets/bracelets" },
        { title: "دستبند کارتیه", href: "/sets/bracelets/cartier" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              مشخصات اختصاصی کالکشن کارتیه:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              تمامی دستبندهای کارتیه همراه با پیچ‌گوشتی مخصوص طلاکاری (در مدل‌های لاو)، هک استاندارد عیار ۷۵۰ و قفل‌های دوبل ایمن عرضه می‌گردند.
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
