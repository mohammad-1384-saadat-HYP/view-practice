import SubPageLayout from "@/components/SubPageLayout";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { GiCutDiamond } from "react-icons/gi";

export const metadata = {
  title: "پابند و آویز ساعت طلا ۱۸ عیار | ویترین طلا و جواهر",
  description: "اکسسوری‌های شیک زنانه شامل انواع خلخال و پابند طلا، آویزهای ساعت و آویزهای زنجیری ظریف با فاکتور رسمی.",
};

export default function AnkletsPage() {
  const products = [
    {
      title: "پابند طلا با پلاک‌های ستاره و قلب",
      category: "پابند طلا",
      weight: "۲.۱۰۰ گرم",
      wage: "سبک و ارزان",
      image: "/light-theme-first.jpg",
    },
    {
      title: "خلخال طلا کارتیر زنجیری ظریف",
      category: "پابند طلا",
      weight: "۳.۴۰۰ گرم",
      wage: "کمترین اجرت",
      image: "/dark-theme-first.jpg",
    },
    {
      title: "آویز ساعت طلا طرح سکه پهلوی مینیاتوری",
      category: "آویز ساعت",
      weight: "۱.۳۰۰ گرم",
      wage: "هدیه فانتزی",
      image: "/dark-theme-middle.jpg",
    },
    {
      title: "آویز ساعت طلا طرح گل و انار شب یلدا",
      category: "آویز ساعت",
      weight: "۱.۶۵۰ گرم",
      wage: "طرح مناسبتی",
      image: "/light-theme-middle.jpg",
    },
  ];

  return (
    <SubPageLayout
      title="اکسسوری‌های فانتزی"
      titleHighlight="پابند و آویز ساعت"
      subtitle="ظرافتی مدرن در جزئیات استایل شما؛ زیورآلاتی سبک و اقتصادی با وزن‌های مناسب کادو، همراه با زنجیرهای باکیفیت و قفل‌های مطمئن."
      badge="پابند و آویز ساعت"
      badgeIcon={GiCutDiamond}
      breadcrumbs={[
        { title: "زیورآلات و تک‌پوش", href: "/jewelry" },
        { title: "پابند و آویز ساعت", href: "/jewelry/anklets" },
      ]}
      bgClass="bg-theme-first"
    >
      <section className="text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 dark:bg-night-900/60">
            <h2 className="text-sm font-bold text-ink dark:text-paper sm:text-base">
              هدیه‌ای اقتصادی و ارزشمند:
            </h2>
            <p className="mt-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm">
              پابندها و آویزهای ساعت به دلیل وزن سبک (۱ الی ۳ گرم)، بهترین انتخاب برای هدیه دادن در مناسبت‌های تولد، سالگرد و یادبودهای ماندگار هستند.
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
