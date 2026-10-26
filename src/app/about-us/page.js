import SubPageLayout from "@/components/SubPageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";
import { FaHistory, FaHandshake, FaGem, FaAward } from "react-icons/fa";

export const metadata = {
  title: "درباره گالری ویترین طلا | اصالت، اعتماد و هنر زرگری",
  description: "آشنایی با تاریخچه، تعهدات، ارزش‌ها و استانداردهای گالری ویترین طلا؛ بیش از دو دهه تجربه در طراحی و عرضه مصنوعات طلای ۱۸ عیار.",
};

export default function AboutUsPage() {
  const stats = [
    { value: "۲۵+", label: "سال سابقه درخشان در صنعت طلا و جواهر" },
    { value: "۱۲,۰۰۰+", label: "مشتری وفادار در سراسر استان‌های ایران" },
    { value: "۱,۵۰۰+", label: "طرح و مدل اختصاصی و ترند روز" },
    { value: "۱۰۰٪", label: "تضمین اصالت عیار ۷۵۰ با فاکتور رسمی" },
  ];

  const values = [
    {
      title: "شفافیت مطلق در قیمت‌گذاری",
      desc: "ما معتقدیم مشتری حق دارد جزییات کامل وزن، قیمت طلای خام، درصد اجرت و سود قانونی را بدون هیچ رقم پنهانی روی فاکتور مشاهده کند.",
      icon: FaHandshake,
    },
    {
      title: "تعهد به اصالت عیار و سنگ",
      desc: "تمامی مصنوعات در آزمایشگاه‌های معتبر ری‌گیری عیارسنجی شده و تحت نظارت رسمی اتحادیه طلا و جواهر عرضه می‌گردند.",
      icon: FaAward,
    },
    {
      title: "تلفیق هنر سنتی و تکنولوژی روز",
      desc: "استفاده از دقیق‌ترین دستگاه‌های ساخت لیزری و پرینترهای سه‌بعدی طلاکاری در کنار ظرافت دستان استادکاران باسابقه ایرانی.",
      icon: FaGem,
    },
    {
      title: "احترام و همراهی مادام‌العمر",
      desc: "رابطه ما با مشتری با خرید پایان نمی‌پذیرد؛ خدمات پس از فروش، آبکاری دوره‌ای و ضمانت بازخرید رسمی همراه همیشگی شماست.",
      icon: FaHistory,
    },
  ];

  return (
    <SubPageLayout
      title="داستان اصالت ما"
      titleHighlight="درباره گالری ویترین طلا"
      subtitle="بیش از دو دهه تجربه، هنر دست استادکاران زرگر و اعتماد همراهانی که درخشش خاطراتشان را به ما سپردند."
      badge="درباره ما و ارزش‌هایمان"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[{ title: "درباره گالری", href: "/about-us" }]}
      bgClass="bg-theme-first"
    >
      {/* Stats Counter */}
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 list-none p-0 m-0">
          {stats.map((s, idx) => (
            <li key={s.label}>
              <ScrollReveal delay={idx * 0.08} y={15}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-gold-500/35 bg-white/70 p-6 text-center shadow-sm dark:bg-night-900/70">
                  <span className="text-2xl font-black bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent dark:from-gold-400 dark:to-gold-300 sm:text-3xl lg:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-ink/80 dark:text-paper/80 sm:text-sm">
                    {s.label}
                  </span>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Story Narrative */}
      <section>
        <ScrollReveal>
          <div className="rounded-2xl border border-gold-500/40 bg-white/80 p-6 shadow-xl dark:bg-night-900/80 sm:p-10">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              از کارگاه سنتی بازار تا ویترین مدرن آنلاین
            </h2>
            <div className="mt-4 space-y-4 text-xs leading-relaxed text-ink/80 dark:text-paper/80 sm:text-sm sm:leading-loose">
              <p>
                ویترین طلا فعالیت خود را از اواخر دهه هفتاد خورشیدی در قلب بازار طلای تهران آغاز کرد. هدف اولیه ما ساده و در عین حال بنیادین بود: ساخت زیورآلاتی با بالاترین کیفیت پرداخت و عرضه آن با شفاف‌ترین قیمت به خانواده‌های ایرانی.
              </p>
              <p>
                امروز، با راه‌اندازی ویترین آنلاین، این تجربه و اعتماد سنتی را به فضای امن دیجیتال آورده‌ایم. دیگر نیازی به صرف ساعت‌ها وقت در شلوغی بازار نیست؛ شما می‌توانید در هر کجای ایران، جدیدترین مدل‌های ژورنالی طلا را با محاسبه لحظه‌ای قیمت طلا و شفافیت صددرصدی فاکتور به آسانی سفارش دهید.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Values */}
      <section>
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              اصولی که هرگز در ویترین طلا تغییر نمی‌کنند
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              چرا هزاران خانواده ایرانی خرید طلا را با ما تجربه می‌کنند؟
            </p>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 list-none p-0 m-0">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <li key={v.title}>
                <ScrollReveal delay={idx * 0.08} y={20}>
                  <div className="flex h-full gap-4 rounded-2xl border border-gold-500/35 bg-white/70 p-6 shadow-sm dark:bg-night-900/70">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-600 dark:text-gold-400">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink dark:text-paper sm:text-lg">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </section>
    </SubPageLayout>
  );
}
