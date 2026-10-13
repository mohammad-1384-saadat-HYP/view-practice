export const HeaderRoutes = [
  { title: "صفحه اصلی", path: "/" },
  {
    title: "شکار بزرگ",
    path: "/big-game",
    subRoutes: [
      { title: "خرس", path: "/big-game/bear" },
      { title: "شیر کوهی (پوما)", path: "/big-game/cougar" },
      { title: "گوزن الک", path: "/big-game/elk" },
      {
        title: "گوزن",
        path: "/big-game/deer",
        subRoutes: [
          {
            title: "گوزن دم‌سیاه",
            path: "/big-game/deer/black-tailed-deer",
          },
          { title: "گوزن زرد", path: "/big-game/deer/fallow-deer" },
        ],
      },
      { title: "گرگ", path: "/big-game/wolf" },
    ],
  },
  {
    title: "شکار کوچک",
    path: "/small-game",
    subRoutes: [
      { title: "کبک و سیاه‌خروس", path: "/small-game/grouse" },
      { title: "قرقاول", path: "/small-game/pheasant" },
      { title: "خرگوش برفی", path: "/small-game/snowshoe-hare" },
      { title: "راکون", path: "/small-game/raccoon" },
      { title: "کبوتر دم‌نواری", path: "/small-game/band-tailed-pigeon" },
    ],
  },
  { title: "مجوزها", path: "/licence" },
  { title: "دوره‌های آموزشی شکار", path: "/hunter-education-courses" },
  { title: "تماس با ما", path: "/contact-us" },
  { title: "تورها", path: "/tours" },
];
