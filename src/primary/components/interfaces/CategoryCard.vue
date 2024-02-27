<template>
  <Card class="text-center w-1/2">
    <CardHeader>
      <img class="w-24 h-24 mx-auto" :src="props.category.image" />
    </CardHeader>
    <CardContent> {{ props.category.title }} </CardContent>
    <CardDescription class="px-6 pb-6">{{ props.category.description }}</CardDescription>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader } from '@/primary/components/ui/card'

const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>
