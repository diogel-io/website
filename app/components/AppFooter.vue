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
}]
</script>

<template>
  <USeparator
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns" />
      </UContainer>
    </template>

    <template #left>
      <nuxt-link
        to="https://find-and-update.company-information.service.gov.uk/company/05608093"
        rel="nofollow"
        class="mt-8 dark:text-gray-200 text-gray-900 md:order-1 md:mt-0 hover:underline text-xs"
      >
        &copy; {{ new Date().getFullYear() }} threenine.io registered in England & Wales 05608093 VAT
        no. GB 900383850
      </nuxt-link>
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
    </template>
  </UFooter>
</template>
