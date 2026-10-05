<script setup lang="ts">
// A home page explainer (#17): silent and looping, loaded and played only while on screen, so the
// page pays for the poster alone until someone scrolls to it. With reduced motion it stays on the
// poster until played by hand.
const props = defineProps<{
  mp4: string
  webm: string
  poster: string
  label: string
}>()

const video = ref<HTMLVideoElement>()
const reducedMotion = usePreferredReducedMotion()
const stillOnly = computed(() => reducedMotion.value === 'reduce')
const playing = ref(false)

const visible = ref(false)
useIntersectionObserver(video, ([entry]) => {
  visible.value = entry?.isIntersecting ?? false
}, { threshold: 0.4 })

watch([visible, stillOnly], ([inView, still]) => {
  const element = video.value
  if (!element) return
  if (inView && !still) element.play().catch(() => {})
  else if (!inView) element.pause()
})

function play() {
  video.value?.play().catch(() => {})
}
</script>

<template>
  <div class="relative">
    <video
      ref="video"
      :poster="props.poster"
      :aria-label="props.label"
      :controls="stillOnly && playing"
      class="w-full rounded-lg shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      muted
      loop
      playsinline
      preload="none"
      @play="playing = true"
      @pause="playing = false"
    >
      <source
        :src="props.webm"
        type="video/webm"
      >
      <source
        :src="props.mp4"
        type="video/mp4"
      >
    </video>
    <UButton
      v-if="stillOnly && !playing"
      icon="i-lucide-play"
      :aria-label="`Play: ${props.label}`"
      color="neutral"
      variant="solid"
      size="xl"
      class="absolute bottom-3 right-3 rounded-full"
      @click="play"
    />
  </div>
</template>
