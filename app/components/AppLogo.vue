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
    width="60"
    height="60"
    class="h-20 w-auto"
  />
</template>
