export const HeaderRoutes = [
  { title: "Home", path: "/" },
  {
    title: "Big Game",
    path: "/big-game",
    subRoutes: [
      { title: "Bear", path: "/big-game/bear" },
      { title: "Cougar", path: "/big-game/cougar" },
      { title: "Elk", path: "/big-game/elk" },
      {
        title: "Deer",
        path: "/big-game/deer",
        subRoutes: [
          {
            title: "Black-tailed Deer",
            path: "/big-game/deer/black-tailed-deer",
          },
          { title: "Fallow Deer", path: "/big-game/deer/fallow-deer" },
        ],
      },
      { title: "Wolf", path: "/big-game/wolf" },
    ],
  },
  {
    title: "Small Game",
    path: "/small-game",
    subRoutes: [
      { title: "Grouse", path: "/small-game/grouse" },
      { title: "Pheasant", path: "/small-game/pheasant" },
      { title: "Snowshoe Hare", path: "/small-game/snowshoe-hare" },
      { title: "Raccoon", path: "/small-game/raccoon" },
      { title: "Band-tailed Pigeon", path: "/small-game/band-tailed-pigeon" },
    ],
  },
  { title: "Licence", path: "/licence" },
  { title: "Hunter Education Courses", path: "/hunter-education-courses" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Tours", path: "/tours" },
];
