<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs', route.path, {
    fields: ['description']
  })
})

// Docs pages share titles across products ("Installation"), so product pages name the product.
const DOCS_SECTIONS: Record<string, string> = { porwr: 'Porwr', symudol: 'Symudol', bancwr: 'Bancwr' }
const section = DOCS_SECTIONS[route.path.split('/')[2] || '']

const pageTitle = page.value.seo?.title || page.value.title
const title = section && !pageTitle.includes(section) ? `${pageTitle} - ${section}` : pageTitle
const description = page.value.seo?.description || page.value.description

usePageSeo({ title, description, path: route.path, type: 'article' })
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
    />

    <UPageBody>
      <ContentRenderer
        v-if="page.body"
        :value="page"
      />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page?.body?.toc?.links?.length"
      #right
    >
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
