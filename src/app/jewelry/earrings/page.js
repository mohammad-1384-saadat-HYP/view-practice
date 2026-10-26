import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";

export const metadata = {
  title: "گوشواره طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع گوشواره‌های میخی، حلقه‌ای، بخیه‌ای و آویز مجلسی با قفل‌های محکم و سبک‌های مناسب پوست حساس.",
};

export default function EarringsPage() {
  const products = [
    {
      title: "گوشواره حلقه‌ای تراش‌دار البرنادو",
      category: "گوشواره طلا",
      weight: "۳.۲۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/light-theme-first.jpg",
    },
    {
      title: "گوشواره بخیه‌ای زنجیری با نگین ستاره",
      category: "گوشواره طلا",
      weight: "۱.۸۵۰ گرم",
      wage: "سبک و اقتصادی",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "گوشواره میخی ون‌کلیف صدف مشکی",
      category: "گوشواره طلا",
      weight: "۲.۶۰۰ گرم",
      wage: "پرفروش بازار",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "گوشواره آویز مجلسی لوستری بلند",
      category: "گوشواره طلا",
      weight: "۷.۱۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="مجموعه جذاب"
      titleHighlight="گوشواره‌های طلا"
      subtitle="تنوعی دل‌نشین از گوشواره‌های ضد حساسیت ۱۸ عیار با قفل‌های استاندارد اهرمی، سوزنی و کلیپسی؛ جلوه‌ای ظریف برای زیبایی چهره شما."
      badge="گوشواره طلا"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "زیورآلات و تک‌پوش", href: "/jewelry" },
        { title: "گوشواره طلا", href: "/jewelry/earrings" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              قفل‌های ایمن و استاندارد:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              تمامی گوشواره‌ها دارای اتصالات مقاوم و تست‌شده بوده و بدون استفاده از نیکل ساخته شده‌اند تا برای استفاده طولانی‌مدت هیچ‌گونه حساسیتی ایجاد نکنند.
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
