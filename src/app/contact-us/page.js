import SubPageLayout from "@/components/SubPageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { BiPhoneCall, BiMap, BiTimeFive, BiSupport } from "react-icons/bi";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export const metadata = {
  title: "مشاوره و خرید طلا | تماس با کارشناسان ویترین طلا",
  description: "ارتباط با کارشناسان ویترین طلا جهت مشاوره خرید، استعلام نرخ لحظه‌ای طلا، سفارش ساخت اختصاصی و پشتیبانی سفارشات.",
};

export default function ContactUsPage() {
  const contactInfo = [
    {
      title: "تلفن‌های تماس و مشاوره",
      desc: "۰۲۱-۵۵۶۶۷۷۸۸ | ۰۹۱۲-۳۴۵۶۷۸۹",
      icon: BiPhoneCall,
      sub: "پاسخگویی همه‌روزه از ۹ صبح تا ۹ شب",
    },
    {
      title: "پشتیبانی برخط واتساپ",
      desc: "۰۹۱۲-۳۴۵۶۷۸۹",
      icon: FaWhatsapp,
      sub: "ارسال تصاویر ژورنالی و استعلام آنلاین",
    },
    {
      title: "آدرس شوروم و گالری",
      desc: "تهران، بازار بزرگ، راسته زرگرها، پلاک ۱۱۰",
      icon: BiMap,
      sub: "امکان مراجعه حضوری با هماهنگی قبلی",
    },
    {
      title: "ساعات کاری و تحویل",
      desc: "شنبه تا پنجشنبه: ۱۰:۰۰ الی ۱۹:۰۰",
      icon: BiTimeFive,
      sub: "پشتیبانی آنلاین در تمام ایام هفته",
    },
  ];

  return (
    <SubPageLayout
      title="همراه شما هستیم"
      titleHighlight="مشاوره تخصصی و خرید طلا"
      subtitle="سوالی درباره نحوه خرید، محاسبه اجرت ساخت یا سفارش مدل‌های اختصاصی دارید؟ کارشناسان ما مشتاقانه آماده راهنمایی و پاسخگویی به شما هستند."
      badge="تماس و پشتیبانی"
      badgeIcon={BiSupport}
      breadcrumbs={[{ title: "مشاوره و خرید", href: "/contact-us" }]}
      bgClass="bg-theme-first"
    >
      {/* Contact Cards */}
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 list-none p-0 m-0">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <ScrollReveal delay={idx * 0.08} y={20}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-500/35 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg dark:bg-night-900/70">
                    <div>
                      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-600 dark:text-gold-400">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-base font-bold text-ink dark:text-paper">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-gold-600 dark:text-gold-400">
                        {item.desc}
                      </p>
                    </div>
                    <p className="mt-4 text-xs text-ink/70 dark:text-paper/70 border-t border-night-200/50 dark:border-night-800/50 pt-3">
                      {item.sub}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Inquiry Form & Social Channels */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ScrollReveal>
            <div className="rounded-2xl border border-gold-500/40 bg-white/80 p-6 shadow-xl dark:bg-night-900/80 sm:p-8">
              <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
                فرم درخواست مشاوره و استعلام قیمت
              </h2>
              <p className="mt-2 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
                مشخصات خود را وارد کنید تا کارشناسان ما ظرف کمتر از ۳۰ دقیقه با شما تماس بگیرند.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-ink dark:text-paper">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: سارا محمدی"
                      className="mt-1.5 w-full rounded-xl border border-night-200 bg-white px-4 py-2.5 text-sm text-ink placeholder-ink/40 outline-none transition-colors focus:border-gold-500 dark:border-night-700 dark:bg-black dark:text-paper dark:placeholder-paper/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink dark:text-paper">
                      شماره تماس همراه
                    </label>
                    <input
                      type="tel"
                      placeholder="۰۹۱۲XXXXXXX"
                      className="mt-1.5 w-full rounded-xl border border-night-200 bg-white px-4 py-2.5 text-sm text-ink placeholder-ink/40 outline-none transition-colors focus:border-gold-500 dark:border-night-700 dark:bg-black dark:text-paper dark:placeholder-paper/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink dark:text-paper">
                    موضوع درخواست
                  </label>
                  <select className="mt-1.5 w-full rounded-xl border border-night-200 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-gold-500 dark:border-night-700 dark:bg-black dark:text-paper">
                    <option>استعلام قیمت لحظه‌ای طلا و اجرت</option>
                    <option>سفارش ساخت طرح و ژورنال اختصاصی</option>
                    <option>مشاوره خرید سرویس عروس و جواهر</option>
                    <option>پیگیری وضعیت ارسال سفارش</option>
                    <option>خرید شمش و سکه سرمایه‌گذاری</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink dark:text-paper">
                    توضیحات تکمیلی یا وزن مد نظر
                  </label>
                  <textarea
                    rows={4}
                    placeholder="هرگونه جزییات درباره مدل، بودجه یا سوالات خود را بنویسید..."
                    className="mt-1.5 w-full rounded-xl border border-night-200 bg-white px-4 py-2.5 text-sm text-ink placeholder-ink/40 outline-none transition-colors focus:border-gold-500 dark:border-night-700 dark:bg-black dark:text-paper dark:placeholder-paper/40"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 py-3 text-sm font-bold text-black shadow-md shadow-gold-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  ثبت درخواست و دریافت مشاوره فوری
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Sidebar Info & Socials */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-gold-500/35 bg-gold-500/5 p-6 dark:bg-night-900/60">
                <h3 className="text-base font-bold text-ink dark:text-paper">
                  شبکه‌های اجتماعی و پیام‌رسان‌ها
                </h3>
                <p className="mt-1 text-xs text-ink/75 dark:text-paper/75">
                  جدیدترین کارهای روز و فیلم‌های ویدیویی نمای نزدیک زیورآلات را در صفحات ما دنبال کنید:
                </p>

                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-gold-500/30 bg-white/50 p-3 text-xs font-bold text-ink transition-colors hover:border-gold-500 hover:text-gold-600 dark:bg-black/30 dark:text-paper"
                  >
                    <FaInstagram className="size-5 text-gold-500" />
                    <span>صفحه اینستاگرام ویترین طلا (نمایش روزانه مدل‌ها)</span>
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-gold-500/30 bg-white/50 p-3 text-xs font-bold text-ink transition-colors hover:border-gold-500 hover:text-gold-600 dark:bg-black/30 dark:text-paper"
                  >
                    <FaTelegramPlane className="size-5 text-gold-500" />
                    <span>کانال تلگرام (اطلاع‌رسانی لحظه‌ای نرخ طلا و سکه)</span>
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-gold-500/30 bg-white/50 p-3 text-xs font-bold text-ink transition-colors hover:border-gold-500 hover:text-gold-600 dark:bg-black/30 dark:text-paper"
                  >
                    <FaWhatsapp className="size-5 text-gold-500" />
                    <span>پشتیبانی مستقیم در واتساپ (ارسال کاتالوگ)</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gold-500/35 bg-white/70 p-6 shadow-sm dark:bg-night-900/70">
                <h3 className="text-base font-bold text-ink dark:text-paper">
                  امنیت در ارسال پستی بیمه‌شده
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/75 dark:text-paper/75">
                  کلیه مرسولات طلا با بسته‌بندی امن، فاقد هرگونه نشانه خارجی و همراه با بیمه‌نامه معتبر شرکت پست ارسال می‌گردند و تحویل آن فقط با ارائه کارت شناسایی معتبر خریدار انجام خواهد شد.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SubPageLayout>
  );
}
