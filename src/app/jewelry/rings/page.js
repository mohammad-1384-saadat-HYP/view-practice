import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { FaRing } from "react-icons/fa";

export const metadata = {
  title: "انگشتر و تک‌نگین طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع انگشترهای تک‌نگین سولیتر، حلقه‌های ست ازدواج، انگشترهای بدون نگین کارتیه و پورتوفینو با عیار استاندارد ۷۵۰.",
};

export default function RingsPage() {
  const products = [
    {
      title: "انگشتر تک‌نگین سولیتر پرنسسی",
      category: "انگشتر نامزدی",
      weight: "۳.۶۰۰ گرم",
      wage: "پرفروش‌ترین هدیه",
      image: "/light-theme-first.jpg",
    },
    {
      title: "حلقه ست ازدواج رینگی ساده مات",
      category: "حلقه ازدواج",
      weight: "۷.۸۰۰ گرم (جفت)",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "انگشتر پورتوفینو سه‌رنگ بدون نگین",
      category: "انگشتر مجلسی",
      weight: "۵.۴۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "انگشتر کارتیه زنجیری با نگین برلیان",
      category: "انگشتر مدرن",
      weight: "۴.۲۰۰ گرم",
      wage: "شرکتی درجه یک",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="کالکشن درخشان"
      titleHighlight="انگشتر و تک‌نگین"
      subtitle="زیباترین حلقه‌ها و انگشترهای طلا؛ از نمادهای ابدی عشق و پیوند تا رینگ‌های روزمره و ترند با امکان تغییر سایز رایگان."
      badge="حلقه و انگشتر"
      badgeIcon={FaRing}
      breadcrumbs={[
        { title: "زیورآلات و تک‌پوش", href: "/jewelry" },
        { title: "انگشتر و تک‌نگین", href: "/jewelry/rings" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              تعیین دقیق سایز انگشتر:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              نگران سایز انگشتر نباشید؛ کلیه سفارشات با ضمانت تعویض سایز و امکان تغییر اندازه رایگان در کارگاه گالری تحویل داده می‌شوند.
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
