<script setup lang="ts">
const colorMode = useColorMode()

const logoSrc = computed(() =>
  colorMode.value === 'dark'
    ? '/img/logo/diogel-logo-dark.svg'
    : '/img/logo/diogel-logo-light.svg'
)
</script>

<template>
  <NuxtImg
    :src="logoSrc"
    alt="Diogel"
    width="120"
    height="24"
    class="h-6 w-auto"
  />
</template>