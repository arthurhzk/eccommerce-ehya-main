<script setup lang="ts">
import { Avatar, AvatarImage } from '@/primary/components/ui/avatar'
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <Avatar>
    <AvatarImage :src="props.image" />
  </Avatar>
</template>
