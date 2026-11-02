import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";
import { FaCrown, FaStar } from "react-icons/fa";

export const metadata = {
  title: "کالکشن‌های اختصاصی ویترین طلا | نسخه محدود",
  description: "کالکشن‌های سفارشی و لیمیتد ادیشن طلا و جواهر دست‌ساز با امضای استادکاران برجسته و طراحی انحصاری.",
};

export default function ExclusiveCollectionsPage() {
  const products = [
    {
      title: "سرویس شاهانه کهکشان الماس و یاقوت سرخ",
      category: "لیمیتد ادیشن (تعداد ۱/۵)",
      weight: "۴۲.۵۰۰ گرم",
      wage: "دست‌ساز انحصاری",
      image: "/light-theme-first.jpg",
    },
    {
      title: "دستبند و انگشتر مروارید سیاه تاهیتی",
      category: "کالکشن اختصاصی",
      weight: "۱۵.۸۰۰ گرم",
      wage: "مروارید طبیعی اقیانوسی",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "گردنبند ونوس طلای مات برجسته و برلیان",
      category: "طراحی دست‌ساز",
      weight: "۱۸.۳۰۰ گرم",
      wage: "طراحی سال ۲۰۲۶",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "نیم‌ست پرنده هما با زمرد اصل زامبیا",
      category: "کالکشن باستانی",
      weight: "۲۱.۱۰۰ گرم",
      wage: "اثری کلکسیونی",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="هنر انحصاری"
      titleHighlight="کالکشن‌های اختصاصی"
      subtitle="آثاری تک‌نسخه و شاهکارهای دست‌ساز زرگری که به تعداد انگشت‌شمار خلق شده‌اند؛ هر قطعه یک اثر هنری جاودانه و سرمایه‌ای گران‌بها برای نسل‌های آینده."
      badge="نسخه‌های محدود (Limited Edition)"
      badgeIcon={FaCrown}
      breadcrumbs={[{ title: "کالکشن‌های اختصاصی", href: "/exclusive-collections" }]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-gold-500/40 bg-gradient-to-br from-gold-500/10 via-black/40 to-transparent p-6 dark:bg-night-900/60 sm:p-8">
            <div className="flex items-center justify-center gap-2 text-gold-400">
              <FaStar className="size-4" />
              <FaStar className="size-5" />
              <FaStar className="size-4" />
            </div>
            <h2 className="mt-3 text-lg font-bold text-ink dark:text-paper sm:text-xl">
              داستان خلق کالکشن‌های اختصاصی
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink/80 dark:text-paper/80 sm:text-sm">
              در این کالکشن، استادکاران ارشد گالری با بهره‌گیری از تکنیک‌های سنتی قلم‌زنی، مرصع‌کاری دستی و تلفیق آن با سنگ‌های طبیعی کمیاب، قطعاتی را پدید آورده‌اند که هیچ دو نمونه یکسانی از آن‌ها در جهان وجود ندارد.
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
