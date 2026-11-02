import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";

export const metadata = {
  title: "گردنبند و مدال طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "انواع گردنبندهای ظریف، مدال‌های ون‌کلیف، پلاک‌های اسم سفارشی و زنجیرهای فلامینگو و ونیزی طلا ۱۸ عیار.",
};

export default function NecklacesPage() {
  const products = [
    {
      title: "گردنبند ون‌کلیف شبدری صدف طبیعی",
      category: "گردنبند طلا",
      weight: "۴.۸۰۰ گرم",
      wage: "پرفروش‌ترین مدل",
      image: "/light-theme-first.jpg",
    },
    {
      title: "پلاک مدال پروانه نگین‌دار با زنجیر",
      category: "گردنبند طلا",
      weight: "۳.۶۵۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "چوکر مدرن کارتیر با قفل تی‌بار",
      category: "چوکر طلا",
      weight: "۹.۴۰۰ گرم",
      wage: "اجرت مناسب",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "گردنبند رولباسی چندرشته پولکی",
      category: "گردنبند طلا",
      weight: "۱۱.۲۰۰ گرم",
      wage: "شرکتی درجه یک",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="مجموعه ظریف"
      titleHighlight="گردنبند و مدال طلا"
      subtitle="ظرافتی چشم‌نواز در هماهنگی با خط گردن شما؛ از مدال‌های مینیمال روزمره تا گردنبندهای مجلسی رولباسی و طراحی اختصاصی پلاک‌های سفارشی."
      badge="گردنبند و مدال"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "زیورآلات و تک‌پوش", href: "/jewelry" },
        { title: "گردنبند و مدال", href: "/jewelry/necklaces" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              طراحی و ساخت پلاک اسم سفارشی:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              امکان ساخت اختصاصی نام شما یا عزیزانتان با فونت‌های نستعلیق، ثلث یا لاتین بر روی طلای خالص ۱۸ عیار در سریع‌ترین زمان ممکن فراهم است.
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
