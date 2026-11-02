import SubPageLayout from "@/components/SubPageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { FaShieldAlt, FaUndo, FaSyncAlt, FaGem } from "react-icons/fa";

export const metadata = {
  title: "ضمانت و خدمات پس از فروش | ویترین طلا و جواهر",
  description: "شرایط گارانتی رسمی، ضمانت اصالت عیار ۷۵۰، مهلت تعویض ۷ روزه و ضمانت بازخرید مادام‌العمر در گالری ویترین طلا.",
};

export default function GuaranteePage() {
  const policies = [
    {
      title: "ضمانت اصالت قطعی عیار ۷۵۰",
      desc: "تمامی محصولات ویترین طلا دارای استاندارد رسمی عیار ۱۸ (۷۵۰) بوده و با فاکتور چاپی معتبر اتحادیه تحویل می‌گردند. در صورت هرگونه مغایرت عیاری در آزمایشگاه‌های معتبر ری‌گیری، ۲ برابر ارزش طلا به خریدار مسترد خواهد شد.",
      icon: FaShieldAlt,
    },
    {
      title: "مهلت تعویض و بازگشت ۷ روزه",
      desc: "شما می‌توانید تا ۷ روز پس از دریافت سفارش، در صورت عدم رضایت از مدل، نامناسب بودن سایز یا وجود هرگونه اشکال، محصول را در شرایط آکبند تعویض نموده یا وجه پرداختی خود را به طور کامل دریافت نمایید.",
      icon: FaUndo,
    },
    {
      title: "ضمانت بازخرید مادام‌العمر",
      desc: "تمامی طلاهای خریداری شده از ویترین، در هر زمان با نرخ روز طلا بدون معطلی و با شفاف‌ترین فرمول محاسبه بازخرید می‌شوند و هیچ‌گونه افت نامتعارفی متوجه سرمایه شما نخواهد بود.",
      icon: FaSyncAlt,
    },
    {
      title: "خدمات رایگان آبکاری و تمیزکاری",
      desc: "هر سال یک‌بار می‌توانید زیورآلات خریداری شده را جهت شستشوی اولتراسونیک، تمیزکاری تخصصی و آبکاری مجدد به کارگاه گالری بسپارید تا درخشش روز اول را برای همیشه حفظ کنند.",
      icon: FaGem,
    },
  ];

  return (
    <SubPageLayout
      title="آسودگی خاطر پایدار با"
      titleHighlight="ضمانت و خدمات پس از فروش"
      subtitle="اعتماد شما گران‌بهاترین دارایی ماست؛ تعهدات رسمی و گارانتی‌های معتبر ویترین طلا برای خریدی آسوده، امن و ماندگار."
      badge="ضمانت‌نامه و گارانتی"
      badgeIcon={FaShieldAlt}
      breadcrumbs={[{ title: "ضمانت و خدمات پس از فروش", href: "/guarantee" }]}
      bgClass="bg-theme-first"
    >
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 list-none p-0 m-0">
          {policies.map((p, idx) => {
            const Icon = p.icon;
            return (
              <li key={p.title}>
                <ScrollReveal delay={idx * 0.08} y={20}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-500/35 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl dark:bg-night-900/70 sm:p-8">
                    <div>
                      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-600 dark:text-gold-400">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-base font-bold text-ink dark:text-paper sm:text-lg">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Conditions Box */}
      <section>
        <ScrollReveal>
          <div className="rounded-2xl border border-gold-500/40 bg-white/80 p-6 shadow-xl dark:bg-night-900/80 sm:p-8">
            <h2 className="text-base font-bold text-ink dark:text-paper sm:text-lg">
              شرایط استفاده از گارانتی تعویض:
            </h2>
            <ul className="mt-4 list-disc space-y-2 pr-5 text-xs text-ink/80 dark:text-paper/80 sm:text-sm">
              <li>فاکتور رسمی خرید به همراه بسته ارائه گردد.</li>
              <li>پلمپ یا هولوگرام شناسنامه سنگ در صورت وجود، مخدوش نشده باشد.</li>
              <li>محصول در شرایط اولیه (بدون ضربه، شکستگی یا تغییر شکل فیزیکی) باشد.</li>
              <li>هزینه‌های پستی بازگشت در موارد مغایرت یا نقص فنی بر عهده گالری ویترین طلا خواهد بود.</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>
    </SubPageLayout>
  );
}
