<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title || ''
const description = page.value?.seo?.description || page.value?.description || ''

useSeoMeta({ titleTemplate: '' })
usePageSeo({ title, description, path: '/' })
useJsonLd(ORGANIZATION)
</script>

<template>
  <div v-if="page">
    <!-- The hero is dark in both colour modes, because its background video is (workspace#91). -->
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.hero.links"
      orientation="horizontal"
      class="dark"
    >
      <template #top>
        <HeroVideo
          v-if="page.hero.video"
          v-bind="page.hero.video"
        />
      </template>

      <template #title>
        <MDC
          :value="page.title"
          unwrap="p"
        />
      </template>
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
      <SectionVideo
        v-if="section.video"
        v-bind="section.video"
      />
      <SectionImage
        v-else-if="section.image"
        v-bind="section.image"
        :alt="section.title"
        class="w-full rounded-lg shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
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
