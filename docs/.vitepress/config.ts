import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/native-modal',
  title: "NativeModal",
  description: "Tiny wrapper over <dialog />",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demos', link: '/demos' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quick start', link: '/quick-start' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Props', link: '/api/props' },
          { text: 'Themes', link: '/api/themes' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/azabroflovski/native-modal' }
    ]
  },
  vite: {
    build: {
      rollupOptions: {
        external: ["vue/server-renderer", "vue"]
      }
    }
  }
})
