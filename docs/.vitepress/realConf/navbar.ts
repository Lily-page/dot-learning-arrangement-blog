import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "前端",
    items: [
      {
        text: "JavaScript",
        link: "/frontend/JavaScript/",
      },
      {
        text: "TypeScript",
        link: "/frontend/TypeScript/",
      },
    ],
  },
]
