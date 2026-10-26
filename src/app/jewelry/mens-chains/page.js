import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";

export const metadata = {
  title: "زنجیر و دستبند مردانه طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "مجموعه اختصاصی زیورآلات مردانه شامل زنجیرهای کارتیر، فیگارو، رولکس، دستبندهای چرم طبیعی و طلای ۱۸ عیار با فاکتور رسمی.",
};

export default function MensChainsPage() {
  const products = [
    {
      title: "زنجیر مردانه کارتیه میامی کوبایی پهن",
      category: "زنجیر مردانه",
      weight: "۲۸.۵۰۰ گرم",
      wage: "استحکام فوق‌العاده",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "دستبند رولکس دورنگ مردانه ۱۸ عیار",
      category: "دستبند مردانه",
      weight: "۱۸.۲۰۰ گرم",
      wage: "طراحی لوکس ساعت",
      image: "/light-theme-first.jpg",
    },
    {
      title: "دستبند چرم گاوی اصل با پلاک طلای فروهر",
      category: "دستبند چرم و طلا",
      weight: "۴.۳۰۰ گرم",
      wage: "هدیه ارزنده",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "زنجیر فیگارو ایتالیایی بافت ۳ به ۱",
      category: "زنجیر مردانه",
      weight: "۱۴.۶۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="کالکشن پرستیژ"
      titleHighlight="زنجیر و دستبند مردانه"
      subtitle="زیورآلاتی با وقار و اصیل متناسب با آقایان خوش‌پوش؛ دستبندهای تلفیقی چرم و طلا، انگشترهای عقیق و زنجیرهای مقاوم با استاندارد عیار ۷۵۰."
      badge="کالکشن آقایان"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "زیورآلات و تک‌پوش", href: "/jewelry" },
        { title: "زنجیر و دستبند مردانه", href: "/jewelry/mens-chains" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              اصالت و دوام دستبندهای چرم:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              چرم‌های استفاده شده کاملاً طبیعی و ضد پوسیدگی بوده و قفل‌ها از جنس استیل ضد زنگ ۳۱۶L با روکش آبکاری طلای مقاوم ساخته شده‌اند.
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
