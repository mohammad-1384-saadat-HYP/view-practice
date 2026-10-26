import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";
import { FaAward, FaBalanceScale, FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "زیورآلات طلای ۱۸ عیار (۷۵۰) | استاندارد اصالت ویترین طلا",
  description: "راهنمای تخصصی طلای ۱۸ عیار با کد استاندارد ۷۵۰؛ چرا ۱۸ عیار بهترین انتخاب برای ساخت زیورآلات با استحکام و درخشش فوق‌العاده است.",
};

export default function Gold18kPage() {
  const benefits = [
    {
      title: "عیار رسمی ۷۵۰ اتحادیه",
      desc: "۷۵٪ طلای خالص ترکیب شده با آلیاژهای گرانبها جهت ایجاد بالاترین مقاومت مکانیکی در برابر خط و خش و تغییر شکل.",
      icon: FaAward,
    },
    {
      title: "تعادل کامل زیبایی و دوام",
      desc: "طلای ۲۴ عیار به دلیل نرمی بیش از حد مناسب ساخت زیورآلات ظریف نیست؛ ۱۸ عیار استاندارد طلایی جهان برای زرگری فاخر است.",
      icon: FaBalanceScale,
    },
    {
      title: "فاکتور معتبر و قابلیت بازخرید",
      desc: "تمام قطعات با ثبت دقیق گرم و سوت روی فاکتور رسمی چاپی ارائه شده و بدون دغدغه در سراسر کشور قابل بازخرید هستند.",
      icon: FaShieldAlt,
    },
  ];

  const products = [
    {
      title: "دستبند تنیسی ۱۸ عیار طلای زرد",
      category: "زیورآلات ۱۸ عیار",
      weight: "۸.۹۰۰ گرم",
      wage: "پرفروش‌ترین مدل",
      image: "/light-theme-first.jpg",
    },
    {
      title: "انگشتر پورتوفینو فیوژن ۱۸ عیار",
      category: "زیورآلات ۱۸ عیار",
      weight: "۵.۲۵۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "سرویس کارتیه لاو ۱۸ عیار مات و براق",
      category: "زیورآلات ۱۸ عیار",
      weight: "۲۱.۳۰۰ گرم",
      wage: "شرکتی درجه یک",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "گوشواره آویز طرح برگ زیتون ۱۸ عیار",
      category: "زیورآلات ۱۸ عیار",
      weight: "۳.۷۵۰ گرم",
      wage: "سبک و اقتصادی",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="استاندارد طلایی"
      titleHighlight="زیورآلات ۱۸ عیار (۷۵۰)"
      subtitle="آشنایی با برترین آلیاژ ساخت طلا و جواهر در جهان؛ درخششی چشم‌نواز با استحکام بالا که زیبایی و ارزش خود را تا نسل‌ها حفظ می‌کند."
      badge="استاندارد عیار ۷۵۰"
      badgeIcon={FaAward}
      breadcrumbs={[{ title: "زیورآلات ۱۸ عیار", href: "/gold-18k" }]}
      bgClass="bg-theme-first"
    >
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <ScrollReveal delay={idx * 0.1} y={20}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-500/35 bg-white/70 p-6 shadow-sm dark:bg-night-900/70">
                    <div>
                      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-600 dark:text-gold-400">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-base font-bold text-ink dark:text-paper">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
            محصولات برگزیده طلای ۱۸ عیار
          </h2>
        </div>

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
