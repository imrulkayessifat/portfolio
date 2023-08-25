import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "Experience",
    newTab: false,
    path: "/#experience"
  },
  {
    id: 2.3,
    title: "Resume",
    newTab: false,
    path: "/#about"
  },
  {
    id: 3,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Portfolio",
        newTab: false,
        path: "/portfolio",
      },
      {
        id: 35,
        title: "Payscale",
        newTab: false,
        path: "/payscale",
      },
    ],
  },
  {
    id: 4,
    title: "About",
    newTab: false,
    path: "/#about"
  },
];

export default menuData;
