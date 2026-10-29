<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useThemeColor()

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

// noindex (#164): the 404 status already keeps this out of search, and this also covers errors
// rendered in the browser, which have no status.
useSeoMeta({
  titleTemplate: '%s - Diogel',
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.',
  robots: 'noindex'
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/docs')?.children || []
})
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}]
</script>

<template>
  <div>
    <AppHeader />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }"
        title="Search the docs"
        description="Search Diogel's documentation"
      />
    </ClientOnly>

    <UToaster />
  </div>
</template>
