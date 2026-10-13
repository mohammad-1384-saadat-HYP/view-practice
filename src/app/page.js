import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Section2DataP1,
  Section2DataP2,
  Section4DataP1,
  Section4DataP2,
  Section5DataP1,
  Section5DataP2,
  Section7Data1,
  Section7Data2,
} from "./data/HomePageData";
import { BiSolidQuoteAltRight, BiTargetLock } from "react-icons/bi";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import StickyImageTextSection from "./components/StickyImageTextSection";
import ReviewsSlider from "./components/ReviewsSlider";

/* ──────────────────────────────────────────────
 * Reusable inline component: BadgePill
 * Unifies all BiTargetLock / icon + label pill badges
 * used across Sections 2–7 for consistent styling.
 * ────────────────────────────────────────────── */
function BadgePill({ icon: Icon, label, variant = "gold" }) {
  const variants = {
    gold: "border-gold-500 text-ink dark:text-paper",
    muted: "border-gray-700/60 text-white",
  };
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-1.5 ${variants[variant] || variants.gold}`}
    >
      <Icon className="size-4 shrink-0 text-gold-500 lg:size-5" />
      <span className="text-[11px] font-bold uppercase lg:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col">
      {/* Section 1 */}
      <section className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-theme-first">
        <Header />
        <div className="py-15 px-7 lg:p-20">
          <h1 className="text-2xl lg:text-3xl font-bold italic">
            ویترین لوکس
            <br /> طلا و جواهرات اصیل
            <br /> درخششی <span className="text-gold-400">ماندگار</span> و
            بی‌همتا
          </h1>
          <p className="text-[15px] lg:text-base italic mt-4 lg:mt-6.5">
            مجموعه‌ای از نفیس‌ترین زیورآلات و مصنوعات طلای ۱۸ عیار با فاکتور
            رسمی معتبر.
            <br /> زیبایی اصیل هنر زرگری در کنار تجربه خریدی مطمئن، شفاف و
            لذت‌بخش.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative z-10 flex flex-col items-center min-h-screen bg-paper py-15 px-3.5 lg:px-8.5 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <div className="flex flex-col items-center gap-7.5 lg:gap-24 w-full">
          <div className="flex flex-col items-center gap-10 w-full">
            <ScrollReveal className="flex flex-col items-center text-center">
              <BadgePill
                icon={BiTargetLock}
                label="اصالت و استاندارد ۱۸ عیار (۷۵۰)"
              />
              {/* Enhanced h2 styling — accent gradient underline + improved typography */}
              <h2 className="relative mt-4 text-xl font-bold italic text-center leading-snug lg:text-3xl">
                <span className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-400">
                  چرا خریداران شیفته
                </span>
                <br className="sm:hidden" />
                <span className="text-ink dark:text-paper">
                  {" "}
                  انتخاب ویترین طلای ما هستند؟
                </span>
                <span className="mx-auto mt-3 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              </h2>
            </ScrollReveal>

            {/* Layered-shadow cards (isolated, easy to revert) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
              {Section2DataP1.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={index * 0.1}
                  y={24}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col items-center gap-4 rounded-2xl border border-gold-500/40 bg-white/80 p-6 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_10px_20px_-3px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/80 hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.1),0_20px_35px_-4px_rgba(212,175,55,0.22)] dark:bg-night-900/80 dark:border-gold-500/30 dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_10px_20px_-3px_rgba(212,175,55,0.08)] dark:hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.7),0_20px_35px_-4px_rgba(212,175,55,0.18)]">
                    <span className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                    <h3 className="text-lg lg:text-xl font-bold italic text-ink dark:text-paper">
                      {item.title}
                    </h3>
                    <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                    <h4 className="text-sm lg:text-base font-semibold text-gold-600 dark:text-gold-400">
                      {item.subTitile}
                    </h4>
                    <p className="text-xs lg:text-sm leading-relaxed text-ink/75 dark:text-paper/75">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-7.5 w-full">
            <ScrollReveal className="flex flex-col items-center text-center">
              {/* Enhanced h2 styling */}
              <h2 className="relative text-2xl font-bold italic text-center leading-snug lg:text-3xl">
                <span className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-400">
                  درخشان‌ترین کالکشن‌ها
                </span>{" "}
                طلا و جواهرات متناسب با سلیقه شما
                <span className="mx-auto mt-3 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              </h2>
              <p className="mt-4 text-sm lg:text-base text-center max-w-2xl leading-relaxed text-ink/80 dark:text-paper/80">
                ویترین طلای ما ارائه‌دهنده نفیس‌ترین مصنوعات طلا، جواهر و سکه
                برای مناسبت‌ها، سرمایه‌گذاری و استفاده روزمره است. تمامی محصولات
                همراه با فاکتور رسمی، مشخصات کامل وزن و عیار استاندارد ۱۸ عیار
                تقدیم می‌گردند. زیباترین مدل‌ها را در ویترین آنلاین مشاهده کنید
                و خریدی لذت‌بخش و امن را تجربه نمایید.
              </p>
            </ScrollReveal>
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-5">
              {Section2DataP2.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={index * 0.1}
                  y={24}
                  className="w-full"
                >
                  <div className="group relative w-full min-h-40 flex flex-col items-center justify-center gap-3.5 overflow-hidden rounded-xl border-2 border-gold-500/85">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover absolute rounded-xl opacity-60 transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay for text readability in both themes */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-black/35 dark:bg-black/55" />
                    <h3 className="text-lg lg:text-xl font-bold italic z-10 text-white drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.2}>
              <Link
                href="/sets"
                className="w-full lg:w-fit h-15 flex items-center justify-center gap-2 border-2 border-gold-500/85 px-6 py-2 rounded-2xl transition-colors hover:bg-gold-500/10"
              >
                <span className="capitalize text-lg lg:text-xl font-bold">
                  مشاهده تمام کالکشن‌ها
                </span>
                <FaAngleRight className="size-6 lg:size-7.5 text-gold-500 -scale-x-100" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat bg-theme-middle py-15 px-3.5 lg:px-0 text-center">
        {/* Dark overlay for section-level readability */}
        <div className="pointer-events-none absolute inset-0 bg-black/45" />
        <ScrollReveal className="relative z-10 mx-auto w-full max-w-3xl flex flex-col items-center gap-5 lg:gap-10 rounded-2xl border border-gold-500/60 bg-black/80 px-6 py-10 shadow-2xl backdrop-blur-sm lg:py-12">
          <BadgePill
            icon={GiCutDiamond}
            label="کالکشن‌های اختصاصی ویترین"
            variant="muted"
          />
          {/* Enhanced h2 */}
          <div className="flex flex-col gap-1 lg:gap-3 text-xl font-bold italic leading-snug text-white sm:text-2xl lg:text-3xl">
            <h2>درخششی فراتر از یک انتخاب</h2>
            <h2 className="text-gold-400">سرمایه‌ای برای همیشه</h2>
          </div>
          <span className="mx-auto block h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="max-w-xl text-sm leading-7 lg:leading-8 text-gray-200 lg:text-base">
            در ویترین طلای ما، هر قطعه طلا داستانی از ظرافت، هنر دست استادکاران
            و اصالت عیار ۱۸ است. ما با تلفیق هنر سنتی طلاکاری و مدرن‌ترین متدهای
            روز دنیا، زیورآلاتی ماندگار را با شفاف‌ترین قیمت‌گذاری، کمترین اجرت
            ساخت و فاکتور چاپی معتبر به شما ارائه می‌دهیم تا تجربه‌ای امن و
            لذت‌بخش از خرید آنلاین طلا داشته باشید.
          </p>
        </ScrollReveal>
      </section>

      {/* Section 4 */}
      <section className="relative z-10 flex flex-col items-center bg-paper px-3.5 lg:px-5 py-15 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <div className="w-full flex flex-col items-center gap-15">
          {/* Part 1 — Section4DataP1: Polish & Elevate */}
          <div className="w-full flex flex-col items-center gap-7.5 text-center">
            <ScrollReveal className="flex flex-col items-center text-center">
              <BadgePill icon={BiTargetLock} label="دسته‌بندی‌های ویترین" />
              {/* Enhanced h2 */}
              <h2 className="relative mt-4 text-xl font-bold italic text-center leading-snug lg:text-3xl">
                <span className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-400">
                  دسته‌بندی محصولات
                </span>{" "}
                طلا، جواهر و زیورآلات فاخر
                <span className="mx-auto mt-3 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              </h2>
            </ScrollReveal>
            <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Section4DataP1.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={index * 0.12}
                  y={24}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    className="group relative w-full min-h-48 flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-gold-500/50 p-7 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400 hover:shadow-2xl hover:shadow-gold-500/10 lg:p-9"
                  >
                    <Image
                      alt={item.title}
                      src={item.image}
                      fill
                      className="object-cover absolute rounded-2xl transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    {/* Dark gradient overlay for flawless contrast in both light & dark themes */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                    <div className="relative z-10 py-1 px-4 uppercase text-[11px] font-semibold border border-gold-400/70 rounded-full bg-black/40 backdrop-blur-sm text-gold-300">
                      {item.head}
                    </div>
                    <div className="relative z-10 flex flex-col gap-2 text-start my-4">
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="relative z-10 w-full flex items-center justify-between mt-2 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gold-400 transition-colors group-hover:text-gold-300 lg:text-base">
                          مشاهده کالکشن {item.title}
                        </span>
                        <FaArrowRight className="size-3 text-gold-400 transition-transform group-hover:-translate-x-1 -scale-x-100" />
                      </div>
                      <div className="flex size-9 items-center justify-center border border-gold-500/60 rounded-full bg-black/40 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500">
                        <FaArrowRight className="size-3.5 -scale-x-100" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Part 2 — Swiper slider with Section4DataP2 (inside thumbnail navigation) */}
          {Section4DataP2 && Section4DataP2.length > 0 && (
            <ScrollReveal className="w-full max-w-6xl">
              <HeroSlider items={Section4DataP2} />
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Section 5 — Sticky Image-Text Section (reverse=false) */}
      <StickyImageTextSection
        items={Section5DataP1}
        badge={
          <BadgePill
            icon={GiCutDiamond}
            label="گالری و ویترین زرگری"
            variant="muted"
          />
        }
        heading="خدمات متمایز ویترین طلا:"
        description="ویترین آنلاین طلا با افتخار ارائه‌دهنده کامل‌ترین خدمات خرید، سفارش ساخت و مشاوره طلا و جواهر است. تمامی مصنوعات دارای ضمانت اصالت عیار ۷۵۰، فاکتور رسمی چاپی و بسته‌بندی نفیس کادویی می‌باشند. همچنین با سیستم محاسبه آنلاین و شفاف، سفارشات شما با پست ویژه بیمه‌شده در سریع‌ترین زمان ممکن تحویل می‌گردند."
        reverse={false}
        bgClass="bg-theme-middle"
      />

      {/* Section 6 — Sticky Image-Text Section (reverse=true) */}
      <StickyImageTextSection
        items={Section5DataP2}
        badge={
          <BadgePill
            icon={BiTargetLock}
            label="خرید امن و مطمئن"
            variant="muted"
          />
        }
        heading="مزایای خرید از ویترین آنلاین:"
        description="خرید آنلاین طلا با ما تجربه‌ای ساده، شفاف و سرشار از اطمینان است. از مشاهده مدل‌ها و استعلام لحظه‌ای وزن و اجرت گرفته تا پرداخت امن و دریافت فاکتور رسمی معتبر اتحادیه، تمامی مراحل برای آسودگی خیال شما طراحی شده است. تیم پشتیبانی و کارشناسان طلا در تمامی لحظات همراه شما هستند تا مشاوره‌ای دقیق برای خریدی ایده‌آل دریافت کنید."
        reverse={true}
        bgClass="bg-theme-middle"
      />

      {/* Section 7 */}
      <section className="relative z-10 flex flex-col items-center min-h-screen bg-paper px-3.5 py-15 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        {/* Part 1 — Slider with Section7Data1 (reusing HeroSlider) */}
        {Section7Data1 && Section7Data1.length > 0 && (
          <ScrollReveal className="w-full max-w-6xl px-0 lg:px-5">
            <HeroSlider items={Section7Data1} />
          </ScrollReveal>
        )}

        {/* Part 2 — Reviews with Section7Data2 */}
        <ScrollReveal className="mt-15 w-full flex flex-col items-center px-3.5 lg:px-5">
          <BadgePill
            icon={BiSolidQuoteAltRight}
            label="دیدگاه مشتریان ویترین"
            variant="gold"
          />
          <h2 className="mt-5 text-center text-xl font-bold italic leading-snug sm:text-2xl lg:whitespace-nowrap lg:text-3xl">
            <span className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-400">
              رضایت و اعتماد همراهان
            </span>{" "}
            به کیفیت و اصالت ویترین طلای ما
            <span className="mx-auto mt-3 block h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          </h2>

          <div className="mt-6 w-full flex justify-center">
            <ReviewsSlider items={Section7Data2} />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
