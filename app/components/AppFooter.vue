<script setup lang="ts">
const columns = [{
  label: 'Products',
  children: [{
    label: 'Porwr',
    to: '/porwr'
  }, {
    label: 'Android',
    to: '/android'
  }, {
    label: 'Bancwr',
    to: '/bancwr'
  }]
}, {
  label: 'Resources',
  children: [{
    label: 'Docs',
    to: '/docs'
  }, {
    label: 'GitHub',
    to: 'https://github.com/threenine'
  }]
}, {
  label: 'Company',
  children: [{
    label: 'Threenine',
    to: 'https://threenine.io'
  }]
}]
</script>

<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns" />
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        © {{ new Date().getFullYear() }} Threenine. All rights reserved.
      </p>
    </template>

    <template #right>
      <UButton
        to="https://github.com/threenine"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="Threenine on GitHub"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://threenine.io"
        target="_blank"
        icon="i-lucide-globe"
        aria-label="Threenine website"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>