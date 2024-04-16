import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  '/frontend/':[
    {
      text: 'JavaScript',
      items: [
        { text: 'this', link: '/frontend/JavaScript/this' },
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'interface', link: '/frontend/TypeScript/interface' },
      ]
    }
  ]
}
