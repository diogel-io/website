<script setup lang="ts">
// An explainer video inside a docs page (#74), used from markdown as `::docs-video`. The video
// behaves like the home page ones (SectionVideo). The block's content is shown as the caption, so
// the steps stay readable as text with reduced motion and for screen readers.
defineProps<{
  mp4: string
  webm: string
  poster: string
  label: string
}>()
</script>

<template>
  <figure class="my-8">
    <SectionVideo
      :mp4="mp4"
      :webm="webm"
      :poster="poster"
      :label="label"
    />
    <figcaption class="mt-4 text-muted">
      <slot />
    </figcaption>
  </figure>
</template>
