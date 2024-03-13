<template>
  <section class="mt-10" v-if="props.reviews">
    <div class="flex items-center justify-between">
      <h2 class="text-text-blue font-bold text-xl uppercase">
        {{ props.reviews.review }}
      </h2>
    </div>
    <p>{{ props.reviews.name }}</p>
    <span class="border-t block h-px mt-5 mb-5" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  reviews: Object
})
</script>
