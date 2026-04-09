import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TIDE',
  description: 'Transitional Interactive Dynamic Elements — Unity tweening system',
  base: '/tide-documentation/',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/tide-documentation/favicon.png' }]
  ],

  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: 'Guide',     link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/easing' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started',         link: '/guide/getting-started' },
          { text: 'Animating Transforms',    link: '/guide/transforms' },
          { text: 'Animating UI',            link: '/guide/ui' },
          { text: 'Chaining & Control',      link: '/guide/chaining' },
          { text: 'Post-Processing & Audio', link: '/guide/post-processing' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Easing Types', link: '/reference/easing' },
          { text: 'API',          link: '/reference/api' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/filipefthomaz-gd/DoctorWarClinic' },
    ],

    footer: {
      message: 'TIDE — Transitional Interactive Dynamic Elements.',
    },

    search: {
      provider: 'local',
    },
  },
})
