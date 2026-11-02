import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";
import { FaCrown, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "سرویس عروس لوکس ۱۸ عیار | ویترین طلا و جواهر",
  description: "فاخرترین سرویس‌های طلای عروس با درخشش الماس و تراش‌های خیره‌کننده ۱۸ عیار، همراه با فاکتور رسمی معتبر و شناسنامه سنگ.",
};

export default function BridalSetsPage() {
  const products = [
    {
      title: "سرویس سلطنتی عروس طرح تاج و برلیان",
      category: "سرویس عروس",
      weight: "۳۴.۲۰۰ گرم",
      wage: "طراحی سفارشی",
      image: "/light-theme-first.jpg",
    },
    {
      title: "سرویس عروس مدرن طرح فیلیپ چارلی",
      category: "سرویس عروس",
      weight: "۲۶.۵۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "سرویس پرنسسی تراش مارکیز و یاقوت سفید",
      category: "سرویس عروس",
      weight: "۲۹.۱۵۰ گرم",
      wage: "جواهر شناسنامه‌دار",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "سرویس عروس مروارید اصل و طلای سفید",
      category: "سرویس عروس",
      weight: "۲۱.۸۰۰ گرم",
      wage: "شرکتی استاندارد",
      image: "/light-theme-middle.jpg",
    },
  ];

  const highlights = [
    "تضمین بازخرید مادام‌العمر با فاکتور رسمی اتحادیه طلا و جواهر",
    "امکان سفارش پایه طلا در رنگ‌های زرد، سفید و رزگلد",
    "ارائه شناسنامه بین‌المللی سنگ برای سرویس‌های برلیان و جواهر",
    "سایزبندی دقیق و سفارشی‌سازی طول گردنبند و دستبند برای عروس",
  ];

  return (
    <SubPageLayout
      title="مجموعه باشکوه"
      titleHighlight="سرویس عروس لوکس"
      subtitle="درخشش بی‌پایان در خاص‌ترین شب زندگی شما؛ ترکیبی از ظرافت بی‌نظیر، طلای خالص ۱۸ عیار و درخشش چشم‌نواز با فاکتور رسمی و ضمانت اصالت عیار."
      badge="سرویس عروس و نامزدی"
      badgeIcon={FaCrown}
      breadcrumbs={[
        { title: "سرویس و نیم‌ست", href: "/sets" },
        { title: "سرویس عروس لوکس", href: "/sets/bridal" },
      ]}
      bgClass="bg-theme-first"
    >
      <section>
        <ScrollReveal>
          <div className="rounded-2xl border border-gold-500/30 bg-gold-500/5 p-6 dark:bg-night-900/60 sm:p-8">
            <h2 className="text-base font-bold text-ink dark:text-paper sm:text-lg">
              امتیازات انتخاب سرویس عروس از ویترین طلا:
            </h2>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-xs text-ink/80 dark:text-paper/80 sm:text-sm">
                  <FaCheckCircle className="mt-0.5 size-4 shrink-0 text-gold-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </section>

      <section>
        <ScrollReveal>
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              مدل‌های برگزیده سرویس عروس
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              انتخابی فاخر متناسب با بودجه و سلیقه شما
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
