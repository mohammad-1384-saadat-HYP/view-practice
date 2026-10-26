import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { GiCutDiamond } from "react-icons/gi";
import { FaAngleRight, FaGem } from "react-icons/fa";

export const metadata = {
  title: "کالکشن طلا و جواهر | ویترین طلا و جواهرات ۱۸ عیار",
  description: "مرور جامع تمامی کالکشن‌های طلا و جواهر ویترین: سرویس‌های عروس، نیم‌ست‌های مدرن، النگو، دستبند و شمش طلا.",
};

export default function CollectionsPage() {
  const collections = [
    {
      title: "کالکشن سرویس و نیم‌ست",
      href: "/sets",
      desc: "سرویس‌های عروس، تراش‌های بدون نگین و ست‌های برلیان",
      count: "بیش از ۳۵۰ مدل",
    },
    {
      title: "کالکشن زیورآلات و تک‌پوش",
      href: "/jewelry",
      desc: "انگشتر، گردنبند، گوشواره، پابند و زیورآلات مردانه",
      count: "بیش از ۸۰۰ مدل",
    },
    {
      title: "کالکشن شمش و سکه بانکی",
      href: "/bullion-coins",
      desc: "طلای ۲۴ عیار سرمایه‌گذاری با پلمپ امنیتی و هولوگرام",
      count: "انواع وزن‌های استاندارد",
    },
    {
      title: "کالکشن‌های اختصاصی دست‌ساز",
      href: "/exclusive-collections",
      desc: "آثار لیمیتد ادیشن و سنگ‌های قیمتی شناسنامه‌دار",
      count: "نسخه‌های محدود",
    },
  ];

  const products = [
    {
      title: "سرویس سلطنتی برلیان طرح شکوفه",
      category: "کالکشن جواهر",
      weight: "۲۹.۴۰۰ گرم",
      wage: "جواهر شناسنامه‌دار",
      image: "/light-theme-first.jpg",
    },
    {
      title: "دستبند کارتیه پهن پیچی ۱۸ عیار",
      category: "کالکشن کارتیه",
      weight: "۱۸.۵۰۰ گرم",
      wage: "شرکتی درجه یک",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "نیم‌ست تراش آینه‌ای فیوژن بدون نگین",
      category: "کالکشن تراش",
      weight: "۱۱.۸۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "گردنبند ون‌کلیف صدف طبیعی و طلا",
      category: "کالکشن مینیمال",
      weight: "۵.۲۰۰ گرم",
      wage: "پرفروش‌ترین مدل",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="ویترین جامع"
      titleHighlight="کالکشن‌های طلا و جواهر"
      subtitle="آرشیوی فاخر و متنوع از برترین برندها و سبک‌های طلا و جواهر؛ طراحی‌های چشم‌نواز با بالاترین استانداردهای زرگری و فاکتور رسمی معتبر."
      badge="همه کالکشن‌ها"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[{ title: "کالکشن طلا و جواهر", href: "/collections" }]}
      bgClass="bg-theme-first"
    >
      {/* Collections Overview */}
      <section>
        <ScrollReveal>
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              دسته‌بندی‌های اصلی گالری
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"
            />
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
          {collections.map((col, idx) => (
            <li key={col.href}>
              <ScrollReveal delay={idx * 0.08} y={20}>
                <Link
                  href={col.href}
                  className="group flex flex-col justify-between rounded-2xl border border-gold-500/40 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl dark:bg-night-900/70"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-gold-600 dark:text-gold-400">
                        {col.count}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-ink transition-colors group-hover:text-gold-600 dark:text-paper dark:group-hover:text-gold-400">
                        {col.title}
                      </h3>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500 group-hover:text-black">
                      <FaAngleRight aria-hidden="true" className="size-4 -scale-x-100" />
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                    {col.desc}
                  </p>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Pieces */}
      <section>
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              آثار برگزیده کالکشن‌های طلا
            </h2>
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
