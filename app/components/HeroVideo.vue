<script setup lang="ts">
// The homepage hero background (diogel-io/workspace#87, #91): concept C, a silent looping video of
// Porwr, Symudol and Bancwr behind the copy. It is decoration, so it is hidden from assistive
// technology and never takes focus.
//
// The poster is the only thing in the prerendered HTML, so it is the hero's first paint. The video
// is added after mount, and only on wide screens, without reduced motion and without Save-Data;
// everyone else keeps the poster as a still.
const props = defineProps<{
  mp4: string
  webm: string
  poster: string
}>()

const reducedMotion = usePreferredReducedMotion()
const wide = useMediaQuery('(min-width: 768px)')
const saveData = ref(true)
const play = computed(() => !saveData.value && wide.value && reducedMotion.value !== 'reduce')

onMounted(() => {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  saveData.value = connection?.saveData === true
})
</script>

<template>
  <div
    class="hero-video absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <img
      :src="props.poster"
      alt=""
      width="1920"
      height="1080"
      fetchpriority="high"
      class="hero-video__media"
    >
    <video
      v-if="play"
      :poster="props.poster"
      class="hero-video__media"
      tabindex="-1"
      autoplay
      muted
      loop
      playsinline
      disablepictureinpicture
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
    <div class="hero-video__scrim" />
  </div>
</template>

<style scoped>
.hero-video {
  /* The video's own canvas, so any letterboxing matches it. */
  background-color: #0b0f17;
}

/* The products sit on the right of every frame, so crop from the left. */
.hero-video__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
}

/*
 * Keeps the copy readable over every frame, including the dissolves. Below lg the copy runs the
 * full width, so the scrim darkens from the top; from lg it darkens the left, as in concept C.
 * The first layer fades the foot into the page background, so the hero has no hard lower edge.
 */
.hero-video__scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgb(0 0 0 / 0) 82%, var(--ui-bg) 100%),
    linear-gradient(180deg, rgb(11 15 23 / 0.96) 0%, rgb(11 15 23 / 0.92) 60%, rgb(11 15 23 / 0.7) 100%);
}

@media (min-width: 1024px) {
  .hero-video__scrim {
    background:
      linear-gradient(180deg, rgb(0 0 0 / 0) 78%, var(--ui-bg) 100%),
      linear-gradient(90deg, rgb(11 15 23 / 0.96) 0%, rgb(11 15 23 / 0.88) 34%, rgb(11 15 23 / 0.4) 50%, rgb(11 15 23 / 0) 62%);
  }
}
</style>
