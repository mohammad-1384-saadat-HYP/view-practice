import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollUpButton from "@/features/scroll-to-top/ScrollUpButton";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata = {
  title: "ویترین آنلاین طلا و جواهر | گالری طلا ۱۸ عیار",
  description: "ویترین لوکس طلا و جواهرات ۱۸ عیار، جدیدترین کالکشن‌های سرویس طلا، انگشتر، النگو و دستبند با کمترین اجرت و فاکتور رسمی معتبر.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`${vazirmatn.variable} font-sans h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-paper text-ink transition-colors duration-200 dark:bg-night-950 dark:text-paper font-sans">
        <ThemeProvider>
          {children}
          <ScrollUpButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
