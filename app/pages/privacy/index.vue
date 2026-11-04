<script setup lang="ts">
const { data: page } = await useAsyncData('privacy', () => queryCollection('legal').path('/privacy').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

usePageSeo({ title, description, path: '/privacy', type: 'article' })
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
