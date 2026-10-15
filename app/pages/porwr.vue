<script setup lang="ts">
const { data: page } = await useAsyncData('porwr', () => queryCollection('porwr').first())

const title = page.value?.seo?.title || page.value?.title || ''
const description = page.value?.seo?.description || page.value?.description || ''

useSeoMeta({ titleTemplate: '' })
usePageSeo({ title, description, path: '/porwr' })
useSoftwareApplicationJsonLd({ name: 'Porwr', description, path: '/porwr', operatingSystem: 'Chrome, Firefox' })
</script>

<template>
  <div v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.hero.links"
      orientation="horizontal"
    >
      <img
        v-if="page.hero.image"
        :src="page.hero.image.src"
        :srcset="page.hero.image.srcset"
        sizes="(min-width: 1024px) 50vw, 100vw"
        :width="page.hero.image.width"
        :height="page.hero.image.height"
        :alt="page.hero.image.alt"
        fetchpriority="high"
        class="h-auto w-full"
      >
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse || false"
      :features="section.features"
    >
      <img
        v-if="section.image"
        :alt="section.title"
        :src="section.image"
        class="mx-auto max-h-[640px] w-auto max-w-full rounded-lg shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      >
    </UPageSection>

    <UPageSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
