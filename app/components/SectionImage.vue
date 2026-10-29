<script setup lang="ts">
// A section screenshot (#166): sized so the page reserves its space before it loads, loaded only
// as it nears the screen, and served as resized WebP. The page's classes pass through to the image.
const props = defineProps<{
  src: string
  width: number
  height: number
  alt: string
}>()

// The widest it is shown beside the section text, in CSS pixels: about 640px wide, or for a tall
// screenshot the width at the product pages' 640px height cap. Never more than the file's own width.
const MAX_SIDE = 640
const isTall = computed(() => props.height > props.width)
const shownWidth = computed(() => {
  const capped = isTall.value ? (MAX_SIDE * props.width) / props.height : MAX_SIDE
  return Math.round(Math.min(capped, props.width))
})
// Tall screenshots are shown at the same width at every screen size. Wide ones fill the single
// column below lg, then share the row at about 640px. NuxtImg applies each size from its screen
// up to the next one, so this reads "(max-width: 1024px) 100vw, 640px".
const sizes = computed(() => isTall.value ? `${shownWidth.value}px` : `md:100vw lg:${MAX_SIDE}px`)

// A definite width, so the width and height attributes reserve the image's space before it loads.
// Without one, the product pages' `w-auto` leaves a lazy image 0×0 until it arrives. Tall
// screenshots take their shown width, and wide ones fill the column, as they already did.
const style = computed(() => ({
  width: isTall.value ? `${shownWidth.value}px` : '100%'
}))
</script>

<template>
  <NuxtImg
    :src="props.src"
    :width="props.width"
    :height="props.height"
    :alt="props.alt"
    :sizes="sizes"
    :style="style"
    format="webp"
    loading="lazy"
    decoding="async"
  />
</template>
