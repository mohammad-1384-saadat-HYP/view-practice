export const HeaderRoutes = [
  { title: "صفحه اصلی", path: "/" },
  {
    title: "سرویس و نیم‌ست",
    path: "/sets",
    subRoutes: [
      { title: "سرویس عروس لوکس", path: "/sets/bridal" },
      { title: "نیم‌ست تراش ۱۸ عیار", path: "/sets/carved" },
      { title: "سرویس جواهر و برلیان", path: "/sets/diamond" },
      {
        title: "دستبند و النگو",
        path: "/sets/bracelets",
        subRoutes: [
          {
            title: "النگو البرنادو",
            path: "/sets/bracelets/albernado",
          },
          { title: "دستبند کارتیه", path: "/sets/bracelets/cartier" },
        ],
      },
      { title: "سرویس طلا زرد و سفید", path: "/sets/yellow-white" },
    ],
  },
  {
    title: "زیورآلات و تک‌پوش",
    path: "/jewelry",
    subRoutes: [
      { title: "انگشتر و تک‌نگین", path: "/jewelry/rings" },
      { title: "گردنبند و مدال", path: "/jewelry/necklaces" },
      { title: "گوشواره طلا", path: "/jewelry/earrings" },
      { title: "پابند و آویز ساعت", path: "/jewelry/anklets" },
      { title: "زنجیر و دستبند مردانه", path: "/jewelry/mens-chains" },
    ],
  },
  { title: "شمش و سکه", path: "/bullion-coins" },
  { title: "کالکشن‌های اختصاصی", path: "/exclusive-collections" },
  { title: "مشاوره و خرید", path: "/contact-us" },
  { title: "ویترین آنلاین", path: "/online-showcase" },
];
