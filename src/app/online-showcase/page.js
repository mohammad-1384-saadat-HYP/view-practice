import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { GiCutDiamond } from "react-icons/gi";
import {
  FaVideo,
  FaShieldAlt,
  FaCalculator,
  FaTruck,
  FaAngleRight,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "ویترین آنلاین طلا و جواهر | گالری هوشمند ۱۸ عیار",
  description:
    "مشاهده زنده و خرید مستقیم از ویترین آنلاین طلا و جواهرات ۱۸ عیار با فاکتور رسمی معتبر، محاسبه لحظه‌ای قیمت طلا و مشاوره ویدیویی.",
};

export default function OnlineShowcasePage() {
  const showcaseFeatures = [
    {
      title: "نرخ لحظه‌ای و شفاف",
      desc: "محاسبه دقیق قیمت بر اساس نرخ زنده طلای ۱۸ عیار اتحادیه بدون هزینه‌های پنهان.",
      icon: FaCalculator,
    },
    {
      title: "مشاوره تصویری زنده",
      desc: "امکان هماهنگی تماس ویدیویی برای مشاهده دقیق کارها روی دست قبل از تصمیم‌گیری.",
      icon: FaVideo,
    },
    {
      title: "فاکتور رسمی و معتبر",
      desc: "صدور فاکتور چاپی با هولوگرام، درج وزن دقیق تا سه رقم اعشار و کد ری‌گیری.",
      icon: FaShieldAlt,
    },
    {
      title: "ارسال بیمه‌شده به سراسر ایران",
      desc: "بسته‌بندی پلمپ امنیتی و ارسال با پست ویژه بیمه‌شده همراه با ضمانت تحویل.",
      icon: FaTruck,
    },
  ];

  const quickCategories = [
    { title: "سرویس‌های مجلسی", href: "/sets", count: "۱۲ مدل موجود در ویترین" },
    { title: "النگو و تک‌پوش", href: "/sets/bracelets", count: "۱۸ مدل پرفروش" },
    { title: "انگشتر و تک‌نگین", href: "/jewelry/rings", count: "۲۴ مدل ژورنالی" },
    { title: "گردنبند و مدال", href: "/jewelry/necklaces", count: "۱۵ مدل مینیمال" },
    { title: "شمش و سکه سرمایه‌گذاری", href: "/bullion-coins", count: "تحویل فوری" },
  ];

  const products = [
    {
      title: "سرویس عروس پرنسسی تمام برلیان ۱۸ عیار",
      category: "ویترین سرویس",
      weight: "۳۲.۶۰۰ گرم",
      wage: "جواهر شناسنامه‌دار",
      image: "/light-theme-first.jpg",
    },
    {
      title: "دستبند کارتیه کوبایی پهن مات و براق",
      category: "ویترین دستبند",
      weight: "۱۷.۴۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "انگشتر سولیتر نامزدی پایه الماس مارکیز",
      category: "ویترین انگشتر",
      weight: "۴.۸۵۰ گرم",
      wage: "پرفروش‌ترین هدیه",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "نیم‌ست تراش خورده فیوژن بدون نگین",
      category: "ویترین نیم‌ست",
      weight: "۱۰.۲۰۰ گرم",
      wage: "شرکتی استاندارد",
      image: "/light-theme-middle.jpg",
    },
    {
      title: "النگو البرنادو دامله سه‌رنگ سایز ۲",
      category: "ویترین النگو",
      weight: "۶.۳۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/light-theme-first.jpg",
    },
    {
      title: "شمش طلای ۵ گرمی ۲۴ عیار با پلمپ امنیتی",
      category: "ویترین شمش",
      weight: "۵.۰۰۰ گرم",
      wage: "پلمپ استاندارد بانکی",
      karat: "۲۴ عیار (۹۹۹.۹)",
      image: "/dark-theme-first.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="تجربه هوشمند خرید طلا در"
      titleHighlight="ویترین آنلاین طلا و جواهر"
      subtitle="جدیدترین مصنوعات و کالکشن‌های طلای ۱۸ عیار را به صورت آنلاین و لحظه‌ای مشاهده کنید؛ با امکان استعلام قیمت زنده، ویدیوهای باکیفیت و مشاوره مستقیم با کارشناسان زرگری."
      badge="ویترین زنده و آنلاین"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[{ title: "ویترین آنلاین", href: "/online-showcase" }]}
      bgClass="bg-theme-first"
    >
      {/* 4 Trust Feature Cards */}
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 list-none p-0 m-0">
          {showcaseFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <li key={feat.title}>
                <ScrollReveal delay={idx * 0.08} y={20}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-500/35 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg dark:bg-night-900/70">
                    <div>
                      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-600 dark:text-gold-400">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-base font-bold text-ink dark:text-paper">
                        {feat.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Quick Showcase Categories */}
      <section>
        <ScrollReveal>
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              دسته‌بندی‌های فعال در ویترین آنلاین
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 list-none p-0 m-0">
          {quickCategories.map((cat, idx) => (
            <li key={cat.title}>
              <ScrollReveal delay={idx * 0.06} y={15}>
                <Link
                  href={cat.href}
                  className="group flex flex-col justify-between rounded-2xl border border-gold-500/35 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-md dark:bg-night-900/70"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-ink transition-colors group-hover:text-gold-600 dark:text-paper dark:group-hover:text-gold-400">
                      {cat.title}
                    </span>
                    <FaAngleRight
                      aria-hidden="true"
                      className="size-3.5 -scale-x-100 text-gold-500 transition-transform group-hover:-translate-x-1"
                    />
                  </div>
                  <span className="mt-2 text-[11px] font-medium text-gold-600 dark:text-gold-400">
                    {cat.count}
                  </span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Live Showcase Products */}
      <section>
        <ScrollReveal>
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-500/10 px-4 py-1 text-xs font-semibold text-gold-600 dark:text-gold-400">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>موجود و آماده تحویل فوری در ویترین</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-ink dark:text-paper sm:text-2xl lg:text-3xl">
              کالکشن‌های لحظه‌ای ویترین آنلاین
            </h2>
            <p className="mt-2 max-w-xl text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              محاسبه آنلاین وزن دقیق، اجرت ساخت منصفانه و ارائه فاکتور رسمی معتبر اتحادیه.
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

      {/* Video Consultation & Reservation Box */}
      <section>
        <ScrollReveal>
          <div className="rounded-2xl border border-gold-500/40 bg-gradient-to-br from-gold-500/10 via-black/40 to-transparent p-6 dark:bg-night-900/60 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8 space-y-3 text-start">
                <span className="inline-block rounded-full border border-gold-400/60 bg-black/40 px-3 py-1 text-xs font-semibold text-gold-300">
                  خدمت اختصاصی ویترین
                </span>
                <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
                  مشاهده زنده مدل‌ها بر روی دست با تماس ویدیویی
                </h2>
                <p className="text-xs leading-relaxed text-ink/80 dark:text-paper/80 sm:text-sm">
                  اگر مایلید درخشش و ابعاد واقعی طلا را قبل از خرید از نزدیک لمس کنید، کافی است درخواست مشاوره تصویری ثبت کنید تا کارشناس گالری قطعه انتخابی شما را به صورت زنده نمایش دهد.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-gold-600 dark:text-gold-400">
                  <div className="flex items-center gap-1.5">
                    <FaCheckCircle className="size-3.5" />
                    <span>امکان مقایسه همزمان چندین مدل</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCheckCircle className="size-3.5" />
                    <span>رزرو قطعه به مدت ۲۴ ساعت</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 px-6 py-3.5 text-xs font-bold text-black shadow-lg shadow-gold-500/25 transition-all hover:scale-105 active:scale-95 sm:text-sm"
                >
                  <FaVideo className="size-4" />
                  <span>درخواست مشاوره تصویری و رزرو</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </SubPageLayout>
  );
}
