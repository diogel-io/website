<script setup lang="ts">
// Both logos are rendered and CSS picks one, because the prerendered HTML
// cannot know the visitor's system theme. The colour-mode script sets the
// `dark` class on <html> before first paint, so the `dark:` variants apply
// immediately.
defineOptions({ inheritAttrs: false })
</script>

<template>
  <NuxtImg
    v-bind="$attrs"
    src="/img/logo/diogel-logo-light.svg"
    alt="Diogel"
    width="60"
    height="60"
    class="h-20 w-auto dark:hidden"
  />
  <NuxtImg
    v-bind="$attrs"
    src="/img/logo/diogel-logo-dark.svg"
    alt="Diogel"
    width="60"
    height="60"
    class="h-20 w-auto hidden dark:block"
  />
</template>
