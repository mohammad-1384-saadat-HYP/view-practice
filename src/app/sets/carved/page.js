import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";
import { FaGem } from "react-icons/fa";

export const metadata = {
  title: "نیم‌ست تراش ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع نیم‌ست‌های تراش‌خورده ۱۸ عیار بدون نگین با درخشش فوق‌العاده، حداقل اجرت ساخت و ارزش سرمایه‌گذاری پایدار.",
};

export default function CarvedSetsPage() {
  const products = [
    {
      title: "نیم‌ست تراش اسلیمی البرنادو",
      category: "نیم‌ست تراش",
      weight: "۹.۸۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/light-theme-first.jpg",
    },
    {
      title: "نیم‌ست فیوژن آینه‌ای دو رنگ",
      category: "نیم‌ست تراش",
      weight: "۱۱.۴۰۰ گرم",
      wage: "شرکتی استاندارد",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "نیم‌ست شن‌ریزه‌ای شنی ۱۸ عیار",
      category: "نیم‌ست تراش",
      weight: "۸.۱۵۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "نیم‌ست ورساچه تراش الماسه",
      category: "نیم‌ست تراش",
      weight: "۱۳.۲۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="کالکشن مدرن"
      titleHighlight="نیم‌ست‌های تراش ۱۸ عیار"
      subtitle="درخشش شبیه به الماس بدون هیچ‌گونه نگین اتمی؛ بدون افت وزن هنگام فروش مجدد با کمترین اجرت ساخت و فاکتور رسمی."
      badge="تراش‌های بدون نگین"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "سرویس و نیم‌ست", href: "/sets" },
        { title: "نیم‌ست تراش ۱۸ عیار", href: "/sets/carved" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-6 dark:bg-night-900/60">
            <h2 className="text-base font-bold text-ink dark:text-paper sm:text-lg">
              چرا نیم‌ست تراش انتخابی هوشمندانه است؟
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
              در مصنوعات تراش، با هنر حکاکی لیزری و دستگاه‌های مدرن CNC، سطوحی با انعکاس نور خیره‌کننده ایجاد می‌شود. بنابراین کل وزن مصنوع طلای خالص ۱۸ عیار است و هنگام تعویض یا فروش، هیچ کسر وزنی شامل کار نخواهد شد.
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
