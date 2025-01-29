import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "High-Frequency Trading Technologies - SP25",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/syllabus' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Syllabus', link: '/syllabus' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ndhft' },
      { icon: 'canvas', link: 'https://canvas.nd.edu/courses/109765' },
    ]
  }
})
