<template>
  <section>
    <div class="space-y-2">
      <img class="mx-auto" :src="props.image" />
      <h2 class="text-text-blue font-bold text-xl text-center">{{ props.title }}</h2>
      <p class="text-center text-text-gray">{{ props.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  image: string
}>()
</script>
