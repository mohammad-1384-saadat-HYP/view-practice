import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { GiCutDiamond } from "react-icons/gi";
import { FaAngleRight, FaRing } from "react-icons/fa";

export const metadata = {
  title: "زیورآلات و تک‌پوش طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "مجموعه کامل انگشترهای تک‌نگین، گردنبندهای ظریف، گوشواره طلا، پابند، آویز ساعت و زنجیرهای مردانه با فاکتور رسمی.",
};

export default function JewelryPage() {
  const subcategories = [
    { title: "انگشتر و تک‌نگین", href: "/jewelry/rings", desc: "انگشترهای سولیتر، نامزدی، پورتوفینو و رینگ‌های مدرن" },
    { title: "گردنبند و مدال", href: "/jewelry/necklaces", desc: "زنجیرهای طلا، مدال‌های مذهبی، پلاک‌های اسم و چوکر" },
    { title: "گوشواره طلا", href: "/jewelry/earrings", desc: "گوشواره‌های حلقه‌ای، بخیه‌ای، میخی و آویزهای مجلسی" },
    { title: "پابند و آویز ساعت", href: "/jewelry/anklets", desc: "اکسسوری‌های ظریف زنانه برای استایل‌های مدرن و تابستانه" },
    { title: "زنجیر و دستبند مردانه", href: "/jewelry/mens-chains", desc: "زنجیرهای فیگارو، کارتیه مردانه، دستبند چرم و طلا" },
  ];

  const products = [
    {
      title: "انگشتر تک‌نگین سولیتر پایه برلیان",
      category: "انگشتر طلا",
      weight: "۴.۳۵۰ گرم",
      wage: "پرفروش‌ترین هدیه",
      image: "/light-theme-first.jpg",
    },
    {
      title: "گردنبند طلا طرح بال فرشته و نگین",
      category: "گردنبند طلا",
      weight: "۶.۸۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "گوشواره حلقه‌ای تراش‌دار دورنگ",
      category: "گوشواره طلا",
      weight: "۳.۶۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "پابند طلا با مهره‌های چشم‌نظر و گوی",
      category: "پابند طلا",
      weight: "۲.۴۵۰ گرم",
      wage: "سبک و اقتصادی",
      image: "/light-theme-middle.jpg",
    },
    {
      title: "زنجیر مردانه کارتیه پهن ایتالیایی",
      category: "زیورآلات مردانه",
      weight: "۱۸.۹۰۰ گرم",
      wage: "استحکام بالا",
      image: "/light-theme-first.jpg",
    },
    {
      title: "دستبند چرم طبیعی با پلاک طلای شعر",
      category: "دستبند مردانه",
      weight: "۳.۲۰۰ گرم",
      wage: "هدیه‌ای ارزشمند",
      image: "/dark-theme-first.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="مجموعه کامل"
      titleHighlight="زیورآلات و تک‌پوش طلا"
      subtitle="شیک‌ترین زیورآلات و اکسسوری‌های مدرن زنانه و مردانه با تنوع بالا در وزن و طراحی؛ مناسب برای استفاده روزمره، مهمانی‌ها و کادوهای به‌یادماندنی."
      badge="زیورآلات و تک‌پوش"
      badgeIcon={FaRing}
      breadcrumbs={[{ title: "زیورآلات و تک‌پوش", href: "/jewelry" }]}
      bgClass="bg-theme-first"
    >
      <section>
        <ScrollReveal>
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              دسته‌بندی‌های زیورآلات
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"
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

      <section>
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              جدیدترین محصولات زیورآلات و تک‌پوش
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              انتخاب آنلاین با شفاف‌ترین محاسبه وزن و اجرت ساخت
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
