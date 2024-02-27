<template>
  <Card>
    <CardHeader>
      <img class="w-24 h-24" :src="props.service.image" />
    </CardHeader>
    <CardContent> {{ props.service.title }} </CardContent>
    <CardDescription class="px-6 pb-6">{{ props.service.description }}</CardDescription>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader } from '@/primary/components/ui/card'

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>
