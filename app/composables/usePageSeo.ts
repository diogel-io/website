export const SITE_URL = 'https://diogel.io'
export const SITE_NAME = 'Diogel'

// Share images (#73): 1200×630 PNGs, drawn in the workspace under 60-marketing/brand/images/share/.
const SHARE_IMAGES = {
  diogel: '/img/og/diogel.png',
  porwr: '/img/og/porwr.png',
  symudol: '/img/og/symudol.png',
  bancwr: '/img/og/bancwr.png'
} as const

export type ShareImage = keyof typeof SHARE_IMAGES

/** The share image for a path: a product's own pages and docs use its card, everything else Diogel's. */
export const shareImageFor = (path: string): ShareImage => {
  const product = path.split('/').filter(Boolean).find(segment => segment in SHARE_IMAGES)
  return (product as ShareImage | undefined) || 'diogel'
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path === '/' ? '' : path.replace(/\/$/, '')}`

/**
 * Sets the title, description, canonical URL, Open Graph and Twitter meta for a page.
 * `twitter:card` comes from the site-wide default in app.vue.
 */
export const usePageSeo = (options: {
  title: string
  description: string
  path: string
  image?: ShareImage
  type?: 'website' | 'article'
}) => {
  const url = absoluteUrl(options.path)
  const image = `${SITE_URL}${SHARE_IMAGES[options.image || shareImageFor(options.path)]}`

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogType: options.type || 'website',
    ogSiteName: SITE_NAME,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: options.title,
    ogLocale: 'en_GB',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: options.title
  })

  useHead({ link: [{ rel: 'canonical', href: url }] })
}

/** Adds a JSON-LD block to the page head. */
export const useJsonLd = (data: Record<string, unknown>) => {
  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', ...data }) }]
  })
}

export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  'name': SITE_NAME,
  'url': SITE_URL,
  'logo': `${SITE_URL}/img/logo/diogel-mark-512.png`,
  'sameAs': ['https://github.com/diogel-io']
}

/** The site itself (#165), for the home page. No SearchAction: the docs search runs in the browser only. */
export const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  'name': SITE_NAME,
  'url': SITE_URL,
  'inLanguage': 'en-GB',
  'publisher': { '@id': ORGANIZATION['@id'] }
}

/** BreadcrumbList JSON-LD (#165), each item linking to the page's canonical URL. */
export const useBreadcrumbJsonLd = (items: { name: string, path: string }[]) => useJsonLd({
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': absoluteUrl(item.path)
  }))
})

/** SoftwareApplication JSON-LD for a product page. No offers or ratings: none are published yet. */
export const useSoftwareApplicationJsonLd = (options: {
  name: string
  description: string
  path: string
  operatingSystem: string
}) => useJsonLd({
  '@type': 'SoftwareApplication',
  'name': options.name,
  'description': options.description,
  'url': absoluteUrl(options.path),
  'image': `${SITE_URL}${SHARE_IMAGES[shareImageFor(options.path)]}`,
  'applicationCategory': 'SecurityApplication',
  'operatingSystem': options.operatingSystem,
  'publisher': ORGANIZATION
})
