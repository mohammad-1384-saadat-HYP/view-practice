import SubPageLayout from "@/components/SubPageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";
import { FaBookOpen, FaCalculator, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

export const metadata = {
  title: "راهنمای جامع خرید طلا و اصالت عیار | ویترین طلا و جواهر",
  description: "آموزش گام‌به‌گام نحوه خرید طلا، فرمول رسمی محاسبه قیمت و اجرت ساخت طلا و روش‌های تشخیص طلای استاندارد ۱۸ عیار.",
};

export default function BuyingGuidePage() {
  const steps = [
    {
      num: "۱",
      title: "انتخاب مدل و استعلام آنلاین",
      desc: "طرح مورد نظر خود را در دسته‌بندی‌های ویترین انتخاب کنید. در صورت نیاز به سایزبندی مچ یا انگشت، می‌توانید با پشتیبانی مشورت کنید.",
    },
    {
      num: "۲",
      title: "محاسبه دقیق بر اساس نرخ روز",
      desc: "قیمت نهایی با فرمول رسمی اتحادیه محاسبه شده و بدون هیچ‌گونه هزینه پنهان با جزئیات کامل به شما اعلام می‌گردد.",
    },
    {
      num: "۳",
      title: "صدور فاکتور رسمی معتبر چاپی",
      desc: "فاکتور قانونی با درج مشخصات کامل عیار ۷۵۰، وزن دقیق با ترازوی سه رقم اعشار، اجرت ساخت و مهر و امضای رسمی صادر می‌شود.",
    },
    {
      num: "۴",
      title: "بسته‌بندی کادویی و ارسال بیمه‌شده",
      desc: "محصول در جعبه لوکس کادویی قرار گرفته و با پست ویژه بیمه‌شده به تمام نقاط کشور با تحویل امن ارسال می‌گردد.",
    },
  ];

  const faqs = [
    {
      q: "فرمول دقیق محاسبه قیمت طلا چیست؟",
      a: "قیمت نهایی = [وزن طلا × (قیمت روز هر گرم طلای ۱۸ عیار + اجرت ساخت)] + ۷٪ سود قانونی + ۹٪ مالیات (که طبق قانون جدید مالیات فقط روی اجرت و سود محاسبه می‌شود، نه روی اصل طلا).",
    },
    {
      q: "چگونه از اصالت طلای خریداری شده مطمئن شوم؟",
      a: "تمامی محصولات ویترین طلا دارای کد استاندارد ری‌گیری و عیار ۷۵۰ حک‌شده روی بدنه هستند و همراه با فاکتور رسمی معتبر دارای مجوز از اتحادیه ارسال می‌شوند.",
    },
    {
      q: "اگر سایز انگشتر یا دستبند نامناسب بود چه باید کرد؟",
      a: "شما تا ۷ روز پس از دریافت سفارش فرصت دارید در صورت مغایرت سایز، محصول را جهت تغییر اندازه یا تعویض رایگان برای ما ارسال کنید.",
    },
    {
      q: "آیا ارسال پستی طلا از نظر امنیتی قابل اعتماد است؟",
      a: "بله، مرسولات با بیمه ارزش کامل ارسال می‌شوند و بسته‌بندی کاملاً پلمپ و بدون هیچ نشانه‌ای از محتویات طلا است تا حداکثر امنیت حفظ شود.",
    },
  ];

  return (
    <SubPageLayout
      title="راهنمای هوشمندانه"
      titleHighlight="خرید طلا و اصالت عیار"
      subtitle="خرید طلا باید تجربه‌ای شفاف، ساده و آسوده‌خاطر باشد؛ در این بخش با گام‌های خرید، فرمول محاسبه قیمت و نکات کلیدی تشخیص اصالت عیار آشنا شوید."
      badge="راهنمای تخصصی خرید طلا"
      badgeIcon={FaBookOpen}
      breadcrumbs={[{ title: "راهنمای خرید و اصالت عیار", href: "/buying-guide" }]}
      bgClass="bg-theme-first"
    >
      {/* 4 Steps Section */}
      <section>
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              ۴ گام ساده برای خرید آنلاین طلا از ویترین
            </h2>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
          {steps.map((step, idx) => (
            <li key={step.num}>
              <ScrollReveal delay={idx * 0.08} y={20}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-gold-500/35 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg dark:bg-night-900/70">
                  <div>
                    <span className="flex size-10 items-center justify-center rounded-xl bg-gold-500 text-base font-black text-black">
                      {step.num}
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink dark:text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Formula Box */}
      <section>
        <ScrollReveal>
          <div className="rounded-2xl border border-gold-500/40 bg-gold-500/5 p-6 dark:bg-night-900/60 sm:p-8">
            <div className="flex items-center gap-3 text-gold-600 dark:text-gold-400">
              <FaCalculator className="size-6" />
              <h2 className="text-lg font-bold sm:text-xl">
                شفافیت در فرمول محاسبه قیمت طلا
              </h2>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink/80 dark:text-paper/80 sm:text-sm">
              بر اساس مصوبه جدید قانون مالیات بر ارزش افزوده، مالیات ۹ درصدی دیگر از کل طلای خام کسر نمی‌شود و صرفاً به سود و اجرت ساخت تعلق می‌گیرد. در فاکتور رسمی ویترین طلا، این تفکیک دقیقاً رعایت شده تا هیچ هزینه اضافی به شما تحمیل نشود.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ Accordion List */}
      <section>
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
              پرسش‌های متداول خریداران
            </h2>
          </div>
        </ScrollReveal>

        <ul className="mx-auto max-w-4xl space-y-4 list-none p-0 m-0">
          {faqs.map((faq, idx) => (
            <li key={faq.q}>
              <ScrollReveal delay={idx * 0.08} y={15}>
                <div className="rounded-2xl border border-gold-500/30 bg-white/70 p-6 shadow-sm dark:bg-night-900/70">
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="mt-1 size-5 shrink-0 text-gold-500" />
                    <div>
                      <h3 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75 sm:text-sm">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </section>
    </SubPageLayout>
  );
}
