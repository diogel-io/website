<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    default: 'Diogel'
  }
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center bg-[#111827] text-white p-12">
    <div class="flex flex-col gap-4">
      <p class="text-orange-500 text-xl font-bold">
        {{ headline }}
      </p>
      <h1 class="text-5xl font-bold leading-tight">
        {{ title }}
      </h1>
      <p class="text-gray-400 text-2xl leading-relaxed">
        {{ description }}
      </p>
    </div>
    <div class="mt-auto flex items-center gap-2 text-gray-500 text-lg">
      <span>diogel.io</span>
    </div>
  </div>
</template>