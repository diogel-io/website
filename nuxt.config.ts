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

  // Bundle every icon into the client so pages never fetch from api.iconify.design, which would
  // send visitors' IP addresses to a third party (see the privacy policy). The scan finds the
  // icons the site names; the list adds the defaults Nuxt UI's own components use.
  icon: {
    fallbackToApi: false,
    clientBundle: {
      scan: {
        // Docs sidebar icons live in content/**/.navigation.yml, so dotfiles must not be excluded.
        globInclude: ['app/**/*.{vue,ts}', 'content/**/*.{yml,md}', 'content/**/.navigation.yml'],
        globExclude: ['node_modules', '.nuxt', '.output', 'dist']
      },
      icons: [
        'lucide:arrow-down', 'lucide:arrow-left', 'lucide:arrow-right', 'lucide:arrow-up',
        'lucide:arrow-up-right', 'lucide:check', 'lucide:chevron-down', 'lucide:chevron-left',
        'lucide:chevron-right', 'lucide:chevron-up', 'lucide:chevrons-left', 'lucide:chevrons-right',
        'lucide:circle-alert', 'lucide:circle-check', 'lucide:circle-x', 'lucide:copy',
        'lucide:copy-check', 'lucide:ellipsis', 'lucide:eye', 'lucide:eye-off', 'lucide:file',
        'lucide:folder', 'lucide:folder-open', 'lucide:grip-vertical', 'lucide:hash', 'lucide:info',
        'lucide:lightbulb', 'lucide:loader-circle', 'lucide:menu', 'lucide:minus', 'lucide:monitor',
        'lucide:moon', 'lucide:panel-left-close', 'lucide:panel-left-open', 'lucide:plus',
        'lucide:rotate-ccw', 'lucide:search', 'lucide:square', 'lucide:sun', 'lucide:terminal',
        'lucide:triangle-alert', 'lucide:upload', 'lucide:x'
      ]
    }
  },

  // Built at prerender time from the crawled routes (#73). The redirects are not pages.
  sitemap: {
    zeroRuntime: true,
    exclude: ['/docs', '/android']
  }
})
