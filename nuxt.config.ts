// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@threenine/nuxt-fathom',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: true
  },

  // Icons and the manifest go here, not in app.vue, so error.vue's 404 page links them too (#167).
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://diogel.io',
    name: 'Diogel'
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  routeRules: {
    '/docs': { redirect: { to: '/docs/getting-started', statusCode: 301 }, prerender: false },
    '/android': { redirect: { to: '/symudol', statusCode: 301 }, prerender: false }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      // Write /porwr as porwr.html, not porwr/index.html, so Netlify serves /porwr directly
      // instead of redirecting to /porwr/ (#73). Canonical URLs have no trailing slash.
      autoSubfolderIndex: false,
      routes: [
        '/',
        '/sitemap.xml'
      ],
      crawlLinks: true
    }
  },
  vite: {
    optimizeDeps: {
      include: []
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fathom: {
    siteId: process.env.fathom_analytics_id
  },

  // Built at prerender time from the crawled routes (#73). The redirects are not pages.
  sitemap: {
    zeroRuntime: true,
    exclude: ['/docs', '/android']
  }
})
