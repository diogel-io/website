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
  image: z.string().optional(),
  features: z.array(createFeatureItemSchema())
})

const createPageSchema = () => z.object({
  hero: z.object({
    links: z.array(createLinkSchema()),
    image: z.string().optional()
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
  })
}
