import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { RiCoinsLine } from "react-icons/ri";
import { FaShieldAlt, FaBarcode, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "شمش و سکه سرمایه‌گذاری طلا | ویترین طلا و جواهر",
  description: "خرید آنلاین انواع شمش طلای ۲۴ عیار سوئیسی و ایرانی، سکه‌های بهار آزادی و پارسیان کادویی با هولوگرام امنیتی و تضمین نقدشوندگی.",
};

export default function BullionCoinsPage() {
  const products = [
    {
      title: "شمش طلای ۱ گرمی ۲۴ عیار (۹۹۵) ونوس",
      category: "شمش سرمایه‌گذاری",
      weight: "۱.۰۰۰ گرم",
      wage: "پلمپ امنیتی بانکی",
      karat: "۲۴ عیار (۹۹۵)",
      image: "/light-theme-first.jpg",
    },
    {
      title: "شمش طلای ۵ گرمی استاندارد اماراتی",
      category: "شمش سرمایه‌گذاری",
      weight: "۵.۰۰۰ گرم",
      wage: "دارای QR Code اصالت",
      karat: "۲۴ عیار (۹۹۹.۹)",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "سکه تمام بهار آزادی طرح امام (امامی)",
      category: "سکه بانکی",
      weight: "۸.۱۳۳ گرم",
      wage: "ضمانت ضرب بانک مرکزی",
      karat: "۲۱.۶ عیار (۹۰۰)",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "پک ۳ عددی سکه پارسیان کادویی ۵۰۰ سوت",
      category: "سکه کادویی",
      weight: "۱.۵۰۰ گرم (مجموع)",
      wage: "کارت و هولوگرام ضد جعل",
      karat: "۱۸ عیار (۷۵۰)",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="سرمایه‌گذاری امن با"
      titleHighlight="شمش و سکه طلا"
      subtitle="حفظ ارزش دارایی و نقدشوندگی آنی با شمش‌های استاندارد ۲۴ عیار و سکه‌های معتبر؛ همراه با بارکد اصالت، هولوگرام غیرقابل جعل و فاکتور رسمی اتحادیه."
      badge="سرمایه‌گذاری پایدار"
      badgeIcon={RiCoinsLine}
      breadcrumbs={[{ title: "شمش و سکه", href: "/bullion-coins" }]}
      bgClass="bg-theme-first"
    >
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal>
          <div className="flex h-full flex-col items-center rounded-2xl border border-gold-500/35 bg-white/70 p-6 text-center shadow-sm dark:bg-night-900/70">
            <FaBarcode className="size-8 text-gold-500" />
            <h3 className="mt-3 text-base font-bold text-ink dark:text-paper">
              بارکد و سریال یکتا
            </h3>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75">
              امکان استعلام آنلاین شماره سریال و آزمایشگاه عیارسنجی شمش به صورت لحظه‌ای.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex h-full flex-col items-center rounded-2xl border border-gold-500/35 bg-white/70 p-6 text-center shadow-sm dark:bg-night-900/70">
            <FaShieldAlt className="size-8 text-gold-500" />
            <h3 className="mt-3 text-base font-bold text-ink dark:text-paper">
              پلمپ امنیتی هولوگرام‌دار
            </h3>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75">
              بسته‌بندی وکیوم غیرقابل نفوذ به همراه هولوگرام سه بعدی ضد دستکاری.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex h-full flex-col items-center rounded-2xl border border-gold-500/35 bg-white/70 p-6 text-center shadow-sm dark:bg-night-900/70">
            <FaCheckCircle className="size-8 text-gold-500" />
            <h3 className="mt-3 text-base font-bold text-ink dark:text-paper">
              نقدشوندگی فوری
            </h3>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75">
              امکان بازخرید سریع در تمام طلافروشی‌ها و صرافی‌های مجاز سراسر کشور با نرخ روز.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-ink dark:text-paper sm:text-2xl">
            محصولات منتخب شمش و سکه طلا
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
