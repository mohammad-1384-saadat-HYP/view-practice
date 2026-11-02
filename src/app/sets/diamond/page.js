import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";
import { FaShieldAlt, FaCertificate } from "react-icons/fa";

export const metadata = {
  title: "سرویس جواهر و برلیان ۱۸ عیار | ویترین طلا و جواهر",
  description: "فاخرترین سرویس‌های جواهر با الماس‌های اصل برلیان، یاقوت و زمرد دارای شناسنامه بین‌المللی سنگ و ضمانت بازخرید رسمی.",
};

export default function DiamondSetsPage() {
  const products = [
    {
      title: "سرویس برلیان باگت و اشک سلطنتی",
      category: "سرویس جواهر",
      weight: "۳۱.۴۰۰ گرم",
      wage: "الماس طبیعی GIA",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "سرویس زمرد کلمبیا و برلیان مدور",
      category: "سرویس جواهر",
      weight: "۲۸.۲۰۰ گرم",
      wage: "شناسنامه‌دار اصل",
      image: "/light-theme-first.jpg",
    },
    {
      title: "سرویس تنیسی جواهر الماس تراش گرد",
      category: "سرویس جواهر",
      weight: "۱۹.۶۰۰ گرم",
      wage: "درجه پاکی VVS1",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "نیم‌ست یاقوت کبود و الماس مارکیز",
      category: "سرویس جواهر",
      weight: "۱۶.۸۰۰ گرم",
      wage: "گارانتی اصالت سنگ",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="مجموعه شاهانه"
      titleHighlight="سرویس جواهر و برلیان"
      subtitle="زیبایی جاودانه الماس‌های تراش‌خورده و سنگ‌های قیمتی شناسنامه‌دار بر پایه‌های نفیس طلای ۱۸ عیار، همراه با برگه اصالت و ضمانت بازخرید مادام‌العمر."
      badge="جواهرات اصیل و فاخر"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "سرویس و نیم‌ست", href: "/sets" },
        { title: "سرویس جواهر و برلیان", href: "/sets/diamond" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ScrollReveal>
          <div className="flex items-start gap-3.5 rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <FaCertificate className="size-6 shrink-0 text-gold-500 mt-1" />
            <div>
              <h3 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
                شناسنامه سنگ‌های قیمتی
              </h3>
              <p className="mt-1 text-xs text-ink/75 dark:text-paper/75">
                تمام سنگ‌های برلیان همراه با درجه‌بندی دقیق رنگ (Color)، پاکی (Clarity) و تراش (Cut) در فاکتور رسمی قید می‌شوند.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-start gap-3.5 rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <FaShieldAlt className="size-6 shrink-0 text-gold-500 mt-1" />
            <div>
              <h3 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
                ضمانت بازخرید رسمی
              </h3>
              <p className="mt-1 text-xs text-ink/75 dark:text-paper/75">
                تضمین تعویض و بازخرید سنگ‌های جواهر بر اساس ضوابط رسمی اتحادیه کشوری با کمترین کسر تجاری.
              </p>
            </div>
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
