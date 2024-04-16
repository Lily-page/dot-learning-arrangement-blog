import { defineConfig } from 'vitepress'
import {nav, sidebar} from './realConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/dot-learning-arrangement-blog/',
  title: "dot-learning-arrangement-blog",
  description: "基于vitepress搭建的学习整理文档网站",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png', 
    nav: nav, // 配置导航栏
    sidebar: sidebar, // 配置侧边栏
    outline: { // 配置文章右边导航
      level: [2, 6],
      label: '目录'
    },
    search: { // 配置搜索
      provider: 'local' 
    },
    i18nRouting: true, // 配置多语言路由

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
