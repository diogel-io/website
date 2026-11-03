import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const createBaseSchema = () => z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty()
})

const createFeatureItemSchema = () => createBaseSchema().extend({
  icon: z.string().nonempty().editor({ input: 'icon' })
})

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional().editor({ input: 'icon' }),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

const createSectionSchema = () => createBaseSchema().extend({
  id: z.string().nonempty(),
  orientation: orientationEnum.optional(),
  reverse: z.boolean().optional(),
  // A screenshot beside the section (#166), with its pixel size so the page can reserve the space.
  image: z.object({
    src: z.string().nonempty(),
    width: z.number().int().positive(),
    height: z.number().int().positive()
  }).optional(),
  // A silent, looping explainer shown beside the section (#17). Takes the image's place.
  video: z.object({
    mp4: z.string().nonempty(),
    webm: z.string().nonempty(),
    poster: z.string().nonempty(),
    // What the video shows, for screen readers.
    label: z.string().nonempty()
  }).optional(),
  features: z.array(createFeatureItemSchema())
})

const createPageSchema = () => z.object({
  hero: z.object({
    // A short label above the hero title, such as the product name when the title is a benefit (workspace#101).
    headline: z.string().optional(),
    links: z.array(createLinkSchema()),
    // A product illustration beside the hero text (#71), served as WebP in two widths.
    image: z.object({
      src: z.string().nonempty(),
      srcset: z.string().nonempty(),
      // What the picture shows, for screen readers.
      alt: z.string().nonempty(),
      width: z.number().int().positive(),
      height: z.number().int().positive()
    }).optional(),
    // A silent, looping background behind the hero copy (workspace#91). Decorative, so no label.
    video: z.object({
      mp4: z.string().nonempty(),
      webm: z.string().nonempty(),
      poster: z.string().nonempty()
    }).optional()
  }),
  sections: z.array(createSectionSchema()),
  features: createBaseSchema().extend({
    items: z.array(createFeatureItemSchema())
  }),
  cta: createBaseSchema().extend({
    links: z.array(createLinkSchema())
  })
})

export const collections = {
  index: defineCollection({
    source: '0.index.yml',
    type: 'page',
    schema: createPageSchema()
  }),
  porwr: defineCollection({
    source: '1.porwr.yml',
    type: 'page',
    schema: createPageSchema()
  }),
  symudol: defineCollection({
    source: '2.symudol.yml',
    type: 'page',
    schema: createPageSchema()
  }),
  bancwr: defineCollection({
    source: '3.bancwr.yml',
    type: 'page',
    schema: createPageSchema()
  }),
  docs: defineCollection({
    source: '1.docs/**/*',
    type: 'page'
  }),
  // Policy pages served at the site root, such as /privacy (app/pages/privacy.vue).
  legal: defineCollection({
    source: {
      include: 'legal/**/*.md',
      prefix: '/'
    },
    type: 'page'
  })
}
