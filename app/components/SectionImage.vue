<script setup lang="ts">
// A section screenshot (#166): sized so the page reserves its space before it loads, loaded only
// as it nears the screen, and served as resized WebP. The page's classes pass through to the image.
const props = defineProps<{
  src: string
  width: number
  height: number
  alt: string
}>()

// The widest it is shown, in CSS pixels: sections cap images at about 640px wide, and the product
// pages cap tall screenshots at 640px high. Never more than the file's own width. NuxtImg serves
// this width and twice it, and twice it is still within the file, so no variant is upscaled.
const MAX_SIDE = 640
const shownWidth = computed(() => {
  const capped = props.height > props.width ? (MAX_SIDE * props.width) / props.height : MAX_SIDE
  return Math.round(Math.min(capped, props.width))
})
const sizes = computed(() => `${shownWidth.value}px`)

// A definite width, so the width and height attributes reserve the image's space before it loads.
// Without one, the product pages' `w-auto` leaves a lazy image 0×0 until it arrives. Tall
// screenshots take their shown width, and wide ones fill the column, as they already did.
const style = computed(() => ({
  width: props.height > props.width ? `${shownWidth.value}px` : '100%'
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
