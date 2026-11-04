<script setup lang="ts">
// A product's own privacy notice, such as /privacy/symudol (diogel-io/symudol#39), beside the
// website policy at /privacy. Each is a page in the legal collection.
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('legal').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

usePageSeo({ title, description, path: route.path, type: 'article' })
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <UPageHeader
        :title="page.title"
        :description="page.description"
      />

      <UPageBody>
        <ContentRenderer :value="page" />
      </UPageBody>

      <template
        v-if="page.body?.toc?.links?.length"
        #right
      >
        <UContentToc :links="page.body.toc.links" />
      </template>
    </UPage>
  </UContainer>
</template>
