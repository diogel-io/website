<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: 'Porwr',
  to: '/porwr',
  active: route.path.startsWith('/porwr')
}, {
  label: 'Android',
  to: '/android',
  active: route.path.startsWith('/android')
}, {
  label: 'Bancwr',
  to: '/bancwr',
  active: route.path.startsWith('/bancwr')
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <UButton
        label="Get Started"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        to="/docs/getting-started"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Get Started"
        color="neutral"
        to="/docs/getting-started"
        block
      />
    </template>
  </UHeader>
</template>
